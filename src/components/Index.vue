<template>
    <div>
        <section>
            <div class="hero is-info is-bold is-medium">
                <div class="hero-body">
                    <h1 class="title is-1 has-text-centered">SJAP - Dive Into HTML - Created by Kewbish.</h1>
                    <div class="has-text-centered">
                        <a href="#get-started" class="button">Get Started 📚</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="get-started">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="box is-light">
                            <h1 class="title">Ever wanted to create an online resume?</h1>
                            <p>We'll walk you through how.<br>Here, you'll learn the basics of laying out a website,
                                styling
                                it, making it mobile-friendly and responsive, and deploying it to the
                                interwebs.<br>All for
                                free - and released under the GNU License. We 💖 open source!</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box is-light">
                            <p class="title">Let's get started.</p>
                            <p><a @click="$index = false" class="button is-dark">Go to tutorial 👩‍🏫</a><br></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero is-info is-bold is-small">
            <div class="hero-body">
                <p>Created by <a href="https://kewbish.github.io"
                        style="color: white; text-decoration: underline;">Kewbish</a>.</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods:{
        switchIndex: function(){
            console.log("help");
            this.index = false;
        }
    }
}
</script>>