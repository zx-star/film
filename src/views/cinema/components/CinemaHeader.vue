<template>
  <div class="header">
   <div class="header-left">
     <div class="iconfont back-icon">&#xe675;</div>
   </div>
   <div class="header-input">
     
     <span class="iconfont">&#xe650;</span>
     <!-- 输入影院名称 -->
     <input type="text" class="really-input" placeholder="输入影院名称">
     </div>
     <router-link to='/City'>
        <div class="header-right">
          {{this.$store.state.cityName}}
          <span class="iconfont arrow-icon">&#xe649;</span>
        </div>
     </router-link>
  </div>
</template>

<script>


export default {
  name:"CinemaHeader",
  data() {
    return {
      datalist:[],
    }
  },
  components: {

  },
  mounted(){
    //   this.getdata()     
    },
  methods: {
    // getdata () {
    //   axios({
    //           url:"https://m.maizuo.com/gateway?cityId=350300&ticketFlag=1&k=7050966",
    //           headers:{
    //               'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785"}',
    //               'X-Host': 'mall.film-ticket.cinema.list'
    //           }
    //       }).then(res=>{
    //           console.log(res.data)
    //           this.datalist=res.data.data.cinemas
    //           console.log(this.datalist)
    //           // this.datalist=[...this.datalist,...res.data.data.films];
    //           // this.total = res. data.data.total
    //       })
    //  }
}
}

</script>

<style lang="scss" scoped>
   .header{
        display:flex;
        height:3.5rem;
        top:0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        line-height:2.68rem;
        padding: 0 0.5rem;
        margin-top: 0.2rem;
        background: #fff;
        align-items: center;
        border-bottom: 1px solid #f4f4f4;
        color:#fff;
        background-color: rgb(241, 145, 20);
        .header-left{
            // width: 1rem;
            min-width: 2rem;
        }
        .back-icon{
            text-align: center;
            font-size:1rem;
            color: white;
        }
        .header-input{
            flex-grow:1;
            height:2.2rem;
            line-height: 2.2rem;
            padding-left: .4rem;
            margin: 0 0.5rem;
            border: 0;
            background-color: white;
            border-radius: 1rem;
            color:#e2e2e2;
            cursor: pointer;
            position: relative;
            .really-input{
              height: 2.2rem;
              width: 80%;
              // line-height: 2rem;
              border: 0;
              border-top-right-radius: 1rem;
              border-bottom-right-radius: 1rem;
              margin-left: 0.2rem;
              position: absolute;
              top: 0;
              outline:none;
              // color:#e2e2e2;
            }
        }
        .header-right{  
            min-width :1.2rem;
            padding: 0 .1rem;
            float :right;
            text-align :center;
            color: white;
        }
    }
      .arrow-icon{
            margin-left:-.04rem;
            font-size:.24rem;
        }
</style>
