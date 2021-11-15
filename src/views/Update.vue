<template>
  <div class="about">
    <h1>Update</h1>
        <div class="container">
        <form @submit="updateData">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Title</label>
              <input type="text" class="form-control"  id="title_input"  v-model="name"> 
            </div>
            <div class="mb-3">
              <label  class="form-label">Description</label>
              <input type="text" class="form-control" id="desc_input" v-model="description">
              <!-- <input type="file" class="form-control" id="file_input" > -->
            </div>
            <button type="submit" class="btn btn-primary" id="submit">Submit</button>
          </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Create',

  data(){
      return {
          id: this.$route.params.id,

      }
  },
  methods:{
      updateData(e){
          e.preventDefault()
          axios.put(`http://localhost:5000/v1/api/blogs/${this.id}`, {
            name: this.name,
            description: this.description,
            image_url: ""
  })
  .then(function (response) {
    if(response.status==200){
        console.log('d')
    }
  })
  .catch(function (error) {
    console.log(error);
  });
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
}
</script>