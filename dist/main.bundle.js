webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"../../node_modules/bootstrap/dist/js/bootstrap.min.js\"></script>\n<script src=\"../../node_modules/bootstrap-switch/dist/js/bootstrap-switch.min.js\"></script>\n\n<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n     <h1> Dashboard</h1>\n  </div>\n</div>\n<div class=\"row\">\n<div class=\"table-responsive\">\n  <table class=\"table\">\n      <tr >\n        <td *ngFor=\"let val of matrice; let i = index\">\n            <table>\n                <tr>\n                    <td style=\"\n                    border-bottom: 1px solid;\n\n                \"><h3 >server {{i+1}}</h3></td>\n                </tr>\n                <tr>\n                      <td >\n                        <h5 *ngIf=\"matrice[i]==1\">\n                            status ok\n                        </h5>\n                        <h5 *ngIf=\"matrice[i]==0\">\n                            status ko\n                        </h5>\n                      </td>\n\n                      <td>\n                          <img src=\"/assets/verde.png\" *ngIf='val==1' class=\"imgSemaforo\">\n                           <img src=\"/assets/rossoa.png\" *ngIf='val==0' class=\"imgSemaforo\">\n                       </td>\n                </tr>\n                <tr>\n                    <td style=\"\n                    border-top: 1px solid;\n                    padding: 5px;\n                \">\n\n\n\n                </td>\n                </tr>\n            </table>\n        </td>\n\n\n      </tr>\n      <tr>\n        <td>\n          <ui-switch  [checked]=\"matrice[0]==0?false:true\" color=\"blue\"  (change)=\"onChange($event,1)\"></ui-switch>\n        </td>\n          <td>\n            <ui-switch   [checked]=\"matrice[1]==0?false:true\" color=\"blue\"  (change)=\"onChange($event, 2)\"></ui-switch>\n          </td>\n          <td>\n            <ui-switch   [checked]=\"matrice[2]==0?false:true\" color=\"blue\"  (change)=\"onChange($event,3 )\"></ui-switch>\n          </td>\n      </tr>\n  </table>\n\n\n\n</div>\n</div>\n</div>\n<!--<form #form=\"ngForm\" (ngSubmit)=\"upload(form)\" >\n\n  FILE <input type=\"file\" class=\"form-control\" id=\"fileup\"\n  required\n   name=\"fileup\" (change)=\"fileEvent($event)\">\n <button  type=\"submit\" >upload</button>\n\n</form>-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_server_service__ = __webpack_require__("../../../../../src/app/update-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var AppComponent = (function () {
    function AppComponent(chatService, update) {
        var _this = this;
        this.chatService = chatService;
        this.update = update;
        this.server1 = "https://demoserveruno.azurewebsites.net";
        this.server2 = "https://demoserverdue.azurewebsites.net";
        this.server3 = "https://demoservertre.azurewebsites.net";
        this.title = 'app';
        this.matrice = [0, 0, 0];
        this.chatService.getMEssages().subscribe(function (message) {
            console.log(message);
            _this.matrice[0] = message[0];
            _this.matrice[1] = message[1];
            _this.matrice[2] = message[2];
        });
    }
    /*upload(form){
      console.log(this.filesToUpload);
     this.update.salvaVoce(this.filesToUpload).subscribe((res)=>{
       console.log(res);
     });
    }
    fileEvent(fileInput){
      console.log(fileInput);
      this.filesToUpload = <Array<File>> fileInput.target.files;
  
  }*/
    AppComponent.prototype.onChange = function (event, val) {
        console.log(event, val);
        switch (val) {
            case 1:
                this.update.updateStatus(this.server1 + "/stat", event).subscribe(function (resp) {
                    console.log(resp);
                });
                break;
            case 2:
                this.update.updateStatus(this.server2 + "/stat", event).subscribe(function (resp) {
                    console.log(resp);
                });
                break;
            case 3:
                this.update.updateStatus(this.server3 + "/stat", event).subscribe(function (resp) {
                    console.log(resp);
                });
                break;
            default:
                break;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__update_server_service__["a" /* UpdateServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__update_server_service__["a" /* UpdateServerService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_ui_switch__ = __webpack_require__("../../../../ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__update_server_service__ = __webpack_require__("../../../../../src/app/update-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { UiSwitchModule } from 'ngx-ui-switch';






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_ui_switch__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_6__update_server_service__["a" /* UpdateServerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CHAT_URL = 'https://demoserverping.azurewebsites.net';
var ChatService = (function () {
    function ChatService() {
    }
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit('matrice', message);
    };
    ChatService.prototype.getMEssages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(CHAT_URL);
            _this.socket.on('matrice', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ChatService);

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/update-server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateServerService = (function () {
    function UpdateServerService(http) {
        this.http = http;
    }
    UpdateServerService.prototype.updateStatus = function (url, status) {
        var stsc = "";
        if (status == false)
            stsc = "400";
        if (status == true)
            stsc = "200";
        console.log(url, status, stsc);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.patch(url, JSON.stringify({ "status": stsc }), { headers: headers }).map(function (response) { return response.json(); });
    };
    UpdateServerService.prototype.salvaVoce = function (files) {
        var url = "https://westus.api.cognitive.microsoft.com/spid/v1.0/identificationProfiles/cc96d3ca-45da-46d8-a8a3-7638a2156e70/enroll?shortAudio=true";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Ocp-Apim-Subscription-Key', '216e24c174614fc1974d490f0c215358');
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append(files[i].name, files[i]);
        }
        return this.http
            .post(url, formData, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    return UpdateServerService;
}());
UpdateServerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UpdateServerService);

var _a;
//# sourceMappingURL=update-server.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map