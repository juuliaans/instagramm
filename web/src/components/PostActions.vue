<template>
    <v-card-actions>
        <v-chip
        class="ma-2"
        color="red"
        label
        text-color="white"
        @click="onLikeClick"
        >
        <v-icon left>
            mdi-heart
        </v-icon>
        {{likes}}
        </v-chip>
    </v-card-actions>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        props: {
            postId: Number, 
            likes: Number
        }, 
        methods: {
            onLikeClick() {
                this.addLike({ postId: this.postId })
            }, 
            ...mapMutations(['addLike'])
        }
    }
</script>

<style lang="scss" scoped>

</style>