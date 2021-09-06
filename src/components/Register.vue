<template>
<div id="register" class="shadow rounded">
<form action="">

<ul class="p-3 float-right">
    <li>
        <div class="form-check shadow-sm">
             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
             <label class="form-check-label" for="flexRadioDefault1">
                  Traffic Police
             </label>
        </div>
    </li>
    <li>
        <div class="form-check  shadow-sm ">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
             <label class="form-check-label" for="flexRadioDefault2">
                   Menehariya Officer
             </label>
        </div>
    </li>
</ul>

<div id="user_info">

    <div class="form-group ">
     <label class="float-start labels pb-1">First Name</label>
     <input type="text" class="form-control shadow rounded" placeholder="first Name"/>
    </div>
    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" >Last Name</label>
        <input type="text" class="form-control shadow rounded" placeholder="last name"> 
    </div>
    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" >User Name</label>
        <input type="text" class="form-control shadow rounded" placeholder="user name"> 
    </div>
    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" >Email</label>
        <input type="email" class="form-control shadow rounded" placeholder="email"> 
    </div>
    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" >Password</label>
        <input type="password" class="form-control shadow rounded" placeholder="password"> 
    </div>
     <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" >Phone</label>
        <input type="tel" class="form-control shadow rounded" placeholder="phone number "> 
    </div>
    <ul class="pt-1 float-right">
    <li>
        <div class="form-check shadow-sm">
             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
             <label class="form-check-label" for="flexRadioDefault1">
                  Male
             </label>
        </div>
    </li>
    <li>
        <div class="form-check  shadow-sm ">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
             <label class="form-check-label" for="flexRadioDefault2">
                   Female
             </label>
        </div>
    </li>
</ul>
    <div class="form-group  labels">
        <label class="float-start pb-1" >ID Number</label>
        <input type="text" class="form-control shadow rounded" placeholder="ID"> 
    </div>

    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" >Work Place</label>
        <input type="text" class="form-control shadow rounded" placeholder="Work Place"> 
    </div>
    <button class="btn btn-primary btn-block mt-2">Register</button>
</div>
</form>
</div>
</template>
<script>
export default{
    name: 'Register'
}

</script>
<style scoped>
#register{
    width: 65%;
    margin-left: 15%;
}
#user_info{
    padding-left: 25%;
    padding-right: 25%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 15px;
}
.labels{
    margin-left: 0%;
}
</style>