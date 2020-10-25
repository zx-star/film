<template>
  <div>
    <section>
      <router-view></router-view>
    </section>
    <tabbar v-show="$store.state.isTabberShow"></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      Show: true
    }
  },
  components: {
    Tabbar,
  },
  computed:{
        ...mapState(["isTabbarShow"]) //ES6展开合并运算符 (去掉大括号)
    }
}
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }

    html{
        height: 100%;
    }
    li{
        list-style: none;
    }
</style>
