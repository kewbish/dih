<template>
    <div class="section hero is-dark">
        <h1 class="title">diveintoht.ml editor</h1>
        <div class="hero-body px-0 py-3">
            <div class="box" style="height: 100%;">
                <div class="tabs">
                    <ul>
                        <li @click="switchModel('html')" class="is-active"><a>HTML</a></li>
                        <li @click="switchModel('css')"><a>CSS</a></li>
                    </ul>
                </div>
                <div id="editors" style="height: 55vh;">
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
      editorCss: null
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
    }
   }
}
</script>
