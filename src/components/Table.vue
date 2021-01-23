<template>
	<div class="table">		
		<div class="table-button-container">
			<vuetable ref="vuetable"
				:api-mode=false
				:fields="header"
				:data="data"
				pagination-path=""
				:per-page="10"
			></vuetable>
		</div>
		{{data}}
	</div>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash'
import vuetable from 'vuetable-2'

export default {
	name: 'Table',
	props: [
		'data'
	],
	components: {
		vuetable
	},
	data: function() {
		return {
			header: []
		}
	},
	computed: {
		options:function()
		{
			return false
		},
		series:function()
		{
		return false
		}
	},
	methods:{
		
		setTableData: function(){
			var newHeader = _.concat(["datum"], this.checkedVehicle)
			console.log(this.data)
			console.log(newHeader)
			this.header = newHeader
		},
		reloadTable: function(){
			this.setTableData()
			this.$refs.vuetable.setData(this.data)
			this.$nextTick(()=>{
                this.$refs.vuetable.normalizeFields();
            });
			this.$refs.vuetable.reload()
			this.$refs.vuetable.refresh()
		}
	},
	mounted: function(){
		this.setTableData()
	}
}
</script>

<style scoped>
</style>