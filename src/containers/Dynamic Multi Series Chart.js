import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints1 = [];
var dataPoints2 = [];
var updateInterval = 2000;
//initial values
var yValue1 = 0;
var yValue2 = 0;
var xValue = 0;
var auxi = 0;
var auxi2 = 0;

class DynamicMultiSeriesChart extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);		
	}
	componentDidMount(){
		this.updateChart(1);
		setInterval(this.updateChart, updateInterval);
	}

	
	
	updateChart(count) {
		count = count || 1;		
		for (var i = 0; i < count; i++) {
			fetch('http://52.15.239.89:80/mongodb/obtenerCPU')
			.then(res => res.json())
            .then(res => {
				auxi = res['cpu']
			  })
			fetch('http://18.218.191.100:80/mongodb/obtenerCPU')
			.then(res => res.json())
            .then(res => {
				auxi2 = res['cpu']
			  })
			xValue += 2;
			yValue1 = Math.round(auxi);
			yValue2 = Math.round(auxi2);
			dataPoints1.push({
			  x: xValue,
			  y: yValue1
			});
			dataPoints2.push({
			  x: xValue,
			  y: yValue2
			});
		}
		this.chart.options.data[0].legendText = " CPU1 - " + yValue1 + " %";
		this.chart.options.data[1].legendText = " CPU2 - " + yValue2 + " %";
		this.chart.render();
	}
	render() {
		const options = {
			zoomEnabled: true,
			theme: "light2",
			title: {
				text: "CPU1 vs CPU2"
			},
			axisX: {
				title: "Recibiendo informacion cada 2 segundos"
			},
			axisY:{
				suffix: " %",
				includeZero: false
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor:"pointer",
				verticalAlign: "top",
				fontSize: 18,
				fontColor: "dimGrey",
				itemclick : function(e){
					if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
						e.dataSeries.visible = false;
					}
					else {
						e.dataSeries.visible = true;
					}
					e.chart.render();
				}
			},
			data: [
				{
					type: "stepLine",
					xValueFormatString: "##,#0 seconds",
					yValueFormatString: "##,#0 %",
					showInLegend: true,
					name: "CPU1",
					dataPoints: dataPoints1
				},
				{
					type: "stepLine",
					xValueFormatString: "###0 seconds",
					yValueFormatString: "##,#0 %",
					showInLegend: true,
					name: "CPU2" ,
					dataPoints: dataPoints2
				}
			]
		}
		
		return (
		<div>
			<h1>PORCENTAJES DE CPU LIBRES</h1>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DynamicMultiSeriesChart;