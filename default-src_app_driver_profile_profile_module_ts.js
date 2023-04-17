(self["webpackChunkjps_mobile"] = self["webpackChunkjps_mobile"] || []).push([["default-src_app_driver_profile_profile_module_ts"],{

/***/ 205:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwError": () => (/* binding */ throwError)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 9165);

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscriber.error(error));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => scheduler.schedule(dispatch, 0, { error, subscriber }));
    }
}
function dispatch({ error, subscriber }) {
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ 7312:
/*!**********************************************************!*\
  !*** ./src/app/driver/profile/profile-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 6751);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 5959:
/*!**************************************************!*\
  !*** ./src/app/driver/profile/profile.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 7312);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 6751);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 6751:
/*!************************************************!*\
  !*** ./src/app/driver/profile/profile.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 1141);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 3505);
/* harmony import */ var _assets_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/bootstrap/css/bootstrap.min.css */ 6019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 826);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ 2996);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ 2758);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server */ 938);













let reg = /.*\.(gif|jpe?g|bmp|png)$/igm;
let ProfilePage = class ProfilePage {
    constructor(router, http, formBuilder, userService, alertService) {
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.alertService = alertService;
        this.url = _server__WEBPACK_IMPORTED_MODULE_5__.GlobalVariable.BASE_API_URL;
        this.subscription_user = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.isChanged = false;
        this.isDriver = false;
        this.formProfile = this.formBuilder.group({
            image_logo: [''],
            email: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            contact_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("^[0-9]*$")]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            route_from: [''],
            route_to: ['']
        });
        this.geUserDetails();
    }
    get f() { return this.formProfile.controls; }
    get name() { return this.formProfile.get('name'); }
    get contact_number() { return this.formProfile.get('contact_number'); }
    ;
    get address() { return this.formProfile.get('address'); }
    ;
    get image_logo() { return this.formProfile.get('image_logo'); }
    ;
    ngOnInit() {
        if (this.userService.user_account_type == 2) {
            this.isDriver = true;
        }
        this.geUserDetails();
    }
    geUserDetails() {
        this.subscription_user.add(this.userService.getUserDetails().subscribe(result => {
            this.formProfile.controls['name'].setValue(result.result[0]['name']);
            this.formProfile.controls['email'].setValue(result.result[0]['email']);
            this.formProfile.controls['contact_number'].setValue(result.result[0]['contact_number']);
            var route_from;
            var route_to;
            if (result.result[0]['driver_route'] == null || result.result[0]['driver_route'] instanceof Object) {
                route_from = 'not set';
                route_to = 'not set';
                if (result.result[0]['driver_route'] instanceof Object) {
                    if (Object.keys(result.result[0]['driver_route']).length == 0) {
                        route_from = 'not set';
                        route_to = 'not set';
                    }
                    else {
                        route_from = result.result[0]['driver_route']['route_1'];
                        route_to = result.result[0]['driver_route']['route_2'];
                    }
                }
            }
            this.formProfile.controls['route_from'].setValue(route_from);
            this.formProfile.controls['route_to'].setValue(route_to);
            this.formProfile.controls['address'].setValue(result.result[0]['address']);
            this.profileSrc = result.result[0]['logo'];
        }, error => {
        }));
    }
    changePicture() {
        $('#imgupload').click();
    }
    changeImage(event) {
        if (event.target.files[0].name.match(reg) == null) {
            alert('not valid');
        }
        else {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.crop_img')
                    .attr('src', e.target.result);
                // .width(200)
                // .height(200);
            };
            reader.readAsDataURL(event.target.files[0]);
            this.isChanged = true;
        }
    }
    updateMyProfile() {
        if ($('#imgupload')[0].files.length < 1) {
            this.logo = this.profileSrc;
            this.updateProfileNext(this.logo);
        }
        else {
            var formData = new FormData();
            formData.append('file', $('#imgupload')[0].files[0]);
            this.http.post(this.url + 'api/upload', formData).subscribe(url => {
                this.updateProfileNext(url.link);
            }, err => {
                console.log(err);
            });
        }
    }
    updateProfileNext(logoUrl) {
        var formValue = this.formProfile.value;
        var name = formValue.name;
        var email = formValue.email;
        var contact_number = formValue.contact_number;
        var address = formValue.address;
        var route_from = formValue.route_from;
        var route_to = formValue.route_to;
        var driver_route;
        if (route_from != 'not set' && route_to != 'not set') {
            driver_route = JSON.stringify({ 'route_1': route_from, 'route_2': route_to });
        }
        else {
            driver_route = {};
        }
        this.subscription_user.add(this.userService.updateProfile(this.userService.authId, logoUrl, name, email, contact_number, address, driver_route)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.first)())
            .subscribe(data => {
            if (data['status'] == 200) {
                this.alertService.alertWithTimer('success', data['message'], '');
            }
            else {
                this.alertService.simpleAlert('info', ': (', 'Something went wrong, please try again');
            }
        }, error => {
            this.alertService.simpleAlert('error', 'Error', 'Update profile failed');
        }));
    }
    onTextChange() {
        this.isChanged = true;
    }
    logout() {
        $('#logout-modal').modal('show');
    }
    contineLogout() {
        localStorage.removeItem('loginSession');
        this.router.navigate(['login']);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default, _assets_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__.default]
    })
], ProfilePage);



