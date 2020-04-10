<template>
    <div>
        <h1 class="title is-1">{{ slideSubject }}</h1>
        <p v-for="s in slideContent" :key="s.line">{{ s.line }}</p>
    </div>
</template>

<script>
export default {
    props: ['slideSubject', 'slideContent'],
}
</script>