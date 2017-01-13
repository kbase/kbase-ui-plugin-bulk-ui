System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, msecPerMinute, msecPerHour, msecPerDay, dayOfWeek, months, sizes, Encode, ElapsedTime, ReadableSize;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            msecPerMinute = 1000 * 60;
            msecPerHour = msecPerMinute * 60;
            msecPerDay = msecPerHour * 24;
            dayOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
            months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',
                'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            Encode = class Encode {
                transform(value, args) {
                    return encodeURIComponent(value);
                }
            };
            Encode = __decorate([
                core_1.Pipe({ name: 'encode' })
            ], Encode);
            exports_1("Encode", Encode);
            ElapsedTime = class ElapsedTime {
                transform(value, args) {
                    var date = new Date();
                    var interval = date.getTime() - value;
                    var days = Math.floor(interval / msecPerDay);
                    interval = interval - (days * msecPerDay);
                    var hours = Math.floor(interval / msecPerHour);
                    interval = interval - (hours * msecPerHour);
                    var minutes = Math.floor(interval / msecPerMinute);
                    interval = interval - (minutes * msecPerMinute);
                    var seconds = Math.floor(interval / 1000);
                    if (days == 0 && hours == 0 && minutes == 0) {
                        return seconds + " secs ago";
                    }
                    else if (days == 0 && hours == 0) {
                        if (minutes == 1)
                            return "1 min ago";
                        return minutes + " mins ago";
                    }
                    else if (days == 0) {
                        if (hours == 1)
                            return "1 hour ago";
                        return hours + " hours ago";
                    }
                    else if (days == 1) {
                        var d = new Date(value), t = d.toLocaleTimeString().split(':');
                        return 'yesterday at ' + t[0] + ':' + t[1] + ' ' + t[2].split(' ')[1];
                    }
                    else if (days < 7) {
                        var d = new Date(value), day = dayOfWeek[d.getDay()], t = d.toLocaleTimeString().split(':');
                        return day + " at " + t[0] + ':' + t[1] + ' ' + t[2].split(' ')[1];
                    }
                    else {
                        var d = new Date(value);
                        return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
                    }
                }
            };
            ElapsedTime = __decorate([
                core_1.Pipe({ name: 'elapsedTime' })
            ], ElapsedTime);
            exports_1("ElapsedTime", ElapsedTime);
            ReadableSize = class ReadableSize {
                // interesting solution based on http://stackoverflow.com/questions
                // /15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
                transform(value, args) {
                    if (value === 0)
                        return '0 Byte';
                    let k = 1000, // or 1024 for binary
                    dm = 2; //decimals + 1 || 2;
                    let i = Math.floor(Math.log(value) / Math.log(k));
                    return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
                }
            };
            ReadableSize = __decorate([
                core_1.Pipe({ name: 'readableSize' })
            ], ReadableSize);
            exports_1("ReadableSize", ReadableSize);
        }
    };
});
//# sourceMappingURL=pipes.js.map