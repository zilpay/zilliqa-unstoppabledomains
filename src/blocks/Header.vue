<template>
  <header class="header">
    <div class="header__wrapper">
      <h1 class="header__title-1">Blockchain Domain Names</h1>
      <h2 class="header__title-2">Buy .zil domains</h2>
      <Input placeholder="Search for a domain"
             v-model="value"
             @submit="domainSubmit"/>

      <Alert class="header__alert header__alert_error"
             v-if="errorMsg"
             :title="errorMsg.title"
             :description="errorMsg.description" />
      
      <Alert class="header__alert header__alert_info"
             v-show="addressesKeys.length > 1"
             :title="value">
        <ul class="alert__addresses"
            v-for="key of addressesKeys"
            :key="key">
          <li class="alert__address">
            {{key}}: {{domainInfo.addresses[key]}}
          </li>
        </ul>
      </Alert>

      <Alert class="header__alert header__alert_buy"
             v-show="isBuyForm"
             :title="'Buy: ' + value">
        <div class="alert__params">
          <h6>Cost:</h6>
          <h6>10.00 ZIL</h6>
        </div>
        <Button class="alert__btn" title="Buy" @submit="register"/>
      </Alert>
    </div>
  </header>
</template>

<script>
import Namicorn from 'namicorn'
import Input from '../components/Input'
import Alert from '../components/Alert'
import Button from '../components/Button'
import ZilPayMixin from '../mixins/zilpay'
import { log } from 'util';

const namicorn = new Namicorn({ blockchain: false });

export default {
  name: 'Header',
  mixins: [ZilPayMixin],
  data() {
    return {
      value: null,
      domainInfo: null,
      errorMsg: null
    };
  },
  components: {
    Input,
    Alert,
    Button
  },
  methods: {
    async domainSubmit() {
      if (!this.value.includes('.zil')) {
        this.errorMsg = {
          title: 'Invalid Domain: ' + this.value,
          description: 'Domains may only contain letters, numbers, and dashes. For example zilliqa.zil'
        };
        return null;
      } else {
        this.errorMsg = null;
      }

      this.$loader();
      this.domainInfo = await namicorn.resolve(
        this.value, 'zil'
      );
      this.$loader();
    },
    async register() {
      this.$loader();
      try {
        const tx = await this.claimZone(this.value);
        console.log(tx);
      } catch (err) {
        //
      }
      this.$loader();
    }
  },
  computed: {
    addressesKeys() {
      if (!this.domainInfo) {
        return [];
      }
  
      return Object.keys(this.domainInfo.addresses);
    },
    isBuyForm() {
      return this.addressesKeys.length === 0 && this.domainInfo;
    }
  }
}
</script>

<style>
.header {
  height: 65vh;
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
.header__alert {
  margin-top: 30px;
  width: 100%;
}
.header__alert_buy {
  text-align: center;
  width: 70%;
}
.alert__btn {
  margin-bottom: 10px;
  width: 200px;
}
.alert__params {
  display: flex;
  justify-content: space-between;
  margin: 0 20px 0 20px;
  font-size: 1.4rem;
}
.header__alert_error {
  background-color: rgba(255, 71, 81,.15);
  box-shadow: 0 0 25px 0 rgba(255, 71, 81,.15);
  color: rgba(255, 71, 81,1);
}
@media only screen and (max-width: 800px) {
  .header__title-1 {
    font-size: 2.25rem;
  }
  .header__wrapper {
    margin: 40px;
  }
  .header__alert_buy {
    width: 100%;
  }
  .alert__btn {
  width: 100px;
}
}
</style>
