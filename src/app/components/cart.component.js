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
var CartComponent = (function () {
    function CartComponent() {
        this.cart = JSON.parse(localStorage.getItem('cart'));
        this.total = this.getTotal();
        this.orderSent = false;
    }
    CartComponent.prototype.deleteItem = function (item) {
        this.cart.splice(this.cart.indexOf(item), 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.total = this.getTotal();
    };
    CartComponent.prototype.getTotal = function () {
        var tot = 0;
        for (var i = 0; i < this.cart.length; i++) {
            tot += this.cart[i].item.cost * this.cart[i].amount;
        }
        return tot;
    };
    CartComponent.prototype.setCartItemAmount = function (item, amount) {
        item.amount = amount;
        this.total = this.getTotal();
    };
    CartComponent.prototype.sendOrder = function () {
        this.orderSent = true;
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            templateUrl: './app/templates/cart.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map