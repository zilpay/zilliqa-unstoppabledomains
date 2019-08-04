<template>
  <nav class="nav"
      :class="{ 'nav_fixed': isScroll }">
    <div class="nav__left-item">
      Zilliqa Naming Service
    </div>
    <div class="nav__right-item"
         v-if="account">
      {{account.bech32}}
    </div>
    <Button class="nav__right-item_btn"
            v-if="!account"
            :title="btnTitle"
            @submit="connect"/>
  </nav>
</template>

<script>
import ZilPayMixin from '../mixins/zilpay'
import Button from './Button'

export default {
  name: 'NavBar',
  mixins: [ZilPayMixin],
  components: {
    Button
  },
  data() {
    return {
      isScroll: false,
      btnTitle: 'Connect ZilPay'
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
    },
    connect() {
      this.connectToZilPay();
    }
  },
  mounted() {
    window.onscroll = this.scroll;

    setTimeout(() => {
      this.observableAccount();
    }, 2500);
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
.nav__right-item_btn {
  height: 40px;
  margin-top: 30px;
  margin-right: 10px;
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
