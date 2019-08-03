<template>
  <nav class="nav"
      :class="{ 'nav_fixed': isScroll }">
    <div class="nav__left-item">
      Zilliqa Naming Service
    </div>
    <div class="nav__right-item">
      zil17rt8nhvu4kylh9q75nnks74fqqv7zq36jyy3vu
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isScroll: false
    };
  },
  methods: {
    scroll() {
      const { scrollTop } = document.body;
  
      if (scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    }
  },
  mounted() {
    window.onscroll = this.scroll;
  }
}
</script>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease;

  height: 108px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(20, 42, 128, 0.14);
  vertical-align: middle;
}
.nav_fixed {
  height: 130px !important;
  position: fixed;
  top: 0;
  z-index: 99;
}
.nav__left-item {
  display: inline-block;
  font-size: 25px;
  margin-top: 30px;
  margin-left: 10px;
  font-weight: 700;
  text-align: left;
}
.nav__right-item {
  display: inline-block;
  margin-top: 40px;
  margin-right: 10px;
  text-align: right;
}
@media only screen and (max-width: 700px) {
  .nav {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 150px;
  }
  .nav__right-item {
    margin-bottom: 30px;
  }
}
</style>
