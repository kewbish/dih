<template>
    <div class="section">
        <h1 class="title">diveintoht.ml editor</h1>
        <div class="box">
            <div id="editor-html">
            </div>
        </div>
    </div>
</template>

<script>
import * as monaco from 'monaco-editor'

monaco.editor.create(document.getElementById('editor-html'), {
  value: '<!--Get started!🌊-->',
  language: 'html'
});

export default {
    
}
</script>
