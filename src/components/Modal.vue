<template>
  <div class="modal"
       v-show="isShow">
    <div class="modal_content">
      <span class="modal__close"
            @click="hide">&times;</span>
      <div class="modal__header">{{title}}</div>
      <div class="modal__body"><slot /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    hide() {
      this.isShow = false;
    }
  },
  watch: {
    show(newVal) {
      this.isShow = newVal;
    }
  },
  mounted() {
    this.isShow = this.show;
  }
}
</script>

<style>
.modal {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  transition: all .23s ease .1s;
}
.modal__body {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.modal__close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.modal_content {
  padding: 15px;
  position: absolute;
  top: 10vh;
  background-color: rgb(74, 81, 83);
  max-width: calc(100% - 30px);
  max-height: calc(100% - 30px);
  border-radius: 6px;
  box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);
}
.modal__body {
  margin-top: 20px;
}
.modal__header {
  overflow: hidden;
  font-size: 25px;
  color: #fff;
}
.modal__close:hover,
.modal__close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
