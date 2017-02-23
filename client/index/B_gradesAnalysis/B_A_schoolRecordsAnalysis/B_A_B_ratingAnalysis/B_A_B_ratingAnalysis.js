Template.B_A_B_ratingAnalysis.helpers({
	
});

Template.B_A_B_ratingAnalysis.events({
	
});

Template.B_A_B_ratingAnalysis.onRendered(function () {
	var chart1 = Highcharts.chart('chart1', {
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Fruit Consumption'
		},
		xAxis: {
			categories: ['Apples', 'Bananas', 'Oranges']
		},
		yAxis: {
			title: {
				text: 'Fruit eaten'
			}
		},
		series: [{
			name: 'Jane',
			data: [1, 0, 4]
		}, {
			name: 'John',
			data: [5, 7, 3]
		}]
	});
});