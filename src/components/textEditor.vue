<template>
  <div class="text-editor">
    <div class="text-editor__menu">
      <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
        <div>
          <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">bold</button>
          <button :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
            italic
          </button>
          <button :class="{ 'is-active': isActive.code() }" @click="commands.code">code</button>
          <button @click="test(commands)">test2</button>
        </div>
      </editor-menu-bar>
    </div>
    <div class="text-editor__field">
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions';

export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  props: {
    text: {
      type: String,
      default: 'biography goes here'
    }
  },
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new BulletList(),
        new OrderedList(),
        new ListItem(),
        new TodoItem(),
        new TodoList(),
        new Bold(),
        new Code(),
        new Italic(),
        new Link(),
        new Strike(),
        new Underline(),
        new History()
      ],
      content: `<p>${this.text}</p>`
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    test(arg) {
      console.log(arg);
    }
  }
};
</script>

<style>
@import '../style/text-editor.scss';
</style>
