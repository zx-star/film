<template>
    <nav>
        <!-- 声明式导航 -->
        <ul>
            
                <router-link to="/film" tag="li" active-class="myactive">
                    <span class="iconfont icon-all">&#xe6ee;</span>
                    <span>电影</span>
                </router-link>            
                <router-link to="/cinema" tag="li" active-class="myactive">
                    <span class="iconfont icon-all">&#xe8c0;</span>
                    影院
                </router-link>
                <router-link to="/personal" tag="li" active-class="myactive">
                    <span class="iconfont icon-all">&#xe603;</span>
                    我的
                </router-link>
            
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    .myactive{
        color: red;
    }
    .icon-all{
        font-size: 28px;
    }
    nav{
        box-sizing: border-box;
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 50px;
        background: white;
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
                display: flex;
                flex-direction:column;
                justify-content:center;
                font-size: 12px;
                overflow: hidden;
            }
            
        }
    }
</style>