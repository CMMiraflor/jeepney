(self["webpackChunkjps_mobile"] = self["webpackChunkjps_mobile"] || []).push([["default-src_app_driver_generate-code_generate-code_module_ts"],{

/***/ 8506:
/*!**********************************************************************!*\
  !*** ./src/app/driver/generate-code/generate-code-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateCodePageRoutingModule": () => (/* binding */ GenerateCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _generate_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-code.page */ 5360);




const routes = [
    {
        path: '',
        component: _generate_code_page__WEBPACK_IMPORTED_MODULE_0__.GenerateCodePage
    }
];
let GenerateCodePageRoutingModule = class GenerateCodePageRoutingModule {
};
GenerateCodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GenerateCodePageRoutingModule);



/***/ }),

/***/ 820:
/*!**************************************************************!*\
  !*** ./src/app/driver/generate-code/generate-code.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateCodePageModule": () => (/* binding */ GenerateCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 9156);
/* harmony import */ var _generate_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-code-routing.module */ 8506);
/* harmony import */ var _generate_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-code.page */ 5360);








let GenerateCodePageModule = class GenerateCodePageModule {
};
GenerateCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _generate_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.GenerateCodePageRoutingModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__.NgxQRCodeModule
        ],
        declarations: [_generate_code_page__WEBPACK_IMPORTED_MODULE_1__.GenerateCodePage]
    })
], GenerateCodePageModule);



/***/ }),

/***/ 5360:
/*!************************************************************!*\
  !*** ./src/app/driver/generate-code/generate-code.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateCodePage": () => (/* binding */ GenerateCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_generate_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./generate-code.page.html */ 5840);
/* harmony import */ var _generate_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-code.page.scss */ 3944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var _services_qr_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/qr-code.service */ 3175);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/alert.service */ 2758);







let GenerateCodePage = class GenerateCodePage {
    constructor(alertService, qrCodeService) {
        this.alertService = alertService;
        this.qrCodeService = qrCodeService;
        this.subscription_generate_code = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.token = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        this.elementType = 'canvas';
    }
    ngOnInit() {
        // this.qrData = localStorage.getItem('qr-code')
        // localStorage.clear();
        var user_data = localStorage.getItem('loginSession');
        this.user_id = JSON.parse(user_data)['pk'];
        this.getLatestQrCode(this.user_id);
    }
    getLatestQrCode(id) {
        this.subscription_generate_code.add(this.qrCodeService.getLatestQrCodeData(id)
            .subscribe(result => {
            this.qrData = result.result[0].qr_data;
            this.date = result.result[0].date_created;
            // this.date = new Date(result.result[0].date_created)
            // const monthNames =  ["January", "February", "March", "April", "May", "June",
            //                       "July", "August", "September", "October", "November", "December"
            //                     ];
            // const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            // this.date = dayName[this.date.getDay()] + ', ' + monthNames[this.date.getMonth()] + ' ' + this.date.getDate() + ', ' + this.date.getFullYear()
        }, error => {
            console.log('err');
        }));
    }
    generateQrCode() {
        var user_id = this.user_id;
        var today = new Date();
        var $data = user_id + '/' + today;
        var encrypt = (salt, text) => {
            const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
            const byteHex = (n) => ('0' + Number(n).toString(16)).substr(-2);
            const appySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
            return text.split('')
                .map(textToChars)
                .map(appySaltToChar)
                .map(byteHex)
                .join('');
        };
        var generate_qr = encrypt(this.token, $data);
        //save tempo in local storage hehe
        // localStorage.removeItem('qr-code');
        // localStorage.setItem('qr-code', data);
        this.subscription_generate_code.add(this.qrCodeService.generate_qrcode(this.user_id, generate_qr)
            .subscribe(result => {
            this.alertService.alertWithTimer('success', '', 'New QR CODE Successfully generated');
            this.getLatestQrCode(this.user_id);
        }, error => {
            this.alertService.simpleAlert('error', ': (', 'Something went wrong, please try again');
        }));
        // location.reload();
    }
};
GenerateCodePage.ctorParameters = () => [
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _services_qr_code_service__WEBPACK_IMPORTED_MODULE_2__.QrCodeService }
];
GenerateCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-generate-code',
        template: _raw_loader_generate_code_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_generate_code_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GenerateCodePage);



