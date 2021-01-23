import {HTTP} from '@/assets/scripts/http-common.js';
import router from '@/router';

export default{
    user:{
        authenticated: false,
        info:{
            email: '',
            userinfo:[]
        },
        permissions: 1,
		language_code: 'en'

    },
    login(email, pass){
        const data = {
            email: email,
            pass: pass
        }
		
		localStorage.setItem('access_token', "tijdelijke access code")
		localStorage.setItem('expires', Date.now() + 10000)
		localStorage.setItem('info', data.email)
        this.user.authenticated = true;
		router.push('dashboard')
		/*HTTP.post("user/login", data)
        .then(response => {
            if(!response.data.err_code){
                this.user.info.email = response.data.user.email;
                localStorage.setItem('id_token', response.data.user.id_token)
                localStorage.setItem('access_token', response.data.user.access_token)
                localStorage.setItem('expires', Date.now() + response.data.user.expires_in)
                localStorage.setItem('info', response.data.user.email)
                localStorage.setItem('permissions', response.data.user.permissions)
                localStorage.setItem('language_code', response.data.user.language_code)
                this.user.permissions = response.data.user.language_code;
                this.user.language_code = response.data.user.language_code;
                this.user.authenticated = true;

                this.getInfo()
                router.push('home')
            }
            else{
                alert(response.data.err)
            }*/
      //  })
      //  .catch(e => {
      //      console.log(e)
      //  })
    },
    logout(){
        this.user.authenticated = false
        this.user.info.email = ''
        this.user.info.userinfo = []
        localStorage.clear();
        router.push('login')
    },
    register(email, pass){
        const data = {
            email: email,
            pass: pass
        }
        HTTP.post("user/add", data)
        .then(() => {
        })
        .catch(e => {
            console.log(e)
        })
    },
    isAuthenticated(){
        if(this.authenticated == true){
            if(localStorage.getItem('expires') > Date.now() && localStorage.getItem('access_token')){
                
                return true;
            }
            else{
                this.authenticated = false;
                return false;
            }
        }
        else{
            if(localStorage.getItem('expires') > Date.now() && localStorage.getItem('access_token')){
                this.authenticated = true;
                return true;
            }
            else{
                return false;
            }
        }
    },
    isAdmin(){
        if(this.authenticated == true){
            if(localStorage.getItem('expires') > Date.now() && localStorage.getItem('access_token') && (localStorage.getItem('permissions') == 2 || localStorage.getItem('permissions') == 5)){
                return true;
            }
            else{
                this.authenticated = false;
                return false;
            }
        }
        else{
            if(localStorage.getItem('expires') > Date.now() && localStorage.getItem('access_token') && (localStorage.getItem('permissions') == 2 || localStorage.getItem('permissions') == 5)){
                this.authenticated = true;
                return true;
            }
            else{
                return false;
            }
        }
    },
    updateInfo(){
        const data = JSON.parse(localStorage.getItem("userinfo"))
        const id = JSON.parse(localStorage.getItem('id_token'))
        HTTP.put("user/update/" + id, data)
        .then(response => {
            localStorage.setItem('userinfo', JSON.stringify(response.data.user))
            this.user.info.userinfo = JSON.parse(localStorage.getItem('userinfo'))
        })
        .catch(e => {
            console.log(e)
        })
    },
    getInfo(){
        const id = localStorage.getItem("id_token");

        HTTP.get("user/"+id)
        .then(response => {
            localStorage.setItem('userinfo', JSON.stringify(response.data.user))
            this.user.info.userinfo = JSON.parse(localStorage.getItem('userinfo'))
            
        })
        .catch(e => {
            console.log(e)
        })
    },
    showInfo(){
        return this.user.info.userinfo;
    },
    getPermission: function (){
      return localStorage.getItem('permissions')
    },
    getId: function (){
      return localStorage.getItem('id_token')
    }
}