<template>
  <div class="home">
    <div class="todo-item" v-for="(post, key) in posts" :key="key">
      <div class="name" v-html="post.title.rendered"></div>
      <div class="time" v-html="post.excerpt.rendered"></div>
      <div class="excerpt">{{ post.id }}</div>
      <router-link :to="'/post/' + post.id">View</router-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      post: {},
      posts: []
    }
  },
  components: {
  },
  mounted () {
    this.getPost()
  },
  computed: {
    ...mapGetters({
      allData: "getTodos"
    })
  },
  methods: {
    getPost () {
      axios.get('http://extracatchy.net/wp-json/wp/v2/posts/').then((response) => {
        this.posts = response.data
      })
    }
  }
}
</script>
<style>
  body{
    background-color: #f4f4f4;
  }
  .todo-item{
    text-align: left;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 10px;
    background-color: #fff;
  }
  .name{
    font-size: 20px;
    font-weight: 500;
    color: #333;
  }
  .time{
    font-size: 14px;
  }
</style>
