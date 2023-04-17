(self["webpackChunkjps_mobile"] = self["webpackChunkjps_mobile"] || []).push([["src_app_user_my-profile_my-profile_module_ts"],{

/***/ 7728:
/*!**************************************************************!*\
  !*** ./src/app/user/my-profile/my-profile-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfilePageRoutingModule": () => (/* binding */ MyProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-profile.page */ 4737);




const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_0__.MyProfilePage
    }
];
let MyProfilePageRoutingModule = class MyProfilePageRoutingModule {
};
MyProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyProfilePageRoutingModule);



/***/ }),

/***/ 6808:
/*!******************************************************!*\
  !*** ./src/app/user/my-profile/my-profile.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfilePageModule": () => (/* binding */ MyProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-profile-routing.module */ 7728);
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile.page */ 4737);







let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyProfilePageRoutingModule
        ],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_1__.MyProfilePage]
    })
], MyProfilePageModule);



/***/ }),

/***/ 4737:
/*!****************************************************!*\
  !*** ./src/app/user/my-profile/my-profile.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfilePage": () => (/* binding */ MyProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_my_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-profile.page.html */ 2151);
/* harmony import */ var _my_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile.page.scss */ 297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 2760);





let MyProfilePage = class MyProfilePage {
    constructor(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
    }
    ngOnInit() {
    }
    scanQR() {
        this.barcodeScanner
            .scan()
            .then(barcodeData => {
            alert("Barcode data " + JSON.stringify(barcodeData));
            console.log(barcodeData);
        })
            .catch(err => {
            console.log("Error", err);
        });
    }
};
MyProfilePage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner }
];
MyProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-my-profile',
        template: _raw_loader_my_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyProfilePage);



/***/ }),

/***/ 297:
/*!******************************************************!*\
  !*** ./src/app/user/my-profile/my-profile.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#my-profile {\n  margin-top: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6Im15LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215LXByb2ZpbGV7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 2151:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-profile/my-profile.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      My Profile\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div id=\"my-profile\">\r\n    <h5>My Profile</h5>\r\n  </div>\r\n  <ion-button color=\"primary\" (click)=\"scanQR()\">\r\n    Scan Code\r\n  </ion-button>\r\n\r\n  <!-- <app-explore-container name=\"Scan Code\"></app-explore-container> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_user_my-profile_my-profile_module_ts.js.map