/*global define*/
/*jslint white:true,browser:true*/
define([
    'bluebird',
    'numeral',
    'kb/service/client/shock',
    'kb/common/html',
    'kb/common/format'
], function (Promise, numeral, Shock, html, format) {
    'use strict';
    function factory(config) {
        var runtime = config.runtime,
            parent, container,
            shockClient = new Shock({
                url: runtime.getConfig('services.shock.url'),
                token: runtime.service('session').getAuthToken()
            });

        // IMPLEMENTATION

        function renderTable(files) {
            var t = html.tag,
                table = t('table'), tr = t('tr'), th = t('th'), td = t('td');

            return table({class: 'table'}, [
                tr([
                    th('#'), th('Name'), th('Size'), th('Created'), th('Type')
                ]),
                files.map(function (file, index) {
                    console.log(file);
                    var created = new Date(file.created_on);
                    return tr([
                        td(String(index + 1)),
                        td(file.file.name),
                        td({style: {textAlign: 'right'}},
                            numeral(file.file.size).format('0 b')),
                        td(created.toLocaleString()),
                        td(file.type)
                    ]);
                })
            ]);
        }

        function render(files) {
            var t = html.tag, div = t('div');

            return div({class: 'container-fluid'}, [
                div({class: 'panel panel-default'}, [
                    div({class: 'panel-heading'}, [
                        div({class: 'panel-title'}, 'Shock File Browser')
                    ]),
                    div({class: 'panel-body'}, [
                        renderTable(files)
                    ])
                ])
            ]);
        }

        var places = {};
        function addPlaceHolder(name) {
            var div = html.tag('div'),
                id = html.genId();

            places[name] = {
                id: id
            };

            return div({
                id: id,
                dataPlace: 'id'
            });
        }
        function setPlaceContent(name, content) {
            var place = places[name];
            if (place === undefined) {
                throw new Error('Place not defined ' + name);
            }
            document.getElementById(place.id).innerHTML = content;
        }

        function renderLayout() {
            return html.makeTabs({
                tabs: [
                    {
                        label: 'File Browser',
                        content: addPlaceHolder('browser')
                    },
                    {
                        label: 'CSV',
                        content: addPlaceHolder('csv')
                    },
                    {
                        label: 'About',
                        content: addPlaceHolder('about')
                    }
                ]
            });
        }

        // API

        function attach(node) {
            parent = node;
            container = parent.appendChild(document.createElement('div'));
            container.innerHTML = renderLayout();
            runtime.send('ui', 'setTitle', 'This is the Shock File Browser');
        }

        function start(params) {
            // get a list of shock nodes.
            var options = {
                queryNode: {
                    // last_modified: '2016-01-25T07:12:11.126-08:00'
                    type: 'basic'
                },
                owner: 'eapearson',
                limit: 100
            };
            return shockClient.get_nodes(options)
                .then(function (nodes) {
                    return Promise.all(nodes.map(function (node) {
                        return shockClient.get_node_acls(node.id).
                            then(function (acls) {
                                node.acls = acls;
                                return node;
                            });
                    }));
                })
                .then(function (nodes) {
                    setPlaceContent('browser', render(nodes));
                });
        }

        function stop() {
        }

        function detach() {
            if (container) {
                parent.removeChild(container);
            }
        }

        return {
            attach: attach,
            start: start,
            stop: stop,
            detach: detach
        };
    }
    return {
        make: function (config) {
            return factory(config);
        }
    };
});