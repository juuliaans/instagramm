<template>
    <div>
        <Post v-for="post in posts" :key="post.id" :data="post">
        </Post>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import Post from './Post';

    export default {
        mounted() {
            this.getPosts();
        }, 
        computed: {
            ...mapState(['posts']), 
        },
        components: {
            Post,
        }, 
        methods: {
            ...mapActions(['getPosts'])
        }
    }
</script>

<style lang="scss" scoped>

</style>