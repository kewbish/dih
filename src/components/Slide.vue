<template>
    <section class="section">
        <h1 class="title is-1">{{ slideSubject }}</h1>
        <p v-for="s in slideContent" :key="s.line" class="is-size-5">{{ s.line }}</p>
        <div v-for="s in slideContent" :key="s.img">
            <img :src="s.img">
        </div>
    </section>
</template>

<script>
export default {
    props: ['slideSubject', 'slideContent'],
}
</script>