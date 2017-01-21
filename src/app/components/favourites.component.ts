import { Component } from '@angular/core';
import { Item } from './items.component';
import { CartItem } from './cart.component';


@Component({
  selector: 'favourites',
  templateUrl: '../templates/favourites.html',
  providers: []
})
export class FavouritesComponent { 

	//Events related
	added : number;

	//Items related
	items : Item[];
	current_item :  Item;
	current_image: string;
	item_selected: boolean;

	private favourites: CartItem[];
	private cart: CartItem[];

	constructor(){
		this.added = 0;

		this.favourites = JSON.parse(localStorage.getItem('favourites'));
		this.cart = JSON.parse(localStorage.getItem('cart'));
	}	
	deleteItem(item: CartItem){
		this.favourites.splice(this.favourites.indexOf(item),1);
		localStorage.setItem('favourites', JSON.stringify(this.favourites));
	}
	
	setCurrentItem(item: CartItem){
		this.current_item = item.item;
		this.current_image = item.item.gallery[0];
		this.item_selected = true;
	}
	resetCurrentItem(){
		this.item_selected = false;
		this.current_item = null;
		this.current_image = "";

		this.added = 0;
	}
	setCurrentImage(image: string){
		this.current_image=image;
	}
		addToCart(item: CartItem){
		if(this.cart.indexOf(item)<0){		
			this.cart.push(item);
			localStorage.setItem('cart', JSON.stringify(this.cart));
			this.deleteItem(item);
			this.added = 1;
		}else{
			this.added = -1;
		}
	}
}