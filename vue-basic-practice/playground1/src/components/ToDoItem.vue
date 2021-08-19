<template>
    <div class="custom-checkbox">
        <input type="checkbox" class="checkbox" :id="id" :checked="isDone"/>
        <!--{{}} is a special template syntax in Vue, 
        which lets us print the result of JavaScript expressions defined in our class, 
        inside our template, including values and methods.-->
        <label for ="id" class="checkbox-label"> {{label}} </label>
    </div>
</template>
<script>
  import uniqueId from 'lodash.uniqueid';
  export default {
      props:{
        label:{required:true,type:String},
        done:{default:false,type:Boolean},
        id:{required:true,type:String}
      },
      data(){
          return {
              isDone:this.done,
          };
      }
  };
</script>
<style scoped>
div{
    text-align:left;
}

</style>