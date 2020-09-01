<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Login from './components/Login'
import myPage from './components/myPage'
import Signup from './components/SignUp'
import Ticketing from './components/Ticketing'
import addMovie from './components/addMovie'
import userValidate from './components/userValidate'


export default {
  name : 'app',
  components: {
    Login,
    myPage,
    Signup,
    Ticketing,
    addMovie,
    userValidate
  }
  
}
</script>

<style>

</style>
