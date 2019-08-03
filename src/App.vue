<template>
  <div id="app">
    <NavBar />
    <Header />
    <Info />
    <Faq />
    <Footer />
  </div>
</template>

<script>
import Namicorn from 'namicorn';
import NavBar from './components/NavBar'
import Header from './blocks/Header'
import Info from './blocks/Info'
import Faq from './blocks/Faq'
import Footer from './blocks/Footer'

export default {
  name: 'app',
  components: {
    NavBar,
    Header,
    Info,
    Faq,
    Footer
  },
  data() {
    return {
      namicorn: new Namicorn({ blockchain: false })
    };
  },
  mounted() {
    this.namicorn.resolve('test.zil').then(console.log);
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
</style>
