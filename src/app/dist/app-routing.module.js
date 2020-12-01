"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_attrbute_component_1 = require("./components/add-attrbute/add-attrbute.component");
var add_category_component_1 = require("./components/add-category/add-category.component");
var add_events_component_1 = require("./components/add-events/add-events.component");
var add_products_component_1 = require("./components/add-products/add-products.component");
var login_component_1 = require("./components/login/login.component");
var routes = [
    {
        path: "",
        component: login_component_1.LoginComponent
    },
    {
        path: "add-category",
        component: add_category_component_1.AddCategoryComponent
    },
    {
        path: "add-product",
        component: add_products_component_1.AddProductsComponent
    },
    {
        path: "add-event",
        component: add_events_component_1.AddEventsComponent
    },
    {
        path: "add-attrbute",
        component: add_attrbute_component_1.AddAttrbuteComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
