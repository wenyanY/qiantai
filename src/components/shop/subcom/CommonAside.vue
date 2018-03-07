<template>
   <div class="left-220">
                <ul class="side-img-list">
                 
                    <li v-for="(item, i) in isAside" :key="item.id">
                        <div class="img-box">
                            <label>{{i+1}}</label>
                            <img :src="item.img_url">
                        </div>
                        <div class="txt-box">
                            <router-link :to="{name:'deteil',params:{id:item.id}}">{{item.title}}</router-link>
                            <!-- <a href="/goods/show-98.html"></a> -->
                            <span>{{item.add_time|date}}</span>
                        </div>
                    </li>
                 
                  
                 
                </ul>
            </div>
            <!--/推荐商品-->
</template>
<script>
export default {
//   接收父元素的数据
props:['isAside'],
  // 局部过滤器
       filters: {

           // 日期过滤器         
              date(tplDate) {
              let date = new Date(tplDate);
               return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;     
               
               
               }
      }

}
</script>

