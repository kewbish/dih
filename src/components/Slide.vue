<template>
    <section class="section">
        <h1 class="title is-1">{{ slideSubject }}</h1>
        <div v-for="(s, index) in slideContent" :key="index" style="margin: 5px 0;">
            <p class="is-size-5" v-if="s.line">{{ s.line }}</p>
            <img :src="s.img" v-if="s.img" style="margin: 5px 0;">
            <ul v-if="s.list" class="list" style="margin: 5px 0;">
                <li v-for="(sl, i) in s.list" :key="i" class="list-item">{{ sl.item }}</li>
            </ul>
            <timer v-if="s.timer" :title="s.timer[0]" :subtitle="s.timer[1]" :durationInSecs="s.timer[2]"></timer>
        </div>
    </section>
</template>

<script>
export default {
    props: ['slideSubject', 'slideContent'],
}
</script>