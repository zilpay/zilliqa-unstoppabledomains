<template>
  <div class="alert">
    <h4 class="alert__title">{{title}}</h4>
    <p class="alert__description"
       v-if="description">
      {{description}}
    </p>
    <slot class="alert__description"/>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    title: String,
    description: String
  }
}
</script>

<style>
.alert {
  background: rgba(30, 30, 30, .15);
  -webkit-box-shadow: 0 0 25px 0 rgba(var(--vs-dark),.15);
  box-shadow: 0 0 25px 0 rgba(30, 30, 30, .15);
  color: rgba(var(--vs-dark),1);
  border-radius: 6px;
  text-align: left;
}
.alert__title {
  box-shadow: 0 6px 15px -7px rgba(30, 30, 30, .4);
  font-size: 1.3rem;
  font-weight: 700;
  padding: 8px 10px;
}
.alert__description {
  padding: 10px;
  overflow: hidden;
  position: relative;
}
</style>
