<template>
  <div>
    <navigation/>

    
    <!-- Router View -->
    <router-view></router-view>
  </div>
</template>

<script>
//import Login from './components/Login.vue'
//import Register from './components/register.vue'
import navigation from './components/Nav.vue'
import "bootstrap/dist/css/bootstrap.min.css"

export default {
  name: 'App',
  components: {
    navigation,
  //  Login,
    
    
  }
}
</script>

<style>
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>