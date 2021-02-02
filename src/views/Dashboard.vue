<template>
	<div class="dashboard">
		<div class="row">
			<div class="col-6">
				<div class="dashboard-block">
					<select v-model="timespan">
						<option value="today">Vandaag</option>
						<option value="week">Deze week</option>
						<option value="month">Deze maand</option>
						<option value="year">Dit jaar</option>
					</select>
					<Chart charttype="line" :data.sync="linedata" :timespan.sync="timespan" ref="linechart"/>
				</div>
			</div>
			<div class="col-4">
				<div class="dashboard-block">
					<Chart charttype="donut" :data.sync="donutdata" ref="donutchart"/>
				</div>
			</div>
			<div class="col-5">
				<div class="dashboard-block">
					<h2>Tabellen</h2>
					<Table :data.sync="table_data" :header.sync="table_header" ref="table" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Chart from '@/components/Charts.vue'
import Table from '@/components/Table.vue'
import {HTTP} from '@/assets/scripts/http-common.js';
import moment from 'moment'

export default {
	name: 'Dashboard',
	components: {
		Chart,
		Table
	},
	data: function() {
		return {
			scans: null,
			ranged_scans: null,
			current_data: [],
			table_data: [],
			linedata: {
				lineoptions: {
					chart: {
						id: ''
					},
					xaxis: {
						categories: [],
						title: {
							text: ''
						}
					},
					yaxis: {
						title: {
							text: ''
						},
						min: 0,
						max: 1000
					},
					title: {
						text: '',
						align: ''
					}
				},
				lineseries: [{
					name: '',
					data: []
				}]
			},
			array: [],
			donutdata:{
				donutoptions: {},
				donutseries: []
			},
			tabledata: null,
			timespan: 'today',
			categories: {
				today: Array.from(Array(24).keys()),
				week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				month: Array.from(Array(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()).keys()),
				year: ['Jan', 'Feb', 'Mar','Apr', 'Mei', 'Jun','Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
			},
			table_header:['Datum', 'Car','Truck','Cyclist','Pedestrian','Bus']
		}
	},
	computed: {
		getCategories: function(){
			return false
		}
	},
	watch:{
		timespan: function(){
			var start
			var end
			switch(this.timespan){
				case "today":
					start = moment().format('YYYY-MM-DD')
					end = moment(moment()).add(1, 'days').format('YYYY-MM-DD')
					break;
				case "week":					
					start = moment().startOf('isoWeek').format('YYYY-MM-DD')
					end = moment().endOf('isoWeek').format('YYYY-MM-DD')
					break;
				case "month":
					start = moment().startOf('month').format('YYYY-MM-DD')
					end = moment().endOf('month').format('YYYY-MM-DD')
					break;
				case "year":
					start = moment().startOf('year').format('YYYY-MM-DD')
					end = moment().endOf('year').format('YYYY-MM-DD')
					break;
			}
			this.getScansByRangedDate(start, end)
			this.setLinedata()
			this.setDonutdata()
			this.setTableData()
		},
		ranged_scans: function(){
			this.setLinedata()
			this.setDonutdata()
			this.setTableData()
		}
	},
	methods: {
		getAllData: function(){
			HTTP.get(`data`)
			.then((response) => {		
				console.log(response.data)		
				//this.scans = response.data.scans
			})
			.catch((errors) => {
				console.log(errors)
			})
		},
		setLinedata: function(){
			var options = this.linedata.lineoptions
				var serie = []
				if(this.ranged_scans != null){
					serie = this.groupBy(this.ranged_scans)
				}		
			options.chart.id = ''
			options.xaxis.categories = this.categories[this.timespan]
			options.xaxis.title.text = this.timespan
			options.yaxis.min = 0
			options.yaxis.max = 1000
			options.yaxis.title.text = 'Aantal'
			options.title.text = 'Aantal voertuigen'
			options.title.align = 'left'
			this.linedata.lineseries = serie
			
			
		},
		setDonutdata: function(){
			var serie = this.groupBy(this.ranged_scans)
			var donut = []
				console.log(serie)
			for(var p = 0; p < serie.length; p++){
				var result = 0;
					console.log(serie[p])
				for(var j = 0; j < serie[p].data.length; j++){
					result += parseInt(serie[p].data[j]);
				}
				donut.push(result)
				console.log(donut)
			}
			this.donutdata = {
				donutoptions: {
					chart: {
						height: 350,
						type: 'donut',
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
					labels: ['Car','Truck','Cyclist','Pedestrian','Bus']
				},
				donutseries: donut
			}
		},
		setTableData:function(){
			//var label = ['Datum', 'Car','Bus','Truck','Cyclist','Pedestrian']
			var grouped_data = this.groupBy(this.ranged_scans)
			this.table_data = []
			for(var y = 0; y < this.categories[this.timespan].length; y++){
				var scans = {
						"Datum": this.categories[this.timespan][y],
						"Car": grouped_data[0].data.[y],
						"Truck": grouped_data[1].data.[y],
						"Cyclist": grouped_data[2].data.[y],
						"Pedestrian": grouped_data[3].data.[y],						
						"Bus": grouped_data[4].data.[y],
					}
				this.table_data.push(scans)
			}
		},
		randomizedArray: function(){
			switch(this.timespan){
				case "today":
					this.array = Array.from({length: 24}, () => Math.floor(Math.random() * 200));
					break;
				case "week":
					this.array = Array.from({length: 7}, () => Math.floor(Math.random() * 200 * 7));
					break;
				case "month":
					this.array = Array.from({length: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()}, () => Math.floor(Math.random() * 200 * 15));
					break;
				case "year":
					this.array = Array.from({length: 12}, () => Math.floor(Math.random() * 200 * 31));
					break;
			}
			return this.array
		},
		getScansByRangedDate: function(starttime, endtime){
			console.log(starttime, endtime)
			HTTP.get(`data/${starttime}/endtime:${endtime}`)
			.then((response) => {				
				console.log(JSON.parse(response.data.scans))
				this.ranged_scans = JSON.parse(response.data.scans)
			})
			.catch((errors) => {
				console.log(errors)
			})
		},
		groupBy: function(array) {
			var label = ['Car','Truck','Cyclist','Pedestrian','Bus']	
			this.current_data = []
			this.current_data[0] = new Array(this.categories[this.timespan].length).fill(0)
			this.current_data[1] = new Array(this.categories[this.timespan].length).fill(0)
			this.current_data[2] = new Array(this.categories[this.timespan].length).fill(0)
			this.current_data[3] = new Array(this.categories[this.timespan].length).fill(0)
			this.current_data[4] = new Array(this.categories[this.timespan].length).fill(0)
			
			for(var i = 0; i < array.length; i++){
				var scan = array[i]
				switch(this.timespan){
					case 'today':
						this.current_data[scan.vehicle_id-1][moment(scan.timestamp).hour()-1] += scan.vehicle_amount
						break
					case 'week':					
						this.current_data[scan.vehicle_id-1][moment(scan.timestamp).isoWeekday()-1] += scan.vehicle_amount
						break
					case 'month':
						this.current_data[scan.vehicle_id-1][moment(scan.timestamp).date()-1] += scan.vehicle_amount
						break
					case 'year':
						this.current_data[scan.vehicle_id-1][moment(scan.timestamp).month()] += scan.vehicle_amount
						break
					default:
						break
				}
			}
			var processed = []
			for(var x = 0; x < this.current_data.length; x++){		
				processed.push({
					name: label[x],
					data: this.current_data[x]
				})
			}
			return processed			
		}
	},
	created: function () {
		this.getScansByRangedDate(moment().format('YYYY-MM-DD'), moment(moment()).add(1, 'days').format('YYYY-MM-DD'))
		this.getAllData()
    }
	
}
</script>

<style scoped>
	.dashboard{
		width: 100%;
		display: block;
	}
	.dashboard-block{
		background-color: #efefef;
		border: 1px solid #000000;
		padding: 10px;
		margin: 10px;
	}
</style>

