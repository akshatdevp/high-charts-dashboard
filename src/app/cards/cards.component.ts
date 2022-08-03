import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
	card_data : any = [
		{name : "card1" ,value  : 123},
		{name : "card2" ,value  : 142},
		{name: "card3" ,value  : 153},
		{name : "card4" ,value  : 231}
	]
	constructor() { }

	ngOnInit(): void {
	}

}
