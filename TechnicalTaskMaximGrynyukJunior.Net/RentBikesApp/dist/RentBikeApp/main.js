(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Moksim\source\repos\TechnicalTaskMaximGrynyukJunior.Net\RentBikesApp\RentBikeApp\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rent_bikes_details_rent_bikes_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rent-bikes-details/rent-bikes-details.component */ "dcfV");



class AppComponent {
    constructor() {
        this.title = 'RentBikeApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-rent-bikes-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_rent_bikes_details_rent_bikes_details_component__WEBPACK_IMPORTED_MODULE_1__["RentBikesDetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _rent_bikes_details_rent_bikes_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rent-bikes-details/rent-bikes-details.component */ "dcfV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _rent_bikes_details_rent_bikes_details_component__WEBPACK_IMPORTED_MODULE_5__["RentBikesDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _rent_bikes_details_rent_bikes_details_component__WEBPACK_IMPORTED_MODULE_5__["RentBikesDetailsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bGi9":
/*!******************************************************!*\
  !*** ./src/app/shared/rent-bikes-details.service.ts ***!
  \******************************************************/
/*! exports provided: RentBikesDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentBikesDetailsService", function() { return RentBikesDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rent_bikes_detail_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rent-bikes-detail.model */ "zI5C");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class RentBikesDetailsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:49948/api/v2/RentBike";
        this.formData = new _rent_bikes_detail_model__WEBPACK_IMPORTED_MODULE_1__["Bike"]();
    }
    createAvailableBike(id, bike) {
        bike.id = ++id;
        bike.isAvailable = true;
        bike.rentCost = +bike.rentCost;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        console.log(`${this.baseUrl + "/" + bike.id}`);
        console.log(bike);
        let result = this.http.post(`${this.baseUrl + "/" + bike.id}`, { body: bike }, { headers: headers });
        return result;
    }
    setRent(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        let result = this.http.put(`${this.baseUrl + "/" + id + "/RentBike"}`, { headers: headers });
        return this.http.put(`${this.baseUrl + "/" + id + "/RentBike"}`, { headers: headers });
    }
    cancelRent(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.put(`${this.baseUrl + "/" + id + "/CancelRent"}`, { headers: headers });
    }
    deleteBike(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.delete(`${this.baseUrl}/${id}`, { headers: headers });
    }
    getBikes() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.get(`${this.baseUrl}/Bikes`, { headers: headers });
    }
    getAvailableBikes() {
        return this.http.get(this.baseUrl + "/AvailableBikes");
    }
    getRentBikes() {
        return this.http.get(this.baseUrl + "/RentBikes");
    }
}
RentBikesDetailsService.ɵfac = function RentBikesDetailsService_Factory(t) { return new (t || RentBikesDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RentBikesDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RentBikesDetailsService, factory: RentBikesDetailsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RentBikesDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "dcfV":
/*!********************************************************************!*\
  !*** ./src/app/rent-bikes-details/rent-bikes-details.component.ts ***!
  \********************************************************************/
/*! exports provided: RentBikesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentBikesDetailsComponent", function() { return RentBikesDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_rent_bikes_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/rent-bikes-details.service */ "bGi9");
/* harmony import */ var _shared_rent_bikes_detail_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/rent-bikes-detail.model */ "zI5C");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RentBikesDetailsComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RentBikesDetailsComponent_tr_43_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const bike_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.cancelRentBike(bike_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel Rent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bike_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", bike_r5.name, " / ", bike_r5.type, " / ", bike_r5.rentCost, " ");
} }
function RentBikesDetailsComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RentBikesDetailsComponent_tr_49_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const bike_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.setRentBike(bike_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RentBikesDetailsComponent_tr_49_Template_input_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const bike_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteBike(bike_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bike_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", bike_r8.name, " / ", bike_r8.type, " / ", bike_r8.rentCost, " ");
} }
class RentBikesDetailsComponent {
    constructor(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.editedBike = new _shared_rent_bikes_detail_model__WEBPACK_IMPORTED_MODULE_2__["Bike"]();
        this.totalCost = 0;
        this.availableBikes = new Array();
        this.rentBikes = new Array();
    }
    ngOnInit() {
        this.loadAvailableBikes();
        this.loadRentBikes();
        console.log(this.availableBikes);
        console.log(this.bikes);
    }
    loadAvailableBikes() {
        this.service.getAvailableBikes().subscribe(data => {
            this.availableBikes = data;
        });
    }
    loadRentBikes() {
        this.totalCost = 0;
        this.service.getRentBikes().subscribe(data => {
            this.rentBikes = data;
            for (let i = 0; i < this.rentBikes.length; i++) {
                this.totalCost += this.rentBikes[i].rentCost;
            }
        });
    }
    addAvailableBike(form) {
        this.service.getBikes().subscribe(data => {
            this.bikes = data;
            this.service.createAvailableBike(this.bikes[this.bikes.length - 1].id, this.editedBike);
            this.toastr.success('Submitted successfully', 'The new available bike was registered');
            this.bikes.push(this.editedBike);
            this.availableBikes.push(this.editedBike);
            this.resetForm(form);
            this.loadAvailableBikes();
            this.loadRentBikes();
        });
    }
    deleteBike(id) {
        if (confirm('Are you sure to delete this record?')) {
            this.service.deleteBike(id)
                .subscribe(res => {
                this.loadAvailableBikes();
                this.loadRentBikes();
                this.toastr.success('Deleted successfully', 'The bike was deleted');
            }, err => { console.log(err); });
        }
    }
    setRentBike(id) {
        this.service.setRent(id).subscribe(res => {
            this.loadRentBikes();
            this.loadAvailableBikes();
            this.toastr.success('Updated successfully', 'The bike was rented');
        }, err => { console.log(err); });
    }
    cancelRentBike(id) {
        this.service.cancelRent(id).subscribe(res => {
            this.loadRentBikes();
            this.loadAvailableBikes();
            this.toastr.success('Updated successfully', "The bike's was cancled");
        }, err => { console.log(err); });
    }
    resetForm(form) {
        form.form.reset();
        this.service.formData = new _shared_rent_bikes_detail_model__WEBPACK_IMPORTED_MODULE_2__["Bike"]();
    }
}
RentBikesDetailsComponent.ɵfac = function RentBikesDetailsComponent_Factory(t) { return new (t || RentBikesDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_rent_bikes_details_service__WEBPACK_IMPORTED_MODULE_1__["RentBikesDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
RentBikesDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RentBikesDetailsComponent, selectors: [["app-rent-bikes-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_shared_rent_bikes_details_service__WEBPACK_IMPORTED_MODULE_1__["RentBikesDetailsService"]])], decls: 50, vars: 8, consts: [["src", "assets/images/smile1.png", "width", "30px", "height", "30px", "alt", "html5"], ["novalidate", "", "autocomplete", "off", 1, "createForm", "flex", "flex-vertical-center"], ["form", "ngForm"], [1, "form-group"], [1, "container"], [1, "row", "d-flex", "align-items-center"], [1, "col-sm"], ["type", "text", "placeholder", "Bike name", "name", "bikeName", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["id", "types", "name", "rentType", "name", "bikeType", 1, "form-control", "types", 3, "ngModel", "ngModelChange"], ["rentBikeType", "ngModel"], ["value", "Road"], ["value", "Walking"], ["value", "Rock"], ["value", "Highway"], ["value", "Touring"], ["value", "Custom", "selected", ""], ["type", "text", "placeholder", "Rent price", "name", "rentCost", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["rentCost", "ngModel"], ["type", "button", "form", "data", "value", "Submit rent", 1, "btn", "btn-success", "submitRent", 3, "disabled", "click"], [1, "rentForm", "flex", "flex-vertical-center"], ["src", "assets/images/smile2.png", "width", "30px", "height", "30px", "alt", "html5"], [4, "ngFor", "ngForOf"], [1, "availableForm", "flex", "flex-vertical-center"], ["src", "assets/images/smile3.png", "width", "30px", "height", "30px", "alt", "html5"], [1, "bike", "form-group"], [1, "submitBtn"], ["type", "submit", "form", "data", 1, "btn", "btn-danger", "cancelBtn", 3, "click"], ["type", "button", "value", "Rent", 1, "btn", "btn-primary", "rentBtn", 3, "click"], ["type", "button", "value", "Delete", 1, "btn", "btn-danger", "deleteBtn", 3, "click"]], template: function RentBikesDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Awesome Bike Rental");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create new rent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bike name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RentBikesDetailsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.editedBike.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bike type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RentBikesDetailsComponent_Template_select_ngModelChange_17_listener($event) { return ctx.editedBike.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Road");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Walking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Rock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Highway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Touring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Rent price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RentBikesDetailsComponent_Template_input_ngModelChange_34_listener($event) { return ctx.editedBike.rentCost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RentBikesDetailsComponent_Template_input_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.addAvailableBike(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RentBikesDetailsComponent_tr_43_Template, 7, 3, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RentBikesDetailsComponent_tr_49_Template, 8, 3, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editedBike.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editedBike.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editedBike.rentCost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your rent (Total: $", ctx.totalCost, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rentBikes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Available bicycles (", ctx.availableBikes.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableBikes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["main[_ngcontent-%COMP%] {\r\n    margin-left: 150px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    color:black;\r\n    padding-bottom: 5px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    padding-bottom: 40px;\r\n    padding-top: 40px;\r\n    font-weight: 700;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n   \r\n}\r\n\r\ntr[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    padding:10px;\r\n}\r\n\r\n.createForm[_ngcontent-%COMP%] {\r\n    background-color: rgb(235, 238, 240) !important;\r\n    border-radius: 2%;\r\n    border: 1px solid rgb(212, 206, 206);\r\n    width: 1050px;\r\n    height: 120px;\r\n    padding-top: 17px;\r\n    padding-left: 10px;\r\n    justify-content: center;\r\n}\r\n\r\n.rentForm[_ngcontent-%COMP%], .availableForm[_ngcontent-%COMP%] {\r\n    padding-top: 100px;\r\n}\r\n\r\n.items[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 48px;\r\n    border: 1px solid rgb(214, 211, 211);\r\n}\r\n\r\n.types[_ngcontent-%COMP%] {\r\n    width: 240px;\r\n    height: 48px;\r\n    border: 1px solid rgb(214, 211, 211);\r\n    text-align: right;\r\n}\r\n\r\n.submitRent[_ngcontent-%COMP%] {\r\n    height: 45px;\r\n    width: 150px;\r\n    margin-top: 37px;\r\n    margin-left: 20px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    margin-right: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:hover {\r\n    border: 1px solid rgb(214, 211, 211);\r\n}\r\n\r\n.bike[_ngcontent-%COMP%] {\r\n    padding:10px;\r\n    background-color: white;\r\n    margin-top:10px;\r\n    width: 1050px;\r\n    border-radius: 2%;\r\n    border: 1px solid rgb(212, 206, 206);\r\n}\r\n\r\n.rentBtn[_ngcontent-%COMP%] {\r\n    margin-left: 640px;\r\n}\r\n\r\n.cancelBtn[_ngcontent-%COMP%] {\r\n    margin-left: 670px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbnQtYmlrZXMtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0NBQStDO0lBQy9DLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InJlbnQtYmlrZXMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxudGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICBcclxufVxyXG50ciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG50Ym9keSB7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGVGb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzOCwgMjQwKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEyLCAyMDYsIDIwNik7XHJcbiAgICB3aWR0aDogMTA1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZW50Rm9ybSwgLmF2YWlsYWJsZUZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uaXRlbXMge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNCwgMjExLCAyMTEpO1xyXG59XHJcblxyXG4udHlwZXMge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNCwgMjExLCAyMTEpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdWJtaXRSZW50IHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDM3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNCwgMjExLCAyMTEpO1xyXG59XHJcblxyXG4uYmlrZSB7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIHdpZHRoOiAxMDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTIsIDIwNiwgMjA2KTtcclxufVxyXG5cclxuLnJlbnRCdG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY0MHB4O1xyXG59XHJcblxyXG4uY2FuY2VsQnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NzBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RentBikesDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rent-bikes-details',
                templateUrl: './rent-bikes-details.component.html',
                styleUrls: ['./rent-bikes-details.component.css'],
                providers: [src_app_shared_rent_bikes_details_service__WEBPACK_IMPORTED_MODULE_1__["RentBikesDetailsService"]]
            }]
    }], function () { return [{ type: src_app_shared_rent_bikes_details_service__WEBPACK_IMPORTED_MODULE_1__["RentBikesDetailsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "zI5C":
/*!***************************************************!*\
  !*** ./src/app/shared/rent-bikes-detail.model.ts ***!
  \***************************************************/
/*! exports provided: Bike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bike", function() { return Bike; });
class Bike {
    constructor() {
        this.id = 0;
        this.name = '';
        this.type = '';
        this.rentCost = 0;
        this.isAvailable = true;
        this.isRent = false;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map