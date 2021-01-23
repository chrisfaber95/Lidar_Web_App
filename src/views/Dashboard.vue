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
					<h2>Tabellen</h2>
					<Table :data.sync="tabledata" ref="table" />
				</div>
			</div>
			<div class="col-5">
				<div class="dashboard-block">
					<Chart charttype="donut" :data.sync="donutdata" ref="donutchart"/>
				</div>
				<button @click="changedata()">Click</button>
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
				week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				month: Array.from(Array(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()).keys()),
				year: ['Jan', 'Feb', 'Mar','Apr', 'Mei', 'Jun','Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
			}
		}
	},
	computed: {
		getCategories: function(){
			return false
		}
	},
	watch:{
		timespan: function(){
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
				console.log(this.ranged_scans)
				var serie = []
				if(this.ranged_scans != null){
					serie = this.groupBy(this.ranged_scans)
				}		
			console.log(serie)
			options.chart.id = ''
			options.xaxis.categories = this.categories[this.timespan]
			options.xaxis.title.text = this.timespan
			options.yaxis.min = 0
			options.yaxis.max = 1000
			options.yaxis.title.text = 'Aantal'
			options.title.text = 'Aantal voertuigen'
			options.title.align = 'left'
			console.log(this.linedata)
			this.linedata.lineseries = serie
			
			
		},
		setDonutdata: function(){
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
				},
				donutseries: this.groupBy(this.ranged_scans)
			}
		},
		setTableData:function(){
			
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
			var label = ['Car','Bus','Truck','Cyclist','Pedestrian']	
			this.current_data = new Array(label.length)
			switch(this.timespan){
				case 'today':
					this.current_data.fill(new Array(this.categories[this.timespan].length).fill(0))
					console.log(this.current_data)
					break
				case 'week':					
					this.current_data.fill(new Array(this.categories[this.timespan].length).fill(0))
					break
				case 'month':
					this.current_data.fill(new Array(this.categories[this.timespan].length).fill(0))
					break
				case 'year':
					this.current_data.fill(new Array(this.categories[this.timespan].length).fill(0))
					break
				default:
					break
			}
			console.log(array)
			for(var i = 0; i < array.length; i++){
				var scan = array[i]
				switch(this.timespan){
					case 'today':
						console.log(scan)
						console.log(scan.vehicle_id-1, moment(scan.timestamp).hour()-1 , this.current_data[scan.vehicle_id-1][moment(scan.timestamp).hour()-1])
						this.current_data[scan.vehicle_id-1][moment(scan.timestamp).hour()-1] += scan.vehicle_amount
						break
					case 'week':					
						this.current_data[array[i].vehicle_id-1][moment(array[i].timestamp).isoWeekday()] += array[i].vehicle_amount
						break
					case 'month':
						this.current_data[array[i].vehicle_id-1][moment(array[i].timestamp).date()] += array[i].vehicle_amount
						break
					case 'year':
						this.current_data[array[i].vehicle_id-1][moment(array[i].timestamp).month()+1] += array[i].vehicle_amount
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

