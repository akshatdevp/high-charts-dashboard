import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

	Highcharts: typeof Highcharts = Highcharts;
	chartOptions: Highcharts.Options = {
		title: {
			text: "Number of users "
		},

		yAxis: {
			title: {
				text: 'Number of users(millions)'
			}
		},
		xAxis: {
			allowDecimals : false,

			title: {
				text: 'year'
			},
			accessibility: {
				rangeDescription: 'Range: 2010 to 2017'
			}
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false
				},
				pointStart: 2010
			}
		},
		series: [{
			name : 'Chrome',
			data: [129, 154, 188,207,240,264,265],
			type: 'bar'
		},
		{
			name : 'Firefox',
			data: [6.45, 7.7, 9.4, 10.35, 12.0, 13.2, 13.25],
			type: 'bar'
		},
		{
			name : 'Safari',
			data: [38.7, 44.2, 54.4, 66.1, 72.0, 77.2, 79.5],
			type: 'bar'
		},
		{
			name : 'Others',
			data: [25.36, 26.31, 28.68, 31.68, 40.89, 41.68, 41.84],
			type: 'bar'
		}
		]
	};
	constructor() { }

	ngOnInit(): void {
	}

}
