<template>
    <div>
        <v-card
        elevation="2"
        class="mx-auto my-5"
        max-width="500"
        >
            <v-card-title>{{data.title}}</v-card-title>
            <v-img height="400"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            <PostActions :likes="data.likes" :postId="data.id" />
            <v-card-text>{{data.description}}</v-card-text>
            <v-divider class="mx-4"></v-divider>
            <PostComments :comments="data.comments" :postId="data.id" />
        </v-card>
    </div>
</template>

<script>
    import PostComments from "./PostComments";
    import PostActions from './PostActions';

    export default {
        components: {
            PostComments, 
            PostActions
        }, 
        props: {
            data: {
                type: Object, 
                default: () => ({}), 
            }, 
        }
    }
</script>

<style lang="scss" scoped>

</style>