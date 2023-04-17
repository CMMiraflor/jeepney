(self["webpackChunkjps_mobile"] = self["webpackChunkjps_mobile"] || []).push([["src_app_user_scan-code_scan-code_module_ts"],{

/***/ 4380:
/*!************************************************************!*\
  !*** ./src/app/user/scan-code/scan-code-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanCodePageRoutingModule": () => (/* binding */ ScanCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _scan_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-code.page */ 9643);




const routes = [
    {
        path: '',
        component: _scan_code_page__WEBPACK_IMPORTED_MODULE_0__.ScanCodePage
    }
];
let ScanCodePageRoutingModule = class ScanCodePageRoutingModule {
};
ScanCodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScanCodePageRoutingModule);



/***/ }),

/***/ 2063:
/*!****************************************************!*\
  !*** ./src/app/user/scan-code/scan-code.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanCodePageModule": () => (/* binding */ ScanCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 9156);
/* harmony import */ var _scan_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-code-routing.module */ 4380);
/* harmony import */ var _scan_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-code.page */ 9643);








let ScanCodePageModule = class ScanCodePageModule {
};
ScanCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scan_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanCodePageRoutingModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__.NgxQRCodeModule
        ],
        declarations: [_scan_code_page__WEBPACK_IMPORTED_MODULE_1__.ScanCodePage]
    })
], ScanCodePageModule);



/***/ }),

/***/ 9643:
/*!**************************************************!*\
  !*** ./src/app/user/scan-code/scan-code.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanCodePage": () => (/* binding */ ScanCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_scan_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scan-code.page.html */ 807);
/* harmony import */ var _scan_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-code.page.scss */ 3820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ScanCodePage = class ScanCodePage {
    constructor() {
        this.qrData = '';
        this.scannedCode = null;
        this.token = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    ngOnInit() {
        this.qrData = localStorage.getItem('qr-code');
    }
    decrypt_qr_data(data) {
        var decrypt = (salt, encoded) => {
            const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
            const appySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
            return encoded
                .match(/.{1,2}/g)
                .map((hex) => parseInt(hex, 16))
                .map(appySaltToChar)
                .map((charCode) => String.fromCharCode(charCode))
                .join("");
        };
        var dec = decrypt(this.token, data);
        dec = dec.split('/');
        console.log(dec[0]);
    }
};
ScanCodePage.ctorParameters = () => [];
ScanCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-scan-code',
        template: _raw_loader_scan_code_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scan_code_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScanCodePage);



/***/ }),

/***/ 3820:
/*!****************************************************!*\
  !*** ./src/app/user/scan-code/scan-code.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#scan-code {\n  margin-top: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4tY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic2Nhbi1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzY2FuLWNvZGV7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 807:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/scan-code/scan-code.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Scan Code\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div id=\"scan-code\">\r\n    <h5>Scan Code</h5>\r\n  </div>\r\n\r\n  <!-- <app-explore-container name=\"Scan Code\"></app-explore-container> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_user_scan-code_scan-code_module_ts.js.map