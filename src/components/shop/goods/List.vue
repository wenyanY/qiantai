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
                                <h5>{{item.title}}</h5>
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
            <div class="left-705">
                <div class="banner-img">
                    <div id="focus-box" class="focus-box">
                        <ul class="slides">
                            
                        </ul>    
                    </div>       
                </div>
            </div>
            <!--/幻灯片-->
             
            <!--推荐商品-->
            <common-aside></common-aside>
            <!--推荐商品-->
           
        </div>
    </div>
</div>

  </div>
</template>
<script>

import CommonAside from "../subcom/CommonAside";

       export default {
         data(){
            return{
              top:{},
                }  
           },
            components:{
               commonAside:CommonAside
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
</style>






