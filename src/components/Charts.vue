<template>
	<div class="linechart">
		<apexchart v-if="type != null" width="500" :type="type" :options.sync="options" :series="series" ref="realtimeChart"></apexchart>
	</div>
</template>

<script>
import _ from 'lodash'
// @ is an alias to /src

export default {
	name: 'Chart',
	props: [
		'charttype',
		'data',
		'timespan'
	],
	components: {
	},
	data: function() {
		return {
			type: this.charttype,
			linedata: {
				lineseries: [], 
				lineoptions:{
					chart: {
						height: 350,
						type: 'line',
						dropShadow: {
							enabled: true,
							color: '#000',
							top: 18,
							left: 7,
							blur: 10,
							opacity: 0.2
						},
						toolbar: {
							show: false
						}
					},
					colors: ['#00FFFF', '#0000FF', '#00FF00'],
					dataLabels: {
						enabled: true,
					},
					stroke: {
						curve: 'smooth'
					},
					grid: {
						borderColor: '#e7e7e7',
						row: {
							colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
							opacity: 0.5
						},
					},
					markers: {
						size: 1
					},
					legend: {
						position: 'top',
						horizontalAlign: 'right',
						floating: true,
						offsetY: -25,
						offsetX: -5
					}
				}
			}
		}
	},
	computed: {
		options:function()
		{
			if(this.type == "line"){
				var op = _.merge(this.linedata.lineoptions, this.data.lineoptions)
				console.log(op)
				return op
			}			
			else if(this.type == "donut"){
				return this.data.donutoptions
			}
			else{
				return ""
			}
		},
		series:function()
		{
			if(this.type == "line"){
				return this.data.lineseries
			}			
			else if(this.type == "donut"){
				console.log(this.data)
				return this.data.donutseries
			}
			else{
				return ""
			}
		}
	},
	methods:{
		
	},
	mounted: function(){
		console.log(this.type, this.data)
	}
}
</script>

<style scoped>
</style>