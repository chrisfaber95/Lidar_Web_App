<template>
	<div id="mainnav" class="header" :class="menu" ref="nav">
		<div class="title">		
			<h1>Lidar</h1>
		</div>
		<div class="nav">		
			<div id="hidemenu">
				<b-button @click="closemenu" v-if="menuopen"><<<</b-button>
				<b-button @click="closemenu" v-if="!menuopen">>>></b-button>
			</div>	
			<div id="navigation" v-if="menuopen">
				<b-navbar-nav>
					<router-link to="/" tag="b-nav-item">Dashboard</router-link>
					<router-link to="/rapportage" tag="b-nav-item">Rapportage</router-link>
					<!--<router-link to="/locaties" tag="b-nav-item">Locaties</router-link>				-->
				</b-navbar-nav>
			</div>
		</div>		
		<div id="logout">
			<!--<router-link to="/logout" tag="b-nav-item" v-if="menuopen">Naam.........Uitloggen</router-link>-->
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
	},
	data: function(){
		return{
			menuopen: true,
			menu: 'openmenu'
		}
	},
	methods:{
		closemenu: function(){
			switch(this.menuopen){
				case true:					
					this.menu = 'closedmenu'
					this.menuopen = false
					break;
				case false:						
					this.menu = 'openmenu'
					this.menuopen = true
					break;
			}			
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1{
	margin-top: unset;
}

.header{
	width: 15%;
	background-color: #AAAAAA;
	display: block;
	height: 100%;
}
.title{
	background-color: #535353;
}
.nav{
	background-color: #2f2f2f;
	color: #ffffff;
	display: block;
}
#hidemenu{
	position: relative;
	padding-bottom: 25px;
}
#hidemenu button{
	float: right;
}
.navbar-nav{
	width: 100%;
	padding-left: 0;
}
.nav-item{
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	width: 100%;
}
.closedmenu{
	-webkit-transition: 1s;
	-moz-transition: 1s;
	-ms-transition: 1s;
	-o-transition: 1s;
	transition: 1s;
	width: 3% !important;
}
.openmenu{
	-webkit-transition: 1s;
	-moz-transition: 1s;
	-ms-transition: 1s;
	-o-transition: 1s;
	transition: 1s;
	width: 15% !important;
}
</style>
<style>
.nav-link{
	color: #ffffff;
}
.navbar-nav .nav-link{
	font-size: 2rem;
}
.navbar-nav .nav-item.router-link-exact-active {
   background-color: #b8b8b8;
   cursor: pointer;
 }
.v-application a{
	color: white !important;
}
</style>
