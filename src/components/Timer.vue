<template>
    <div class="message is-info">
        <div class="message-header">
            <p>{{ title }}</p>
        </div>
        <div class="columns">
            <div class="column">
                <p>{{ subtitle }}</p>
            </div>
            <div class="column">
                <!--Implement timer-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['duration', 'title', 'subtitle']
}
</script>