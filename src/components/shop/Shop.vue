<template>
  <div>
    <app-header></app-header>
    <app-footer></app-footer>
    <router-view></router-view>

  </div>
</template>
<script>
import Header from "./subcom/Header";
import Footer from "./subcom/Footer";
export default {
 components:{
   appHeader:Header,
   addFoter:Footer
 }
}
</script>