/***/ }),

/***/ 3175:
/*!*****************************************!*\
  !*** ./src/services/qr-code.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodeService": () => (/* binding */ QrCodeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server */ 938);






let QrCodeService = class QrCodeService {
    constructor(http) {
        this.http = http;
        this.url = _server__WEBPACK_IMPORTED_MODULE_0__.GlobalVariable.BASE_API_URL;
    }
    generate_qrcode(user_id, qr_data) {
        return this.http.post(this.url.concat('api/driver/generate-qrcode'), {
            user_id: user_id,
            qr_data: qr_data,
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    getLatestQrCodeData(id) {
        return this.http.get(this.url.concat('api/driver/get-latest-qr-code/' + id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorMessage);
    }
};
QrCodeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
QrCodeService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], QrCodeService);



/***/ }),

/***/ 3944:
/*!**************************************************************!*\
  !*** ./src/app/driver/generate-code/generate-code.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#generate-code {\n  margin-top: 2rem;\n  text-align: center;\n}\n\nion-content #header-container {\n  padding: 20px;\n  padding-top: 10px !important;\n  --border-bottom: none !important;\n  background: #0066ff !important;\n  min-height: 25%;\n}\n\nion-content #header-container ion-toolbar {\n  margin-top: 2rem;\n  text-align: center;\n  --background: transparent;\n  background: url('logo_4.png');\n  --border-bottom: none !important;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  --background-position: 50% 50%;\n}\n\nion-content #header-container ion-toolbar ion-card {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n}\n\nion-content #header-container ion-toolbar ion-card ion-card-header {\n  padding: 5px;\n}\n\nion-content #header-container ion-toolbar ion-card ion-card-header ion-card-title {\n  font-size: 2em;\n  color: white;\n  font-weight: bolder;\n}\n\nion-content #header-container ion-toolbar ion-card ion-card-header ion-card-subtitle {\n  color: whitesmoke;\n  font-size: 1em;\n}\n\nion-content #content-container {\n  background: white !important;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  margin-top: -5% !important;\n  padding: 0p 10px 0px 0px !important;\n}\n\nion-content #content-container #qr-button-container {\n  margin-top: -8% !important;\n}\n\nion-content #content-container #qr-button-container ion-button {\n  min-height: 3.5em;\n  width: 80%;\n}\n\nion-content #content-container .created-label {\n  font-size: 1em;\n  color: #707070;\n}\n\nion-content #content-container .created-label span {\n  font-weight: bold;\n}\n\nion-content #content-container #qr-data {\n  margin-top: 3rem;\n}\n\nion-content #content-container #qr-item-data {\n  margin: 0 auto;\n  margin-top: 0.5rem;\n  text-align: center !important;\n  min-width: 150px;\n  max-width: 220px;\n  width: 220px;\n  min-height: 150px;\n  max-height: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLWNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUtJO0VBQ0ksYUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFGUjs7QUFHUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUFEWjs7QUFFUTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQVo7O0FBRVk7RUFDUSxZQUFBO0FBQXBCOztBQUVvQjtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBeEI7O0FBRW9CO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQXhCOztBQU9JO0VBRUksNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBQU5SOztBQVFRO0VBQ0ksMEJBQUE7QUFOWjs7QUFPWTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQUxoQjs7QUFTUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBUFo7O0FBVVE7RUFDSSxpQkFBQTtBQVJaOztBQVdRO0VBQ0ksZ0JBQUE7QUFUWjs7QUFZUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQVhaIiwiZmlsZSI6ImdlbmVyYXRlLWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dlbmVyYXRlLWNvZGV7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuXHJcblxyXG4gICAgI2hlYWRlci1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzAwNjZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1JTtcclxuICAgICAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9nb180LnBuZycpO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTsgXHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNjb250ZW50LWNvbnRhaW5lcntcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDp3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMHAgMTBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgI3FyLWJ1dHRvbi1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC04JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMy41ZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jcmVhdGVkLWxhYmVse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3JlYXRlZC1sYWJlbCBzcGFue1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNxci1kYXRhe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3FyLWl0ZW0tZGF0YXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuI2dlbmVyYXRlLWJ0bntcclxuICAgIC8vICBib3JkZXI6IDFweCBzb2xpZCAjNmZhNmY3ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbn0iXX0= */");

