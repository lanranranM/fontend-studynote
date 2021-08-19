### **Vue What I learned**

#### **创建组件**

1. 创建`NewComponent.vue`in `components`file 	

   *注意命名方式

   ```vue
   <template></template>
   
   <script>
     export default {};
   </script>
   ```

   

2. in `src > App.vue`,  引入、注册NewComponent in `<script>`

3. in `src > App.vue`, 使用NewComponent in the name of `new-component` in `<template>` just like html

   *注意组件命名方式

#### **创建dynamic组件**

- props: the value of prop initilizes the display of components, just like the input of the function

- define `props` as an object in the `export default` object in `NewComponent.vue`, and add members as objects in `props`

  ```javascript
    export default {
        props:{
          label:{required:true,type:String},	//property of label-property of props
          //change done value of each instance of the component but don't change the 			default value of the class, so we use the following data() function as a 			method member to make local changes of done 
          done:{default:false,type:Boolean}	
        },
        data(){
            return {
                isDone:this.done
            };
        }
    };
  ```

- use the props by adding them into `newComponent.vue > <template>` and passing its value when using the component in `App.vue`

  <font color='blue'>`v-bind` connect the data to the component</font>

  【a component should never change the value of its own props (input不能改变函数结构)】

  ```javascript
  //in newComponent.vue
  <template>
    <div>
      //<input type="checkbox" id="todo-item" checked="false" />
      //:attribute = "expression"
      <input type="checkbox" id="todo-item" v-bind:checked="isDone" /> 
      //or
      <input type="checkbox" id="todo-item" :checked="isDone" />
      <label for="todo-item">{{label}}</label>
    </div>
  </template>
  
  
  // in App.vue
  <to-do-item label="My ToDo Item" done=true></to-do-item>
  
  ```

#### **为组件添加eventHandler**

1. add `methods()` property to the component in its script
2. use <font color='blue'>`v-on`to add the handler to the event with some @event.modifier</font>

```vue
@event.modifier="methodName"
```

```javascript
<template>
    <form @submit.prevent="onSubmit"></form>
</template>

<script>
export default {
   methods: {
       onSubmit() {
          console.log('form submitted')
       }
   }
}
</script>
```

#### **relate input value with the component's prop**

<font color='blue'> `v-model`binds the data property with the element you set and keep the data in sync with the element (`<input>` here)</font>. We use it to update the input from user and store it as a prop of the component

```vue
v-mode.modifier="variable"
```

```javascript
export default {
  methods: {
    onSubmit() {
      console.log("this.label");	//new prop "label"
    }
  },
  //first add a new prop "label" to the component
  data() {
    return {
      label: ""
    };
  }
};

//then update the <input> in template
<input
  type="text"
  id="new-todo-input"
  name="new-todo"
  autocomplete="off"
//.lazy modifier makes the v-model only sync data when the input loses focus or the form is submitted (the final data)
  v-model.lazy="label" />

```

- **use the App.vue to handle the event**

  ​       	component	======emit the event with wannna-match data==========>App.vue

  listen and catch event "todo-added"											handle the event by methods: addToDo()

```javascript
//upate components' OnSubmit() and omit an event "todo-added" when user submit the form
<template>
	<form @submit.prevent="onSubmit"></form>
</template>
<script>
    export default{
		data(){return{label:""}},
        methods:{
            onSubmit(){ this.$emit("todo-added",this.label)};
        }
	};
</script>

//App.vue catch the event in compoenent and trigger its handler
<template>
	<to-do-form @todo-added:"handler"></to-do-form>
</template>
<script>
    ...
    export default{
        methods:{
            handler(){...},
        }
	};
</script>
```

**Ref** 

[API — Vue.js (vuejs.org)](https://vuejs.org/v2/api/#v-model)
