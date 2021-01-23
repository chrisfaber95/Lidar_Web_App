<template>
  <v-app>
	<div id="app1">	
		<Header />
		<v-main>
			<router-view />
		</v-main>
	</div>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',

  components: {
	Header
  },

  data: () => ({
    //
  }),
};
</script>
<style>
html, body{
	height: 100%;
}
#app1{
	width: 100%;
	height: 100%;
	display: -webkit-inline-box !important;
}
#app{
	width: -moz-available !important;
}
</style>