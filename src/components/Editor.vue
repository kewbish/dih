<template>
    <div class="section hero is-dark">
        <h1 class="title">The Editor.</h1>
        <div class="hero-body px-0 py-3">
            <div class="box" style="height: 100%;">
                <div class="tabs">
                    <ul>
                        <li @click="setMode('html')" class="is-active"><a>HTML</a></li>
                        <li @click="setMode('css')"><a>CSS</a></li>
                        <li @click="setMode('preview')"><a>Toggle preview</a></li>
                    </ul>
                </div>
                <div id="editors" style="height: 55vh;"></div>
                <div v-if="preview">
                    <hr>
                    <h1 class="title is-4">Preview</h1>
                    <iframe class="box mt-2" style="width: 100;" id="preview" :srcdoc="preview"></iframe>
                </div>
            </div>
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
      preview: null
    }
   },
   mounted() {
    this.editors = monaco.editor.create(document.getElementById('editors'), {
      theme: 'vs-dark'
    });
    this.editorHtml = monaco.editor.createModel("<!--Get started 🌊-->", "html");
    this.editorCss = monaco.editor.createModel("/* Get started 🌊 */", "css");
    this.editors.setModel(this.editorHtml);
    this.editors.onDidChangeModelContent(() => {
        this.setMode('preview');
    });
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
        this.preview = html + `<style>${css}</style>`;
      }
    }
   }
}
</script>
