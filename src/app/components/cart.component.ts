import { Component } from '@angular/core';
import { Item } from './items.component';


@Component({
  selector: 'cart',
  templateUrl: '../templates/cart.html',
  providers: []
})
export class CartComponent { 
	private cart: CartItem[];
	total:number;
	orderSent: boolean;

	constructor(){
		this.cart = JSON.parse(localStorage.getItem('cart'));
		this.total = this.getTotal();
		this.orderSent=false;
	}	
	deleteItem(item: CartItem){
		this.cart.splice(this.cart.indexOf(item),1);
		localStorage.setItem('cart', JSON.stringify(this.cart));
		this.total = this.getTotal();
	}
	getTotal(){
		let tot = 0;
		for (let i = 0; i < this.cart.length; i++) {
			tot+=this.cart[i].item.cost*this.cart[i].amount;
		}
		return tot;
	}
	setCartItemAmount(item: CartItem, amount: number ){
		item.amount = amount;
		this.total = this.getTotal();
	}
	sendOrder(){
		this.orderSent=true;
	}
}

export interface CartItem{
	item: Item;
	size: string;
	amount: number;

}
