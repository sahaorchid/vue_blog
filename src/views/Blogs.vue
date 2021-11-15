<template>
  <div class="about">
    <div v-for="blog in blogs" :key="blog.id">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{blog.name}}</h5>
            <p class="card-text">{{blog.description}}</p> 
            <router-link :to="'/blog/'+blog.id" class="btn btn-primary">Details</router-link>
            <router-link :to="'/update/'+blog.id" class="btn btn-info">Update</router-link>
            <button class="btn btn-danger" @click="dltPost(blog)">delete</button>
        </div>
      </div>
    </div>
   </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Blogs',

  data(){
      return {
          blogs: [],
        }
  },
  created(){
          axios.get('http://localhost:5000/v1/api/blogs')
          .then((res)=>{
              this.blogs=(res.data.data)
          }).catch((err)=>{
              alert(err)
          })      
  },

  methods:{
        dltPost(blog){
            axios.delete(`http://localhost:5000/v1/api/blogs/${blog.id}`)
                .then((res)=>{
                    if(res.status==200){
                        const index = this.blogs.indexOf(blog);
                        this.blogs.splice(index,1)
                }
                })
                .catch((err)=>{
                    alert(err)
                    })
            }
    }  
}
</script>