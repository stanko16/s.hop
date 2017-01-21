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
var FavouritesComponent = (function () {
    function FavouritesComponent() {
        this.added = 0;
        this.favourites = JSON.parse(localStorage.getItem('favourites'));
        this.cart = JSON.parse(localStorage.getItem('cart'));
    }
    FavouritesComponent.prototype.deleteItem = function (item) {
        this.favourites.splice(this.favourites.indexOf(item), 1);
        localStorage.setItem('favourites', JSON.stringify(this.favourites));
    };
    FavouritesComponent.prototype.setCurrentItem = function (item) {
        this.current_item = item.item;
        this.current_image = item.item.gallery[0];
        this.item_selected = true;
    };
    FavouritesComponent.prototype.resetCurrentItem = function () {
        this.item_selected = false;
        this.current_item = null;
        this.current_image = "";
        this.added = 0;
    };
    FavouritesComponent.prototype.setCurrentImage = function (image) {
        this.current_image = image;
    };
    FavouritesComponent.prototype.addToCart = function (item) {
        if (this.cart.indexOf(item) < 0) {
            this.cart.push(item);
            localStorage.setItem('cart', JSON.stringify(this.cart));
            this.deleteItem(item);
            this.added = 1;
        }
        else {
            this.added = -1;
        }
    };
    FavouritesComponent = __decorate([
        core_1.Component({
            selector: 'favourites',
            templateUrl: './app/templates/favourites.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], FavouritesComponent);
    return FavouritesComponent;
}());
exports.FavouritesComponent = FavouritesComponent;
//# sourceMappingURL=favourites.component.js.map