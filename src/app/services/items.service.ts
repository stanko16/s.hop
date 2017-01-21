import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import '../data/items.js';

@Injectable()
export class ItemsService {
	constructor(private http: Http){
		console.log('ItemsService constructor called..')
	}

	getItems(){
		//return this.http.request('../data/items.json').map(res => res.json());
		console.log('getItems() called..');
		return array;
	}

}