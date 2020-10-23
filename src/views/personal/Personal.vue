<template>
  <div class="container">
    <div class="avatar">
      <div class="iconfont icon-header">
        &#xe603;
      </div>
      <p>立即登录</p>
    </div>
    <div class="my-order-tab">
      <div>
        <span class="iconfont icon-f">&#xe8ae;</span>
        电影订单
      </div>
      <div>
        <span class="iconfont icon-c">&#xe61a;</span>
        商品订单
      </div>
    </div>
    <br/>
    <div class="my-order-down">
      <span class="iconfont icon-maiquan">&#xe623;</span>
      <p>卖座券</p>
      <span class="iconfont icon-in">&#xe605;</span>
    </div>
    <div class="my-order-down">
      <span class="iconfont icon-hong">&#xe644;</span>
      <p>组合红包</p>
      <span class="iconfont icon-in">&#xe605;</span>
    </div>
    <div class="my-order-down">
      <span class="iconfont icon-yu">&#xe6b7;</span>
      <p>余额</p>
      <span class="iconfont icon-in">&#xe605;</span>
    </div>
    <div class="my-order-down">
      <span class="iconfont icon-she">&#xe722;</span>
      <p>设置</p>
      <span class="iconfont icon-in">&#xe605;</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"personal",
    data() {
        return {
        Show: true
        }
    },

}
</script>

<style lang="scss" scoped>
.container{
  background-color: #f4f4f4;
  height: 100vh;
  // background-image:#f4f4f4;
  // height: 1000px;
}
  .avatar{
    box-sizing: border-box;
    background-image: url('../../assets/personal2.jpg') ;
    height: 11rem;
    display: flex;
    align-items:center;
    padding-left: 2rem;
    .icon-header{
      height: 4rem;
      width: 4rem;
      font-size: 3rem;
      text-align: center;
      border: 2px solid white;
      border-radius: 2rem;
      background-color: #eee;
      margin-right: 1rem;
    }
    p{
      font-size: 1.2rem;
    }
  }
  .my-order-tab{
    background-color: #fff;
    display: flex;
    align-items:center;
    text-align: center;
    height: 5rem;
    div{
       flex: 1;
       display: flex;
       flex-direction: column;
       text-align: center;
       .icon-f{
         font-size: 2rem;
         color: rgb(255, 200, 47);
        }
        .icon-c{
         font-size: 2rem;
         color: rgb(198, 218, 92);
        }
        font-size: 0.8rem;
        color: rgb(147, 147, 147);
    }
    
  }
  .my-order-down{
    background-color: #fff;
    display: flex;
    height: 3.5rem;
    align-items:center;
    position: relative;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    .icon-maiquan{
      font-size: 1.5rem;
      margin: 0 0.5rem;
      color: rgb(224, 97, 58);
    }
    .icon-hong{
      font-size: 1.5rem;
      margin: 0 0.5rem;
      color: rgb(196, 173, 128);
      
    }
    .icon-yu{
      font-size: 1.5rem;
      margin: 0 0.5rem;
      color: rgb(247, 196, 109);
    }
    .icon-she{
      font-size: 1.5rem;
      margin: 0 0.5rem;
      color: rgb(210, 222, 143);
    }
    .icon-in{
      position: absolute;
      right: 1rem;
      color: #ccc;
      justify-content:auto;
    }
  }

</style>