/***/ }),

/***/ 5840:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/generate-code/generate-code.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Generate Code\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid id=\"header-container\">\r\n        \r\n    <ion-toolbar id=\"img-logo\">\r\n      <!-- <ion-img src=\"..\\assets\\img\\logo_4.png\"></ion-img> -->\r\n    </ion-toolbar>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid id=\"content-container\">\r\n    <ion-grid id=\"qr-button-container\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button id=\"generate-btn\" color=\"light\" (click)=\"generateQrCode()\">\r\n                  <ion-icon name=\"qr-code-outline\"></ion-icon>\r\n                  &nbsp; Generate <span *ngIf=\"qrData != null\">&nbsp;New&nbsp;</span>QR-CODE\r\n              </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid> \r\n    <ion-grid id=\"qr-data\" class=\"ion-text-center\">\r\n      <label class=created-label *ngIf=\"qrData != null\"><span>Created at : </span> {{ date | date:'medium': 'utc/GMT+8'}} </label>\r\n      <label class=created-label *ngIf=\"qrData == null\"><span>NO QR-CODE GENERATED YET </span></label>\r\n      <div id=\"qr-item-data\" class=\"ion-text-center\">\r\n        <ngx-qrcode\r\n          [elementType]=\"elementType\" \r\n          [value]=\"qrData\">\r\n        </ngx-qrcode>\r\n      </div>\r\n    </ion-grid>\r\n    <!-- <ion-grid class=\"recent-transac\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n              <label class=transac-label>Latest Transaction</label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"12\">\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-grid>\r\n                <ion-row class=\"transac-container\">\r\n                  <ion-col size=\"8\">\r\n                    <ion-label><b>You</b> paid <b>Driver 1</b></ion-label>\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"4\">\r\n                    <ion-label class=\"transac-paid\">&#8369;10.00</ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <ion-label class=\"route-label\">Route: Batangas-Balagtas</ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" class=\"ion-align-items-right\">\r\n                    <ion-label class=\"plate-label\">Plate #: DVBS-69</ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"12\">\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-grid>\r\n                <ion-row class=\"transac-container\">\r\n                  <ion-col size=\"8\">\r\n                    <ion-label><b>You</b> paid <b>Driver 2</b></ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <ion-label class=\"transac-paid\">&#8369;35.00</ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <ion-label class=\"route-label\">Route: Rosario-Batangas</ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" class=\"ion-align-items-right\">\r\n                    <ion-label class=\"plate-label\">Plate #: HPLS-69</ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"12\">\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-grid>\r\n                <ion-row class=\"transac-container\">\r\n                  <ion-col size=\"8\">\r\n                    <ion-label><b>You</b> cash in </ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <ion-label class=\"transac-received\">&#8369;2,000.00</ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <ion-label class=\"route-label\">Route: Rosario-Batangas</ion-label>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" class=\"ion-align-items-right\">\r\n                    <ion-label class=\"plate-label\">Plate #: HPLS-69</ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid> -->\r\n    \r\n  </ion-grid>\r\n\r\n    \r\n  <!-- <div id=\"generate-code\">\r\n    <h5>Generate Code</h5>\r\n\r\n    <ngx-qrcode\r\n    [elementType]=\"elementType\" \r\n      [value]=\"qrData\">\r\n    </ngx-qrcode>\r\n\r\n    <ion-button (click)=\"generateQrCode()\" color=\"secondary\">\r\n      <ion-icon name=\"qr-code\"></ion-icon>\r\n      &nbsp; Generate <span *ngIf=\"qrData != null\">&nbsp;New&nbsp;</span>QR-CODE\r\n    </ion-button>\r\n  </div> -->\r\n\r\n  <!-- <app-explore-container name=\"Scan Code\"></app-explore-container> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_driver_generate-code_generate-code_module_ts.js.map