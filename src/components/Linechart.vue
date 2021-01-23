<template>
	<div class="linechart">
		<apexchart width="500" :type="charttype" :options="options" :series="series" ref="realtimeChart"></apexchart>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Chart',
	props: [
		charttype,
		data
	],
	components: {
	},
	data: function() {
		return {
		}
	},
	computed: {
		options:function()
		{
			if(this.charttype == "line"){
				return this.data.lineoptions
			}			
			else if(this.charttype == "donut"){
				return this.donutoptions
			}
		},
		series:function()
		{
			if(this.charttype == "line"){
				return this.data.lineseries
			}			
			else if(this.charttype == "donut"){
				return this.donutseries
			}
		}
	},
	methods:{
	},
	mounted: function(){
		console.log(this.data)
	}
}
</script>

<style scoped>
</style>