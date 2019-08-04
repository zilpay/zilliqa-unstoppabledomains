<template>
  <footer class="footer">
    <div class="footer__warpper">
      <ul class="footer__items">
        <li class="footer__item"
            v-for="item of items"
            :key="item.title">
          <a :href="item.href" target="_blanck">
            {{item.title}}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      items: [
        {
          title: 'github',
          href: 'https://github.com/zilpay'
        },
        {
          title: 'ZilPay',
          href: 'https://zilpay.xyz/'
        },
        {
          title: 'unstoppabledomains',
          href: 'https://unstoppabledomains.com'
        },
        {
          title: 'contract',
          href: 'https://viewblock.io/zilliqa/address/zil1jcgu2wlx6xejqk9jw3aaankw6lsjzeunx2j0jz?tab=code'
        }
      ]
    };
  }
}
</script>

<style>
.footer {
  height: 30vh;
  background-color: rgb(223, 223, 223);
}
.footer__warpper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer__items {
  display: flex;
  margin-top: 10vh;
}
.footer__item {
  margin-left: 5vh;
}
.footer__donations {
  margin-top: 3vh;
}
@media only screen and (max-width: 700px) {
  .footer__items {
    flex-direction: column;
    text-align: center;
  }
}
</style>
