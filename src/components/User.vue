<template>
<div id="register" class="shadow rounded">

<div class="dropdown " style="text-align: left;">
  <button class="btn btn-secondary dropdown-toggle dropbutton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Menehariya Officer  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="# " >Traffic Police</a></li>
 </ul>
</div>

<div class="list-group">
    <button v-for="post in posts" v-bind:key="post.id" type="button" class="list-group-item list-group-item-action "  aria-current="true">
    <table style="">
        <tr>
            <td style="  text-align: left; width:30px">{{ post.id }}</td>
            <td  style="  text-align: left;width:200px">Tariku</td>
            <td  style="  text-align: left; width:200px">WoldeMichael</td>
            <td  style="  text-align: left; width:200px"></td>
            <td  style="  text-align: right; width:400px;">
               <router-link to="/editUser"> 
                    <button class="btn btn-success mybutton">edit</button>
               </router-link>
             </td>
        </tr>
      </table>
  </button>
  <button type="button" class="list-group-item list-group-item-action">
     <table style="">
        <tr>
            <td style="  text-align: left; width:30px">2</td>
            <td  style="  text-align: left;width:200px">Getaneh</td>
            <td  style="  text-align: left; width:200px">Tessema</td>
            <td  style="  text-align: left; width:200px"></td>
            <td  style="  text-align: right; width:400px;"><button class="btn btn-success mybutton">edit</button></td>
        </tr>
      </table>
  </button>
  <button type="button" class="list-group-item list-group-item-action active">
      <table style="">
        <tr>
            <td style="  text-align: left; width:30px">3</td>
            <td  style="  text-align: left;width:200px">Chala</td>
            <td  style="  text-align: left; width:200px">Tolosa</td>
            <td  style="  text-align: left; width:200px"></td>
            <td  style="  text-align: right; width:400px;"><button class="btn btn-success mybutton">edit</button></td>
        </tr>
      </table>
  </button>
  <button type="button" class="list-group-item list-group-item-action">
    <table style="">
        <tr>
            <td style="  text-align: left; width:30px">4</td>
            <td  style="  text-align: left;width:200px">Geta</td>
            <td  style="  text-align: left; width:200px">Girma</td>
            <td  style="  text-align: left; width:200px"></td>
            <td  style="  text-align: right; width:400px;"><button class="btn btn-success mybutton">edit</button></td>
        </tr>
      </table>
  </button>
  <button type="button" class="list-group-item list-group-item-action" >
      <table style="">
        <tr>
            <td style="  text-align: left; width:30px">5</td>
            <td  style="  text-align: left;width:200px">Wesen</td>
            <td  style="  text-align: left; width:200px">Wudineh</td>
            <td  style="  text-align: left; width:200px"></td>
            <td  style="  text-align: right; width:400px;"><button class="btn btn-success mybutton">edit</button></td>
        </tr>
      </table>
  </button>
</div>
</div>

</template>
<script>
export default {
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("http://jsonplaceholder.typicode.com/posts");
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>
<style scoped>

#register{
    width: 65%;
    margin-left: 15%;
}
.dropdown{
 padding-left: 0%;
}

.active  {

  background-color: rgb(70, 108, 121);

}
.mybutton{
    background-color: rgb(30, 55, 63);
}
.dropbutton{
    background-color: white;
    color:black
}
.dropdown{
    margin-top: 2%;
}

</style>
