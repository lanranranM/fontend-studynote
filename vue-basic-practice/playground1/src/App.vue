<template>
  <img alt="Clounix logo" src="./assets/clounix_logo.png">
  <h1>Welcome to Clounix</h1>
  <div id ="app">
    <h2>Melody To-do List</h2>
    <ul>
      <li><to-do-item label="sleep enough"></to-do-item></li>
      <li><to-do-item label="build up login page" :done="false"></to-do-item></li>
      <li><to-do-item label="be happy" :done="true"></to-do-item></li>
      <li><to-do-item label="feed why" :done="false"></to-do-item></li>
    </ul>  
  </div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//引入组件
//import HelloWorld from './components/HelloWorld.vue';
import ToDoItem from './components/ToDoItem.vue';

//注册组件
export default{
  name:'App',
  components:{
    ToDoItem,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul{
  margin:0 80vh;
  display:flex;
  flex-direction:column;
  justify-content: center;
}
</style>
