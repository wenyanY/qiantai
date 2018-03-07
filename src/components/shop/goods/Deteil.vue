<template>
  <div>
    <!-- 导航栏 -->
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a>
        <a href="/goods/42/1.html">商品详情</a>

      </div>
    </div>

    <!-- 商品详情 -->
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <!-- 页面左边 -->

          <!-- /页面左边 -->

          <div class="left-925">
            <div class="goods-box clearfix">
              <!--商品图片-->
              <div class="pic-box">

                <div class="magnifier" id="magnifier1">
                  <div class="magnifier-container">
                    <div class="images-cover"></div>
                    <!--当前图片显示容器-->
                    <div class="move-view"></div>
                    <!--跟随鼠标移动的盒子-->
                  </div>
                  <div class="magnifier-assembly">
                    <div class="magnifier-btn">
                      <span class="magnifier-btn-left">&lt;</span>
                      <span class="magnifier-btn-right">&gt;</span>
                    </div>
                    <!--按钮组-->
                    <div class="magnifier-line">
                      <ul class="clearfix animation03">
                        <li v-for="item in top.imglist" :key="item.id">
                          <div class="small-img">
                            <img :src="item.original_path" />
                          </div>
                        </li>
                        
                      </ul>
                    </div>
                    <!--缩略图-->
                  </div>
                  <div class="magnifier-view"></div>
                  <!--经过放大的图片显示容器-->
                </div>

              </div>
              <!--/商品图片-->

              <!--商品信息-->
              <div class="goods-spec">
                <h1>{{top.goodsinfo.title}}</h1>
                <p class="subtitle">{{top.goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{top.goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{top.goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em class="price" id="commoditySellPrice">¥{{top.goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>

                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <el-input-number size="mini" v-model="num"></el-input-number>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{top.goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div class="btn-buy" id="buyButton">
                        <button class="buy" onclick="cartAdd(this,'/',1,'/shopping.html');">立即购买</button>
                        <button class="add" onclick="cartAdd(this,'/',0,'/cart.html');">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>

              </div>
              <!--/商品信息-->
            </div>

            <div id="goodsTabs" class="goods-tab bg-wrap">
              <!--选项卡-->
             <el-tabs type="border-card">
                  <el-tab-pane label="图文信息">
                    <!--选项内容-->
                    <div class="tab-content entry" style="display:block;">
                    <p v-html='top.goodsinfo.content'></p>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="商品评论">
                    <commtent :id="id"></commtent>
                    
                     </el-tab-pane>
            </el-tabs>
              <!--/选项卡-->

              
        

             

            </div>

          </div>
          <!--/页面左边-->

          <!--页面右边-->

          <common-aside :isAside="top.hotgoodslist"></common-aside>
          <!--/页面右边-->
        </div>\
      </div>
    </div>
  </div>
</template>
<script>
import CommonAside from "../subcom/CommonAside";
import content from "../subcom/CommonCommten";
// 插入放大镜
import "@/lib/imgzoom/css/magnifier.css";
import "@/lib/imgzoom/js/magnifier.js";
import $ from "jquery";
export default {
  data() {
    return {
      id: this.$route.params.id,
      
      num: 1,
      top: {
        goodsinfo: {},
        imglist: [],
        hotgoodslist: []
      }
    };
  },
  // 右边组件
  components: {
    commonAside: CommonAside,
    commtent:content
  },
  // 请求数据
  methods: {
    getgoodsinfo() {
      this.$http.get(this.$api.goodsDetail + this.id).then(res => {
        // console.log(res);
        if (res.data.status == 0) {
          this.top = res.data.message;
          // console.log(this.top);y
        }
      });
    }
  },
  mounted() {
    var magnifierConfig = {
      magnifier: "#magnifier1", //最外层的大容器
      width: 360, //承载容器宽
      height: 360, //承载容器高
      moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
      zoom: 5 //缩放比例
    };
    setTimeout(() => {
        var _magnifier = $().imgzoon(magnifierConfig);
    }, 300);

  

    /*magnifier的内置函数调用*/
    /*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
	*/
    // });
  },

  created() {
    // console.log(this.ids);
    this.getgoodsinfo();
  },
  // 监听url的id有没变动，重新获取新的id数据
  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.getgoodsinfo();
    },
    top(){
        var magnifierConfig = {
      magnifier: "#magnifier1", //最外层的大容器
      width: 360, //承载容器宽
      height: 360, //承载容器高
      moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
      zoom: 5 //缩放比例
    };
    setTimeout(() => {
        var _magnifier = $().imgzoon(magnifierConfig);
    }, 300);

    }
  }
};
</script>
<style  scoped>

</style>


