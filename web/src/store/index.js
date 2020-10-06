import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts(store, posts){
      store.posts = store.posts.concat(posts);
    }, 
    addComment(store, { postId, comment }){
      const post = store.posts.find((t) => t.id === postId);
      if (post){
        post.comments.push(comment);
      }
    }, 
    addLike(store, { postId }){
      const post = store.posts.find((t) => t.id === postId);
      if (post){
        post.likes++;
      }
    }
  },
  actions: {
    getPosts(store){
      axios.get('./data/posts.json').then((res) => {        
        store.commit('setPosts', res.data);
      });
    }
  },
  modules: {
  }
})
