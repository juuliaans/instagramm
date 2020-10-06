<template>
<div>
    <v-card-text>
        Comments
        <v-card-subtitle v-for="comment in comments" :key="comment.id">
            {{ comment.text }}
            <v-icon left>
            mdi-trash
            </v-icon>
        </v-card-subtitle>
    </v-card-text>    
    <v-card-text>
        <v-text-field placeholder="Add new comment ..." v-model="commentText"></v-text-field>
        <v-btn @click="onAddComment">Submit</v-btn>
    </v-card-text>
</div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        data(){
            return {
                commentText: ""
            }
        }, 
        props: {
            comments: Array,
            postId: Number, 
        }, 
        methods: {
            onAddComment(){
                this.addComment({ postId: this.postId, comment: { text: this.commentText }});
                this.commentText = "";
            }, 
            ...mapMutations(['addComment'])
        }
    }
</script>

<style lang="scss" scoped>

</style>