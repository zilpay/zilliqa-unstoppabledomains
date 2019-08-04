<template>
  <button class="button"
          :style="style"
          @click="$emit('submit')">
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
    bg: {
      type: String,
      default: '#444aee'
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    style() {
      return {
        'background-color': this.bg,
        'color': this.color
      };
    }
  }
}
</script>

<style>
.button {
  cursor: pointer;
  transition: all .2s ease;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  min-width: 100px;
  min-height: 50px;
  outline: none;
}
.button:hover {
  box-shadow: 0 8px 25px -8px rgba(31, 116, 255, 1);
}
</style>
