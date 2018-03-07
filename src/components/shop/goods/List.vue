<template>
  <div>
    <div class="section">
        <div class="location">
            <span>当前位置：</span>
            <a href="/index.html">首页</a> &gt;
            <a href="/goods.html">购物商城</a>
        </div>
   </div>

<div class="section">
    <div class="wrapper">
        <div class="wrap-box">
            <!--类别菜单-->
            <div class="left-220" style="margin:0;">
                <div class="banner-nav">
                    <ul>
                    <!--此处声明下面可重复循环-->
                     
                         <li v-for="item in top.catelist" :key="item.id">
                            <h3>
                                <i class="iconfont icon-arrow-right"></i>
                                <h4>{{item.title}}</h4>
                                <span v-for="sonitem in item.subcates" :key="sonitem.id">{{sonitem.title}}&nbsp;</span>
               
                            </h3>
                            <div class="item-box">
                                <!--如有三级分类，此处可循环-->
                                <dl>
                                    <dt><a href="/goods/40.html">{{item.title}}</a></dt>
                                    <dd>
                                         
                                        <a href="/goods/43.html" v-for="sonitem in item.subcates" :key="sonitem.id">{{sonitem.title}}</a>&nbsp;
                                    
                                         
                                    </dd>
                                </dl>
                            </div>
                        </li>
                     
                      
                     
                    </ul>
                </div>
            </div>
            <!--/类别菜单-->
             
            <!--幻灯片-->
            <!-- 轮播图 -->
            <div class="left-705">
                <div class="banner-img"> 
                    <el-carousel height="343px" :autoplay='a' >
                        <el-carousel-item v-for="item in top.sliderlist" :key="item.id" >
                          <img :src="item.img_url" alt="" style="height:100%">
                        </el-carousel-item>
                      
                      </el-carousel>
                </div>
            </div> 
            <!--/幻灯片-->
             
            <!--推荐商品-->
            <common-aside :isAside="top.toplist"></common-aside>
            <!--推荐商品-->

          

           
        </div>
    </div>
</div>
  <!-- 商品首页按照分类分组 -->
            <list-main></list-main>
  </div>
</template>
<script>

import CommonAside from "../subcom/CommonAside";
import ListMain from "../subcom/ListMain";

       export default {

         data(){
            return{
              top:{},
              a:true
                }  
           },
          //  右侧子组件
            components:{
               commonAside:CommonAside,
               listMain:ListMain
              },
            methods:{
              // 获取数据
              getGoodsTop(){
                this.$http.get(this.$api.goodsTop).then((res)=>{
                  console.log(res);
                  if (res.data.status==0) {
                    this.top=res.data.message;
                    // console.log(this.top);
                    
                  }
                })
              }
            },
            created(){
            this.getGoodsTop()
           }

         
  
}
</script>
<style lang="less" scoped>
.item-box{
  background: rgba(0,0 ,0,.5);
}
.el-carousel__container{
height: 343px;
}
 
 
.el-carousel__item h3 {
color: #475669;
font-size: 18px;
opacity: 0.75;
/* 只需要将line-height修改成50px，文字就自动定位到下面了 */
line-height: 50px;
margin: 0;
}

</style>






