<template>
    <div>
        <input type="checkbox" id="todo-item" :checked="isDone"/>
        <!--{{}} is a special template syntax in Vue, 
        which lets us print the result of JavaScript expressions defined in our class, 
        inside our template, including values and methods.-->
        <label for ="todo-item"> {{label}} </label>
    </div>
</template>
<script>
  export default {
      props:{
        label:{required:true,type:String},
        done:{default:false,type:Boolean}
      },
      data(){
          return {
              isDone:this.done
          };
      }
  };
</script>
<style>
div{
    text-align:left;
}
</style>