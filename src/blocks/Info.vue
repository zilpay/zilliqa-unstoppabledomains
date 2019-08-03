<template>
  <div class="info">
    <div class="info__wrapper">
      <h1 class="info__title">
        Replace cryptocurrency addresses
        with a human readable name
      </h1>
      <div class="info__illustration-1">
        <img src="/img/illustration-1.png" class="info__illustration">
      </div>
      <div class="info__illustration-2">
        <img src="/img/illustration-2.png" class="info__illustration">
      </div>
      <h1 class="info__title">
        Launch Uncensorable Websites
      </h1>
      <div class="info__illustration-3">
        <img src="/img/illustration-3.png" class="info__illustration">
      </div>
      <div class="info__illustration-4">
        <img src="/img/illustration-4.png" class="info__illustration">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style>
.info {
  background-color: #e9e9e9;
}
.info__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
}
.info__title {
  color: #4C47F7;
  margin: 24px 0px;
  padding: 40px 16px;
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  line-height: 44px;
}
.info__illustration {
  max-height: 400px;
}
.info__illustration-2,
.info__illustration-4 {
  margin-top: 70px;
}
.info__illustration-4 {
  margin-bottom: 50px;
}
</style>
