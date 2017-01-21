import { Component} from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CartItem } from './cart.component';

@Component({
  selector: 'items',
  templateUrl: '../templates/items.html',
  providers: [ItemsService]
})
export class ItemsComponent  { 

	//Events related
	added : number;

	//Items related
	items : Item[];
	current_item :  Item;
	current_image: string;
	item_selected: boolean;

	cart_item: CartItem;
	cart_item_size: string;

	private favourites: CartItem[];
	private cart: CartItem[];

	constructor(private itemsService: ItemsService){
		this.added = 0;
		this.cart_item = {
			item: null,
			size: "",
			amount: 0};
		this.cart_item_size = "";
		//this.itemsService.getItems().subscribe(items => {
		//	this.items = items;
		//});
		this.items = itemsService.getItems();
		this.favourites = JSON.parse(localStorage.getItem('favourites'));
		this.cart = JSON.parse(localStorage.getItem('cart'));

	}	

	//Methods for popup
	setCurrentItem(item: Item){
		this.current_item = item;
		this.current_image = item.gallery[0];
		this.item_selected = true;
	}
	resetCurrentItem(){
		this.item_selected = false;
		this.current_item = null;
		this.current_image = "";

		this.cart_item.item = null;
		this.cart_item.size = "";
		this.cart_item.amount = 0;

		this.added = 0;
	}
	setCurrentImage(image: string){
		this.current_image=image;
	}

	//Methods for adding to lists
	addToFavourites(item: Item){
		this.cart_item.item = item;
		this.cart_item.amount = 1;
		this.cart_item.size = this.cart_item_size;
		if(this.favourites.indexOf(this.cart_item)<0){		
			this.favourites.push(this.cart_item);
			localStorage.setItem('favourites', JSON.stringify(this.favourites));
			this.added = 1;
		}else{
			this.added = -1;
		}
	}
	addToCart(item: Item){
		this.cart_item.item = item;
		this.cart_item.amount = 1;
		this.cart_item.size = this.cart_item_size;
		if(this.cart.indexOf(this.cart_item)<0){		
			this.cart.push(this.cart_item);
			localStorage.setItem('cart', JSON.stringify(this.cart));
			this.added = 1;
		}else{
			this.added = -1;
		}
	}
}

//Item interface
export interface Item{
		id:string;
		title:string;
		description:string;
		gallery:string[];
		sizes:{
			xxs:boolean;
			xs:boolean;
			s:boolean;
			m:boolean;
			l:boolean;
			xl:boolean;
			xxl:boolean;
			xxxl:boolean;
		};
		cost:number;
}