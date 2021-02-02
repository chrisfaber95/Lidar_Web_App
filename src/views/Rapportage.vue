<template>
	<div class="rapportage">
		<div id="options">		
			<b>Selecteer opties:</b>
		</div>
		<div class="opties">
			<div class="check"><label for="auto">Auto</label>
			<input type="checkbox" id="auto" value="auto" v-model="checkedVehicle"></div>
			<div class="check"><label for="fiets">Fiets</label>
			<input type="checkbox" id="fiets" value="fiets" v-model="checkedVehicle"></div>
			<div class="check"><label for="vrachtwagen">Vrachtwagen</label>
			<input type="checkbox" id="vrachtwagen" value="vrachtwagen" v-model="checkedVehicle"></div>
		</div>
		<span>Periode:</span>
		<datetime v-model="startdate" type='date'></datetime> <p>tot</p> <datetime type="date" v-model="enddate"></datetime>
		Exporteren naar:
		<select v-model="selectedExport">
			<option disabled value="">Selecteer:</option>
			<option value="CSV">CSV</option>
			<option value="PDF">PDF</option>
		</select>
		<span>Selected: {{ selectedExport }}</span>
		<download-csv
			:data   = "json_data">
			<b-button>Download</b-button>
		</download-csv>
		<div class="table-button-container">
			<vuetable ref="vuetable"
				:api-mode=false
				:fields="header"
				:data="data"
				pagination-path=""
				:per-page="10"
			></vuetable>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import {HTTP} from '@/assets/scripts/http-common.js';
import vuetable from 'vuetable-2'
import { Datetime } from 'vue-datetime'
import _ from 'lodash'
import moment from 'moment'

export default {
	name: 'Dashboard',
	components: {
		vuetable,
		datetime: Datetime
	},
	data: function() {
		return {
			startdate: null,
			enddate: null,
			checkedVehicle: [],
			selectedExport: "",
			data:[],
			header: [],
			ranged_scans: null
		}
	},
	computed: {
		json_data: function(){
			return this.data
		}
	},
	watch:{
		checkedVehicle: function(){
			this.reloadTable()
		},
		enddate: function(){
			if(moment(this.startdate) < moment(this.startdate) && moment(this.startdate) != null && moment(this.startdate) != null){			
				this.getScansByRangedDate(this.startdate, this.enddate)
			}
		},
		startdate: function(){
			if(moment(this.startdate) < moment(this.startdate) && moment(this.startdate) != null && moment(this.startdate) != null){			
				this.getScansByRangedDate(this.startdate, this.enddate)
			}
		}
	},
	methods: {
		getAllData: function(){
			HTTP.get(`data`)
			.then((response) => {		
				console.log(response.data)		
				this.scans = response.data.scans
			})
			.catch((errors) => {
				console.log(errors)
			})
		},
		getScansByRangedDate: function(starttime, endtime){
			console.log(starttime, endtime)
			if(moment(starttime) < moment(endtime) && moment(starttime) != null && moment(endtime) != null){
				HTTP.get(`data/${starttime}/endtime:${endtime}`)
				.then((response) => {				
					console.log(JSON.parse(response.data.scans))
					this.ranged_scans = JSON.parse(response.data.scans)
				})
				.catch((errors) => {
					console.log(errors)
				})
			}
		},
		setTableData: function(){
			var newHeader = _.concat(["datum"], this.checkedVehicle)
			console.log(newHeader)
			this.header = newHeader
			
			this.data = []
		},
		randomizedArray: function(){
			this.array = Math.floor(Math.random() * 200)
			return this.array
		},
		reloadTable: function(){
			console.log(this.$refs.vuetable)
			this.setTableData()
			this.$refs.vuetable.setData(this.data)
			console.log(this.header, this.checkedVehicle)
			this.$nextTick(()=>{
                this.$refs.vuetable.normalizeFields();
            });
			this.$refs.vuetable.reload()
			this.$refs.vuetable.refresh()
			console.log(this.$refs.vuetable)
		}
	},
	mounted: function () {
		this.setTableData()
    }
	
}
</script>

<style scoped>
.rapportage{
	padding: 10px;
}
.opties{
	display: block;
	margin: 10px;
	background-color: #2f2f2f;
	color: #ffffff;
	width: max-content;
	padding: 5px;
	border-radius: 10px
}

.opties .check{
	padding: 5px;
}

.opties .check input{
	float: right;
	margin-top: 5px;
	margin-left: 15px;
	
}
</style>

