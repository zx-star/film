<template>
  <div>
      <ul>
          <router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>
          <router-link to="/film/comingsoon" tag="li" active-class="active">即将上演</router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name:"FilmHeader",
  components: {
   
  },
}
</script>

<style lang="scss" scoped>
    ul{
        display: flex;
        justify-content:space-around;
        li{
            height: 3rem;
            line-height: 3rem;
            text-align: center;
            background: white;
        }
    }
    .active{
        color: rgb(248, 90, 17);
        border-bottom: 2px solid  rgb(243, 117, 59);
    }
</style>
