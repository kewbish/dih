<template>
    <div class="section hero is-dark">
        <h1 class="title">diveintoht.ml editor</h1>
        <div class="hero-body px-0 py-3">
            <div class="box" style="height: 100%;">
                <div class="tabs">
                    <ul>
                        <li @click="switchModel('html')" class="is-active"><a>HTML</a></li>
                        <li @click="switchModel('css')"><a>CSS</a></li>
                        <li @click="switchModel('preview')"><a>Preview</a></li>
                    </ul>
                </div>
                <div id="editors" style="height: 55vh;"></div>
                <hr v-if="preview">
                <h1 class="title is-4" v-if="preview">Preview</h1>
                <div class="box mt-2" id="preview" v-if="preview" v-html="preview"></div>
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
   },
   methods: {
    switchModel(model) {
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
