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
var items_service_1 = require('../services/items.service');
var ItemsComponent = (function () {
    function ItemsComponent(itemsService) {
        this.itemsService = itemsService;
        this.added = 0;
        this.cart_item = {
            item: null,
            size: "",
            amount: 0 };
        this.cart_item_size = "";
        //this.itemsService.getItems().subscribe(items => {
        //	this.items = items;
        //});
        this.items = itemsService.getItems();
        this.favourites = JSON.parse(localStorage.getItem('favourites'));
        this.cart = JSON.parse(localStorage.getItem('cart'));
    }
    //Methods for popup
    ItemsComponent.prototype.setCurrentItem = function (item) {
        this.current_item = item;
        this.current_image = item.gallery[0];
        this.item_selected = true;
    };
    ItemsComponent.prototype.resetCurrentItem = function () {
        this.item_selected = false;
        this.current_item = null;
        this.current_image = "";
        this.cart_item.item = null;
        this.cart_item.size = "";
        this.cart_item.amount = 0;
        this.added = 0;
    };
    ItemsComponent.prototype.setCurrentImage = function (image) {
        this.current_image = image;
    };
    //Methods for adding to lists
    ItemsComponent.prototype.addToFavourites = function (item) {
        this.cart_item.item = item;
        this.cart_item.amount = 1;
        this.cart_item.size = this.cart_item_size;
        if (this.favourites.indexOf(this.cart_item) < 0) {
            this.favourites.push(this.cart_item);
            localStorage.setItem('favourites', JSON.stringify(this.favourites));
            this.added = 1;
        }
        else {
            this.added = -1;
        }
    };
    ItemsComponent.prototype.addToCart = function (item) {
        this.cart_item.item = item;
        this.cart_item.amount = 1;
        this.cart_item.size = this.cart_item_size;
        if (this.cart.indexOf(this.cart_item) < 0) {
            this.cart.push(this.cart_item);
            localStorage.setItem('cart', JSON.stringify(this.cart));
            this.added = 1;
        }
        else {
            this.added = -1;
        }
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: 'items',
            templateUrl: './app/templates/items.html',
            providers: [items_service_1.ItemsService]
        }), 
        __metadata('design:paramtypes', [items_service_1.ItemsService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map