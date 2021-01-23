<template>
  <div class="login">
	<div class="head">		
		<img class="img-fluid" src= "" height="40" width="200">
	</div>
    <div class="loginform">
        <h2 v-if="!reset">Log In</h2>
        <!--<p v-if="reset">{{ $t("message.emailrequest") }}</p>-->
		<label for="email">Email</label>
        <b-input type="text" placeholder="Email" name="email" v-model="userLogin.email"/>
		<label for="pass">Password</label>
        <b-input v-if="!reset" type="password" name="pass" placeholder="Password" v-model="userLogin.pass"/>
		<!--<a @click="reset = true" v-if="!reset">{{ $t("message.forgotpass") }} {{ $t("message.clickhere") }}</a>-->
		<br/>
        <b-button v-if="!reset" @click="login()">LOGIN</b-button>
		<!--<b-button v-if="reset" @click="forgotPassword()">{{ $t("message.changerequest") }}</b-button>
		<b-button @click="register()">register</b-button> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from '@/assets/scripts/auth';

export default {
  name: 'Login',
  components: {
  },
  data: function(){
    return{
		userLogin: {
			email: null,
			pass: null
		},
		reset: false
    }
  },
  methods:{
    login: function (){
		auth.login(this.userLogin.email, this.userLogin.pass);
    },
    register: function (){
		auth.register(this.userLogin.email, this.userLogin.pass);
    },
	forgotPassword: function(){
		//var data = {
		//	email: this.userLogin.email
		//}
	}
  },
  mounted(){
  }
}
</script>
<style>
	#header{
		display: none;
	}
</style>
<style scoped>
.login{
    margin-left:auto;
    margin-right:auto;
    margin-top: 30vh;
    margin-bottom: 30vh;
}
.loginform{
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding:10px 50px;
    text-align: left;
	background-color: #EEEEEE;
	border: 1px solid black;
}

.loginform h2{
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}
input{
    width:100%;
    margin:  20px auto 10px auto;
}

p{
  padding:20px 0 10px 0;
}

button{
    margin: 20px 0;
}

#app{
    overflow: hidden;
}
.head{
	background-color: #AAAAAA;
	width: 100%;
	height: 50px;
}
.head img{
	float: right;
	margin-top: 5px;
}
</style>