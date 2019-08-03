<template>
  <div class="faq">
    <div class="faq__wrapper">
      <h1 class="faq__title">FAQ</h1>
      <vs-collapse>
        <vs-collapse-item v-for="item of collapseItems"
                          :key="item.header">
          <div class="collapse__header" slot="header">{{item.header}}</div>
          {{item.description}}
        </vs-collapse-item>
      </vs-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      collapseItems: [
        {
          header: 'Does Unstoppable Domains provide you with a wallet?',
          description: 'Yes, but only support only ZilPay wallet!!!'
        },
        {
          header: 'Will I be able to search for and find .zil websites on Google or other search engines?',
          description: "Not initially. We don't expect that major search engines will index .zil websites in the near future. For now, you will be able to search for them at unstoppabledomains.com as well as on partner applications that integrate our search bar."
        },
        {
          header: 'Are blockchain domains part of ICANN/ traditional DNS?',
          description: "No. Blockchain domains are what’s called alternate roots. They are not part of the current DNS"
        },
        {
          header: 'Will there be some sort of ‘whois’ record with my personal information associated to my domain?',
          description: "Not by default. Sharing ‘whois’ information is opt in i.e. something that you can choose to do if you want. Otherwise, your identity will not be publicly known"
        },
        {
          header: 'How do trademarks work with blockchain domains? ',
          description: "Trademark holders with proof of ownership can apply to claim ownership of trademarked names. If a trademark name has already been sold, then it will be refunded. Note - this process ends once domains have been distributed. Unstoppable Domains does not have the ability to move a domain once distribution has occurred."
        },
        {
          header: 'What is .zil?',
          description: "A new blockchain domain extension launched on the Zilliqa blockchain. It was specifically designed so that .zil domains can work to enable payments in any cryptocurrency"
        },
        {
          header: 'How do payments work with my .zil?',
          description: "Add your Zilliqa addresses to your .zil domain via ZilPay wallet zilpay.xyz. When someone types yourname.zil into a wallet, the wallet looks up that domain on the blockchain, finds the appropriate address, and sends"
        },
        {
          header: 'What makes a domain premium or reserved for auction?',
          description: "Domains are evaluated based on their perceived popularity. The most common words, the shortest words, and the most valuable .com domains are all likely to be on this category"
        },
        {
          header: 'What is the relationship between Zilliqa and Unstoppable Domains?',
          description: "Unstoppable Domains and ZilPay is a grantee of the Zilliqa Foundation. We were chosen by the Zilliqa Foundation to build .zil"
        }
      ]
    };
  }
}
</script>

<style>
.faq__wrapper {
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vs-icon {
  display: none;
}
.collapse__header {
  font-size: 20px;
}
.shadow .open-item {
  transform: scale(1.01);
  box-shadow: 0px 2px 15px 0px rgba(0,0,0,.05);
  margin-top: 5px;
  border-bottom: 0px solid rgba(0,0,0,.0);
  margin-bottom: 10px;
  border-radius: 6px;
}
.vs-collapse-item--icon-header {
  transform: translate(-50%, -50%) rotate(180deg);
}
.con-content-item { opacity: 1; }
.margin .vs-collapse-item {
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 2px 15px 0px rgba(0,0,0,.05);
    border-radius: 5px;
    border-bottom: 0px solid rgba(0,0,0,.0);
}
.open-item .con-content-item {
  opacity: 1;
}
.vs-collapse-item--icon-header {
  transform: translate(-50%, -50%) rotate(180deg);
}
.border {
  border: 1px solid rgba(0,0,0,.1);
  padding: 0px;
}
.vs-collapse-item {
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.open-item .con-content-item {
  opacity: 1;
} 
.vs-collapse-item--icon-header {
  transform: translate(-50%, -50%) rotate(180deg);
}
.vs-collapse {
  transition: all .3s ease;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px;
}
.open-item .con-content--item {
  opacity: 1;
}
.vs-collapse-item--icon-header {
  transform: translate(-50%, -50%) rotate(180deg);
}
.open-item .con-content--item {
    opacity: 1;
  }
.disabledx {
  opacity: .5;
  cursor: default;
  pointer-events: none;
  z-index: 999;
}

.vs-collapse-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  transition: all .25s ease;
}
.vs-collapse-item:last-child {
  border-bottom: 0px solid rgba(0,0,0,.0) !important;
}

.vs-collapse-item--header {
  display: block;
  padding: 10px;
  position: relative;
  transition: all .25s ease;
}

.vs-collapse-item--icon-header {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  transition: all .25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}

.vs-collapse-item--content {
  overflow: hidden;
  transition: all .2s ease;
}
.con-content--item {
  padding: 10px;
  padding-top: 0px;
  font-size: .85rem;
  opacity: .2;
  transition: all .25s ease;
}

@media only screen and (max-width: 1000px) {
  .faq__wrapper {
    margin: 2px;
  }
  .collapse__header {
    font-size: 16px;
  }
}
</style>
