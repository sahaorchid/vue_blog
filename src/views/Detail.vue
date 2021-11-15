<template>
  <div class="home">
        <div class="about">
    <h1>{{blog}}</h1>
    <router-link to="/create">Home</router-link>
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{blog.name}}</h5>
            <p class="card-text">{{blog.description}}</p>  
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Detail',

data(){
      return{
        id: this.$route.params.id,
        blog:[]
      }
  },
  created(){
        axios.get(`http://localhost:5000/v1/api/blogs/${this.id}`)
          .then((res)=>{
              this.blog=(res.data.data)
          }).catch((err)=>{
              alert(err)
          })     
  },  
}
</script>
