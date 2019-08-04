<template>
  <div id="app">
    <NavBar />
    <Header />
    <Info />
    <Faq />
    <Footer />

    <Modal title="Install ZilPay" :show="isNotZilPay">
      <img src="/img/home.png">
      <a class="btn-link btn-link_mt-3"
         href="https://zilpay.xyz/"
         target="_blank">Install ZilPay</a>
    </Modal>
    <Modal title="Please unlock ZilPay" :show="isLockZilPay">
      <img src="/img/lock.png">
    </Modal>
    <Modal title="Please change network" :show="isWrongNet">
      <img src="/img/network.png">
    </Modal>
  </div>
</template>

<script>
import Namicorn from 'namicorn';
import NavBar from './components/NavBar'
import Header from './blocks/Header'
import Info from './blocks/Info'
import Faq from './blocks/Faq'
import Footer from './blocks/Footer'
import Modal from './components/Modal'
import ZilPayMixin from './mixins/zilpay'

export default {
  name: 'app',
  mixins: [ZilPayMixin],
  components: {
    NavBar,
    Header,
    Info,
    Faq,
    Footer,
    Modal
  },
  data() {
    return {
      isLockZilPay: false,
      isNotZilPay: false,
      isWrongNet: false
    };
  },
  methods: {
    initZilPay() {
      const event = this.isZilPay();

      switch (event) {
        case 0:
          this.isNotZilPay = true;
          break;
        case 1:
          this.isLockZilPay = true;
          break;
        case 3:
          this.isWrongNet = true;
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    window.onload = this.initZilPay;
    this.$loader();
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.btn-link {
  -webkit-box-shadow: 0 3px 3px 0 rgba(0,0,0,.1);
  box-shadow: 0 3px 3px 0 rgba(0,0,0,.1);
  font-weight: 700;
  background-color: #1d809f;
  border-color: #1d809f;
  color: #fff;
  padding: 1.25rem 2.5rem;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-link_mt-3 {
  margin-top: 30px;
}
</style>
