<template>
    <div class="header">
        城市选择
        <router-link :to="citybacknew">
            <div class="iconfont header-icon">&#xe749;</div>
        </router-link>
        
    </div>
</template>

<script>
export default {
    name:'CityHeader',
    computed: {
      citybacknew() {
        var newaddress = this.$store.state.detailBack
        return newaddress
      }
    },
}
</script>

<style lang="scss" scoped>
    .header{
        position: relative;
        overflow: hidden;
        height: 2.7rem; 
        line-height: 2.7rem; 
        text-align: center;
        color: #fff;
        background: rgb(140, 197, 243);
        font-size: 1rem;
        .header-icon{
            position: absolute;
            top: 0;
            left: 0;
            width: 2rem;
            text-align: center;
            font-size: 1.8rem;
            color: #fff;
        }
    }
</style>
