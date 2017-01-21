"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
//Components
var app_component_1 = require('./app.component');
var items_component_1 = require('./components/items.component');
var favourites_component_1 = require('./components/favourites.component');
var cart_component_1 = require('./components/cart.component');
//Services
var items_service_1 = require('./services/items.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //Imports
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/items',
                        pathMatch: 'full'
                    },
                    {
                        path: 'items',
                        component: items_component_1.ItemsComponent
                    },
                    {
                        path: 'favourites',
                        component: favourites_component_1.FavouritesComponent
                    },
                    {
                        path: 'cart',
                        component: cart_component_1.CartComponent
                    }
                ])
            ],
            //Components declaration
            declarations: [
                app_component_1.AppComponent,
                favourites_component_1.FavouritesComponent,
                cart_component_1.CartComponent,
                items_component_1.ItemsComponent
            ],
            //Providers / Services
            providers: [
                items_service_1.ItemsService
            ],
            //Begining component
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map