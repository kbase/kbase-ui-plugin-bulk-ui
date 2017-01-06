import { Component, OnInit } from '@angular/core';

const htmlTemplate = `
<card>
    <h2>Bulk Importer <sup>(Beta Preview)</sup></h2>
    <p>
        To get started, you must <b>first upload your data via "Browse"</b>.
    </p>
    <p>
        The Bulk Importer will support two ways to accomplish this: upload <b>via Globus Online</b> and
        <b>upload via this interface</b>.  Currently, <b>upload is only supported via Globus Online</b>.
    </p>
</card>
`

@Component({
    template: htmlTemplate
})
export class HomeView {
    constructor() { }

    ngOnInit() { }

}