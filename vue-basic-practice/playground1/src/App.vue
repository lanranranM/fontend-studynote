<template>
  <img alt="Clounix logo" src="./assets/clounix_logo.png">
  <body>
  <h1>Welcome to Clounix</h1>
  <div id ="app">
    <h2>Melody To-do List</h2>
    <ul>
      <li v-for="i in ToDoItem" :key="i.id"><to-do-item :label="i.label"> :done="i.done" :id="i.id"></to-do-item></li>
    </ul>
    <to-do-form @todo-added="addToDo"></to-do-form>
  </div>
  </body>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//引入组件
//import HelloWorld from './components/HelloWorld.vue';
import ToDoItem from './components/ToDoItem.vue';
import ToDoForm from './components/ToDoForm.vue';
import uniqueId from 'lodash.uniqueid';
//注册组件
export default{
  name:'App',
  components:{
    ToDoItem,
    ToDoForm,
  },
  data(){
    return {
      ToDoItem:[
        {id:uniqueId('todo-'),label:"login page",done:false},
        {id:uniqueId('todo-'),label:"device tags",done:false},
        {id:uniqueId('todo-'),label:"device interfaces",done:false},
      ]
    };
  },
  methods:{
    addToDo(newLable){
      this.ToDoItem.push({id:uniqueId('todo-'),label:newLable,done:false});
    }
  }

};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
}

h2{
  width:500px;
  height:28px;
  margin:0 30%;
  text-align:center;
}
ul{
  margin:5% 30%;
  padding:0;
  display:flex;
  flex-direction:column;
  justify-content: center;
}
</style>
