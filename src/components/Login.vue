
<template>
<div class="shadow" id="login" >
            <div class="login">
                <form action=""> 

            <div class="form-group">
                <label for="Email"></label>
                <input type="email" class="form-control  shadow rounded" placeholder="email">

            </div>

            <div class="form-group p-1">
                <label for="Password"></label>
                <input type="password" class="form-control  shadow rounded" placeholder="password">

            </div>
            <button class="btn btn-primary btn-block p-2 m-2">Login   </button>
        </form>
    </div>

</div>
		
</template>
<script>
export default {
    name: 'Login'
}
</script>
<style scoped>
#login{
      margin-left: 30%;
      margin-right: 30%;
}
.login{
    margin-top: 15%;
    margin-right: 20%;
    margin-left: 20%;
    padding-bottom: 20%;
}
</style>