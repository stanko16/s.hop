import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Components
import { AppComponent }  from './app.component';
import { ItemsComponent }  from './components/items.component';
import { FavouritesComponent } from './components/favourites.component';
import { CartComponent } from './components/cart.component';

//Services
import { ItemsService } from './services/items.service';


@NgModule({
//Imports
  imports: [ 
	  BrowserModule, 
	  FormsModule, 
	  HttpModule, 
	  RouterModule.forRoot([
	  	{
		  path: '',
		  redirectTo: '/items',
		  pathMatch: 'full'
		},
	  	{
	   	 path: 'items',
	   	 component: ItemsComponent
	  	},
	  	{
  		 path: 'favourites',
 	 	 component: FavouritesComponent
		},
		{
  		 path: 'cart',
 	 	 component: CartComponent
		}
	  ]) 
  ],

//Components declaration
  declarations: [ 
  	AppComponent, 
  	FavouritesComponent,
  	CartComponent,
  	ItemsComponent 
  ],

//Providers / Services
  providers:[
  	ItemsService
  ],

//Begining component
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

