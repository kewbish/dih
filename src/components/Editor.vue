<template>
    <div class="section">
        <h1 class="title">diveintoht.ml editor</h1>
        <div class="notification is-info" style="height: 63vh;">
            <div id="editor-html" style="height: 55vh;">
            </div>
        </div>
    </div>
</template>

<script>
import * as monaco from 'monaco-editor';
export default {
   mounted() {
    monaco.editor.create(document.getElementById('editor-html'), {
      value: '<!--Get started!🌊-->',
      language: 'html',
      theme: 'vs-dark'
    });
   }
}
</script>
