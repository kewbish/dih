<template>
    <div class="section hero is-dark">
        <h1 class="title">The Editor.</h1>
        <div class="hero-body px-0 py-3">
            <div class="box" style="height: 100%;">
                <div class="tabs">
                    <ul>
                        <li @click="setMode('html')" class="is-active"><a>HTML</a></li>
                        <li @click="setMode('css')"><a>CSS</a></li>
                        <li @click="setMode('preview');togglePrev()"><a>Toggle preview</a></li>
                        <li @click="exportFiles()"><a>Export Files</a></li>
                    </ul>
                </div>
                <div id="editors" style="height: 55vh;"></div>
                <div v-if="preview['isAct']">
                    <hr>
                    <h1 class="title is-4">Preview</h1>
                    <iframe class="box mt-2" style="width: 100;" id="preview" :srcdoc="preview['content']"></iframe>
                </div>
            </div>
            <button class="button" @click="back()">📚 Go back</button>
        </div>
    </div>
</template>
<script>
import * as monaco from 'monaco-editor';
export default {
    data() {
        return {
            editors: null,
            editorHtml: null,
            editorCss: null,
            preview: {"content": null, "isAct": false}
        }
    },
    mounted() {
        this.editors = monaco.editor.create(document.getElementById('editors'), {theme: 'vs-dark'});
        const html = localStorage.getItem('html') || '<!DOCTYPE html>\n<html lang="en">\n<head>\t\n<meta charset="UTF-8">\t\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\t\n<title></title>\n</head>\n<body>\n</body>\n</html>';
        const css = localStorage.getItem('css') || "/* Get started 🌊 */";
        this.editorHtml = monaco.editor.createModel(html, "html");
        this.editorCss = monaco.editor.createModel(css, "css");
        this.editors.setModel(this.editorHtml);
        this.editors.onDidChangeModelContent(() => {
            this.setMode('preview');
        });
        this.editorHtml.onDidChangeContent(() => {
            this.localSave('html');
        });
        this.editorCss.onDidChangeContent(() => {
            this.localSave('css');
        });
        this.keyShorts = function(e) {
            if (e.key === "V" && e.shiftKey && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                this.togglePrev();
            }
        };
        document.addEventListener('keydown', this.keyShorts.bind(this));
    },
    methods: {
        setMode(model) {
            if (model == 'html') {
                this.editors.setModel(this.editorHtml);
            }
            else if (model == 'css') {
                this.editors.setModel(this.editorCss);
            }
            else if (model == 'preview') {
                const html = this.editorHtml.getValue();
                const css = this.editorCss.getValue();
                this.preview['content'] = html + `<style>${css}</style>`;
            }
        },
        localSave(mode) {
            if (mode == 'html') {
                const html = this.editorHtml.getValue();
                localStorage.setItem('html', html);
            }
            else if (mode == 'css') {
                const css = this.editorCss.getValue();
                localStorage.setItem('css', css);
            }
        },
        togglePrev() {
            this.preview['isAct'] = !this.preview['isAct'];
        },
        exportFiles () {
            const html = document.getElementById("preview").srcdoc;
            console.log(html);
            var link = document.createElement('a');
            link.setAttribute('download', 'index.html');
            link.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
            link.click();
        },
        back () {
            const lastRoute = localStorage.getItem("page");
            this.$router.push(lastRoute != "undefined" || lastRoute != null ? lastRoute : "/0")
            .catch((err) => {
              console.log("There was an error.", err);
            });
        }
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.keyShorts);
    }
}
</script>

