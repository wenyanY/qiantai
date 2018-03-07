<template>
  <div>
    <div class="section" v-for='item  in addList' :key="item.level1cateid">

      <!--子类-->
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>

          <a href="/goods/43.html" v-for="subitem in item.level2catelist" :key="subitem.subcateid">{{subitem.subcatetitle}}</a>


          <a href="/goods/40.html">更多
            <i>+</i>
          </a>
        </p>
      </div>
      <!--/子类-->
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">

            <li v-for="itemdata in item.datas" :key="itemdata.artID">
              <!-- <a href="/goods/show-91.html"> -->
              <router-link :to="{name:'deteil',params: {id: itemdata.artID}}">
                <div class="img-box">
                  <img :src="itemdata.img_url">
                </div>
                <div class="info">
                  <h3>{{itemdata.artTile}}</h3>
                  <p class="price">
                    <b>¥{{itemdata.sell_price}}</b>元</p>
                  <p>
                    <strong>库存 {{itemdata.stock_quantity}}</strong>
                    <span>市场价：
                      <s>￥{{itemdata.market_price}}</s>
                    </span>
                  </p>
                </div>
              <!-- </a> -->
              </router-link>
            </li>

          

           
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addList:{}
    };
  },
  methods: {
    getgoodsgroup() {
      this.$http.get(this.$api.goodsContent).then(res => {
        console.log(res);
        if (res.data.status==0) {
          this.addList=res.data.message;
        }
      });
    }
  },
  created() {
    this.getgoodsgroup();
  }
};
</script>
