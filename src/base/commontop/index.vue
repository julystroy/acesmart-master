<template>
  <div class="top">
    <br>
    <div class="row">
      <div class="col-1 offset-2">
          <div class="qian"></div>
      </div>
      <div class="text-center">{{title}}</div>

      <div class="col-1 offset-3">
           <div class="shen"></div>
      </div>

    </div>
    <br>


  </div>
</template>


<script>


export default {
 data(){
   return{
     title:"today"
   }
 }
}
</script>
<style lang="less">
.top{
  padding-left: 20px;
  padding-right: 20px
}
  .shen{
                background-color:#02a1b2;
                width: 20px;
                height: 20px;
                margin-right: 5px;
            }
   .qian{
                  background-color:#88d4e2;
                  width: 20px;
                  height: 20px;

                 }
    .offset-2{margin-left:30%}
    .offset-3{margin-left:10%}
    .col-1{
              -webkit-box-flex:0;
              -ms-flex:0 0 8.333333%;flex:0 0 8.333333%;
              max-width:8.333333%;

          }
    .text-center{text-align:center!important;
                 margin-left:10%}
    .row{
              display:-webkit-box;
              display:-ms-flexbox;
              display:flex;
              -ms-flex-wrap:wrap;
              flex-wrap:wrap;
              margin-right:-15px;
              margin-left:-15px;
              margin-top: 10px
           }
</style>
