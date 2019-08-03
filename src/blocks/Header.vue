<template>
  <header class="header">
    <div class="header__wrapper">
      <h1 class="header__title-1">Blockchain Domain Names</h1>
      <h2 class="header__title-2">Buy .zil domains for $10</h2>
      <Input placeholder="Search for a domain"/>
    </div>
  </header>
</template>

<script>
import Input from '../components/Input'

export default {
  name: 'Header',
  components: {
    Input
  }
}
</script>

<style>
.header {
  height: 60vh;
}
.header__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
}
.header__title-1 {
  color: rgba(0, 0, 0, 0.87);
  font-size: 4.25rem;
  font-weight: 800;
  line-height: 1;
}
.header__title-2 {
  font-size: 1.5rem;
}
@media only screen and (max-width: 600px) {
  .header__title-1 {
    font-size: 2.25rem;
  }
  .header__wrapper {
    margin: 40px;
  }
}
</style>
