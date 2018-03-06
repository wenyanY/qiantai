<template>
  <div>
    <app-header></app-header>
      <router-view></router-view>
    <app-footer></app-footer>
  

  </div>
</template>
<script>
import Header from "./subcom/Header";
import Footer from "./subcom/Footer";
export default {
 components:{
   appHeader:Header,
   appFooter:Footer
 }
}
</script>

