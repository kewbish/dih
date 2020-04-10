<template>
    <div>
        <h1 class="title is-1">{{ slideSubject }}</h1>
        <p v-for="s in slideContent" :key="s.line">{{ s.line }}</p>
        <div v-for="s in slideContent" :key="s.figure" >
            <img :src="s.figure[0]">
            <p class="is-size-5">{{ s.figure[1] }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['slideSubject', 'slideContent'],
}
</script>