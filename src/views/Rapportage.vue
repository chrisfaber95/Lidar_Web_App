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
		<datetime type="datetime" v-model="startdate"></datetime> <p>tot</p> <datetime type="datetime" v-model="enddate"></datetime>
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
import _ from 'lodash'

export default {
	name: 'Dashboard',
	components: {
		vuetable
	},
	data: function() {
		return {
			startdate: null,
			enddate: null,
			checkedVehicle: [],
			selectedExport: "",
			data:[],
			header: []
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
		setTableData: function(){
			var newHeader = _.concat(["datum"], this.checkedVehicle)
			console.log(newHeader)
			this.header = newHeader
			
			this.data = [
				{	
					datum: "Jan",
					fiets: this.randomizedArray(),
					auto: this.randomizedArray(),
					vrachtwagen: this.randomizedArray(),
				},
				{	
					datum: "Feb",
					fiets: this.randomizedArray(),
					auto: this.randomizedArray(),
					vrachtwagen: this.randomizedArray(),
				},
				{	
					datum: "Mar",
					fiets: this.randomizedArray(),
					auto: this.randomizedArray(),
					vrachtwagen: this.randomizedArray(),
				},
				{	
					datum: "Apr",
					fiets: this.randomizedArray(),
					auto: this.randomizedArray(),
					vrachtwagen: this.randomizedArray(),
				},
				{	
					datum: "May",
					fiets: this.randomizedArray(),
					auto: this.randomizedArray(),
					vrachtwagen: this.randomizedArray(),
				},
				{	
					datum: "Jun",
					fiets: this.randomizedArray(),
					auto: this.randomizedArray(),
					vrachtwagen: this.randomizedArray(),
				},
				{	
					datum: "Jul",
					fiets: this.randomizedArray(),
					auto: this.randomizedArray(),
					vrachtwagen: this.randomizedArray(),
				},
				{	
					datum: "Aug",
					fiets: this.randomizedArray(),
					auto: this.randomizedArray(),
					vrachtwagen: this.randomizedArray(),
				},
				{	
					datum: "Sep",
					fiets: this.randomizedArray(),
					auto: this.randomizedArray(),
					vrachtwagen: this.randomizedArray(),
				},
				
			]
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