/***/ }),

/***/ 2996:
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server */ 938);






let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.url = _server__WEBPACK_IMPORTED_MODULE_0__.GlobalVariable.BASE_API_URL;
    }
    getUserDetails() {
        var user = localStorage.getItem('loginSession');
        var user_id = JSON.parse(user)['pk'];
        this.authId = user_id;
        console.log(user_id);
        this.user_account_type = JSON.parse(user)['account_type'];
        return this.http.get(this.url.concat('api/user/get-user-details/' + user_id), {
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    getUserById(id) {
        return this.http.get(this.url.concat('api/user/get-user-details/' + id), {
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    getTransaction() {
        var user = localStorage.getItem('loginSession');
        var user_id = JSON.parse(user)['pk'];
        this.authId = user_id;
        return this.http.get(this.url.concat('api/user/get-transactions/' + user_id), {
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    updateProfile(pk, logo, name, email, contact_number, address, driver_route) {
        return this.http.put(this.url.concat('api/user/update-profile'), {
            pk_id: pk,
            logo: logo,
            name: name,
            email: email,
            contact_number: contact_number,
            address: address,
            driver_route: driver_route
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
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
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 3505:
/*!**************************************************!*\
  !*** ./src/app/driver/profile/profile.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".driver-profile {\n  text-align: center;\n}\n\n.logout_container {\n  margin-right: 1em;\n}\n\nion-content {\n  border-radius: 0 !important;\n  --background: var(--transparent) !important;\n}\n\nion-content::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 60px);\n  background: var(--white);\n  border-radius: 33px 0 0 0;\n}\n\n.item_inner {\n  margin-top: 1.5rem !important;\n  width: 100% !important;\n}\n\n.item_inner div ion-label {\n  min-width: 90% !important;\n  font-weight: bold !important;\n}\n\n.item_inner ion-input {\n  border-bottom: 0.5px solid #b8b8b8;\n}\n\n.route-input-div {\n  min-width: 90px !important;\n  max-width: 350px !important;\n}\n\n.route {\n  width: auto !important;\n  border-bottom: none !important;\n}\n\n#route-div {\n  display: flex;\n  border-bottom: 0.5px solid #b8b8b8;\n}\n\n#route-div #arr {\n  padding: 0.54rem 1rem !important;\n  font-weight: bold;\n  align-content: center;\n  align-self: center;\n}\n\n.profile_container {\n  padding: 22px 20px;\n  margin-bottom: 20px;\n}\n\n.profile_container .img_box {\n  position: relative;\n  min-width: 125px;\n  min-height: 125px;\n  width: 125px;\n  height: 125px;\n  background: var(--bg-color);\n  border-radius: 50%;\n  margin: 0 auto;\n  border: 1px solid #b8b8b8 !important;\n}\n\n.profile_container .img_box img {\n  width: 100% !important;\n  height: 100% !important;\n  border-radius: 50%;\n}\n\n.profile_container .img_box #change_profile {\n  background: none !important;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.profile_container .img_box #change_profile ion-icon {\n  font-size: 20px;\n}\n\n#logout-modal {\n  background: #7070709f !important;\n  z-index: 99 !important;\n  padding: 1rem !important;\n  border: none !important;\n}\n\n#logout-modal .modal-dialog {\n  transform: translate(0, -50%);\n  top: 50%;\n  margin: 0 auto;\n  font-size: 18px !important;\n}\n\n.modal-body div {\n  padding: 3px 0px !important;\n}\n\n.modal-footer, .modal-header {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNDLGlCQUFBO0FBQ0Q7O0FBRUE7RUFDQywyQkFBQTtFQUNBLDJDQUFBO0FBQ0Q7O0FBQ0M7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFHQTtFQUNDLDZCQUFBO0VBQ0csc0JBQUE7QUFBSjs7QUFHQTtFQUNDLHlCQUFBO0VBQ0EsNEJBQUE7QUFBRDs7QUFHQTtFQUNDLGtDQUFBO0FBQUQ7O0FBR0E7RUFDQywwQkFBQTtFQUNBLDJCQUFBO0FBQUQ7O0FBRUE7RUFDQyxzQkFBQTtFQUNBLDhCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxhQUFBO0VBQ0Esa0NBQUE7QUFDRDs7QUFDQTtFQUNDLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRUQ7O0FBRUE7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Q7O0FBQ0M7RUFDQyxrQkFBQTtFQUNNLGdCQUFBO0VBQ04saUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ00sb0NBQUE7QUFDUjs7QUFDRTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVFO0VBQ0MsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBQUg7O0FBRUc7RUFDQSxlQUFBO0FBQUg7O0FBS0E7RUFDSSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUZKOztBQUtBO0VBR0ksNkJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBRko7O0FBSUE7RUFDSSwyQkFBQTtBQURKOztBQUdBO0VBQ0ksdUJBQUE7QUFBSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcml2ZXItcHJvZmlsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ291dF9jb250YWluZXJ7XHJcblx0bWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuXHRib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcblx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHJcblx0Jjo6YmVmb3JlIHtcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMzNweCAwIDAgMDtcclxuXHR9XHJcbn1cclxuXHJcbi5pdGVtX2lubmVye1xyXG5cdG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHQvLyBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxufVxyXG4uaXRlbV9pbm5lciBkaXYgaW9uLWxhYmVse1xyXG5cdG1pbi13aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW1faW5uZXIgaW9uLWlucHV0e1xyXG5cdGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiOGI4Yjg7XHJcblx0XHJcbn1cclxuLnJvdXRlLWlucHV0LWRpdntcclxuXHRtaW4td2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuXHRtYXgtd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvdXRle1xyXG5cdHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcm91dGUtZGl2e1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2I4YjhiODtcclxufVxyXG4jcm91dGUtZGl2ICNhcnJ7XHJcblx0cGFkZGluZzogMC41NHJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5wcm9maWxlX2NvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMjJweCAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7IFxyXG5cclxuXHQuaW1nX2JveCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjVweDtcclxuXHRcdG1pbi1oZWlnaHQ6IDEyNXB4O1xyXG5cdFx0d2lkdGg6IDEyNXB4O1xyXG5cdFx0aGVpZ2h0OiAxMjVweDtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOGI4YjggIWltcG9ydGFudDtcclxuXHR9XHJcblx0IC5pbWdfYm94IGltZ3tcclxuXHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHQgfVxyXG5cclxuXHQgLmltZ19ib3ggI2NoYW5nZV9wcm9maWxle1xyXG5cdFx0IGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdCBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgcmlnaHQ6IDA7XHJcblx0XHQgdG9wOiAwO1xyXG5cclxuXHRcdCBpb24taWNvbntcclxuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0IH1cclxuXHQgfVxyXG59XHJcblxyXG4jbG9nb3V0LW1vZGFse1xyXG4gICAgYmFja2dyb3VuZDogIzcwNzA3MDlmICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5OSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNsb2dvdXQtbW9kYWwgLm1vZGFsLWRpYWxvZ3tcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC01MCUpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1ib2R5IGRpdntcclxuICAgIHBhZGRpbmc6IDNweCAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubW9kYWwtZm9vdGVyLCAubW9kYWwtaGVhZGVye1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 1141:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver/profile/profile.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      My Profile\r\n    </ion-title>\r\n    <div slot=\"end\" (click)=\"logout()\" class=\"logout_container\">\r\n      <ion-icon name=\"log-out\"></ion-icon> <b> Logout</b></div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content class=\"driver-profile\"> -->\r\n<ion-content>\r\n  <form class=\"form\" [formGroup]=\"formProfile\" (ngSubmit)=\"form.form.valid ? updateMyProfile() : '' \" #form=\"ngForm\" enctype=\"multipart/form-data\">\r\n  <div class=\"profile_container d-flex\"> \r\n    <div class=\"img_box center_img\">\r\n      <img src=\"{{ profileSrc ? url+profileSrc : 'assets/img/default-user.png' }}\" class=\"crop_img\">\r\n      <input type=\"file\" id=\"imgupload\" name=\"imgupload\" formControlName=\"image_logo\" style=\"display:none\" (change)=\"changeImage($event)\" accept=\"image/*\" /> \r\n      <button type=\"button\" id=\"change_profile\" (click)=\"changePicture()\">\r\n        \r\n        <ion-icon color=\"primary\" name=\"camera\"></ion-icon>\r\n      </button>\r\n    </div> \r\n  </div>\r\n  \r\n    <ion-list lines=\"none\" >\r\n      <ion-item lines=\"none\">\r\n        <div class=\"item_inner\">\r\n          <div style=\"display: flex;\"><ion-icon name=\"person\"></ion-icon><ion-label position=\"fixed\">&nbsp;Name</ion-label></div>\r\n          <ion-input type=\"text\" (keyup)=\"onTextChange()\" name=\"name\" formControlName=\"name\"></ion-input>\r\n        </div>\r\n      </ion-item>\r\n      <div *ngIf=\"form.submitted && name.errors\" style=\"position: relative; text-align: justify; margin-bottom: 5px; margin-left: 20px;\">\r\n        <ion-text *ngIf=\"form.submitted && name.errors.required\" class=\"warning\" color=\"danger\">\r\n          This field is required.\r\n        </ion-text>\r\n      </div>\r\n\r\n      <ion-item *ngIf=\"isDriver\" lines=\"none\">\r\n        <div class=\"item_inner\">\r\n          <div style=\"display: flex;\">\r\n            <ion-icon name=\"car\">\r\n            </ion-icon><ion-label position=\"fixed\">\r\n              &nbsp;Route</ion-label>\r\n            </div>\r\n          <div id=\"route-div\">\r\n            <div class=\"route-input-div\">\r\n              <ion-input type=\"text\" class=\"route\" (keyup)=\"onTextChange()\" name=\"route_from\" formControlName=\"route_from\"></ion-input>\r\n            </div>\r\n            <div id=\"arr\">&#8644;</div>\r\n            <div class=\"route-input-div\">\r\n              <ion-input type=\"text\"  class=\"route\" (keyup)=\"onTextChange()\"  name=\"route_to\" formControlName=\"route_to\"></ion-input>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n      \r\n      <ion-item lines=\"none\">\r\n        <div class=\"item_inner\">\r\n          <div style=\"display: flex;\">\r\n            <ion-icon name=\"mail\"></ion-icon>\r\n            <ion-label position=\"fixed\">\r\n              &nbsp;Email\r\n            </ion-label>\r\n          </div>\r\n          <ion-input type=\"email\" readonly name=\"email\" formControlName=\"email\" ></ion-input>\r\n        </div>\r\n      </ion-item> \r\n\r\n      <ion-item lines=\"none\">\r\n        <div class=\"item_inner\">\r\n          <div style=\"display: flex;\">\r\n            <ion-icon name=\"call\"></ion-icon>\r\n            <ion-label position=\"fixed\">\r\n              &nbsp;Phone number\r\n            </ion-label>\r\n          </div>\r\n          <ion-input type=\"text\" (keyup)=\"onTextChange()\" name=\"contact_number\" formControlName=\"contact_number\" maxLength=\"11\"></ion-input>\r\n        </div>\r\n      </ion-item>\r\n      <div *ngIf=\"form.submitted && contact_number.errors\" style=\"position: relative; text-align: justify; margin-bottom: 5px; margin-left: 20px;\">\r\n        <ion-text *ngIf=\"contact_number.errors.required\" class=\"warning\" color=\"danger\">\r\n          This field is required.\r\n        </ion-text>\r\n        <ion-text *ngIf=\"contact_number.errors.minlength\" class=\"warning\" color=\"danger\">\r\n          Contact number must be 11 digits.\r\n        </ion-text>\r\n        <br>\r\n        <ion-text *ngIf=\"contact_number.errors.pattern\" class=\"warning\" color=\"danger\">\r\n          Contact number must contain numeric value only.\r\n        </ion-text>\r\n      </div>\r\n\r\n      <ion-item lines=\"none\">\r\n        <div class=\"item_inner\">\r\n          <div style=\"display: flex;\">\r\n            <ion-icon name=\"home\"></ion-icon>\r\n            <ion-label position=\"fixed\">\r\n              &nbsp;Address\r\n            </ion-label>\r\n          </div>\r\n          <ion-input type=\"text\" (keyup)=\"onTextChange()\" name=\"address\" formControlName=\"address\"></ion-input>\r\n        </div>\r\n      </ion-item>\r\n      <div *ngIf=\"form.submitted && address.errors\" style=\"position: relative; text-align: justify; margin-bottom: 5px; margin-left: 20px;\">\r\n        <ion-text *ngIf=\"form.submitted && address.errors.required\" class=\"warning\" color=\"danger\">\r\n          This field is required.\r\n        </ion-text>\r\n      </div>\r\n\r\n      <!-- <span> -->\r\n      <!-- <ion-icon class=\"mt-2\" style=\"font-size: 20px; margin-top: 30px !important; margin-left: 15px;\" name=\"log-out\">\r\n      </ion-icon>\r\n      Logout -->\r\n      <!-- <div (click)=\"logout()\" style=\"display: flex; font-size: 20px; margin-top: 30px !important; margin-left: 15px; width: 150px;\">\r\n        <ion-icon color=\"danger\" name=\"log-out\"></ion-icon>\r\n        <ion-label color=\"danger\" position=\"fixed\">\r\n          &nbsp;Logout\r\n        </ion-label>\r\n      </div> -->\r\n    <!-- </span> -->\r\n      \r\n      <div><br><br><br><br></div>\r\n\r\n        <ion-fab *ngIf=\"isChanged\" vertical=\"bottom\" horizontal=\"end\" >\r\n          <button type=\"submit\" style=\"height: 60px; width: 60px; border-radius: 50%; background-color: #3880ff; color: white; font-size: 25px;\">\r\n            <ion-icon name=\"save\"></ion-icon>\r\n          </button>\r\n          <!-- <ion-fab-button type=\"submit\">\r\n              <ion-icon name=\"save\"></ion-icon>\r\n          </ion-fab-button> -->\r\n        </ion-fab>\r\n       \r\n    </ion-list>\r\n  </form>\r\n</ion-content>\r\n<div class=\"modal fade border\"  tabindex=\"-1\" aria-hidden=\"true\" id=\"logout-modal\">\r\n  <div class=\"modal-dialog\">\r\n   \r\n  \r\n  <!-- Modal content-->\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <b>Logout</b> \r\n    </div>\r\n     \r\n          <div class=\"modal-body\">\r\n              <div class=\"w-100 text-center\">\r\n                Are you sure you want to log out ?\r\n              </div>\r\n          </div>\r\n          <div class=\"modal-footer text-right\">\r\n            <span role=\"button\" data-dismiss=\"modal\">CANCEL</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <span role=\"button\" (click)=\"contineLogout()\">OK</span>\r\n        </div>\r\n  </div>\r\n  \r\n  </div>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_driver_profile_profile_module_ts.js.map