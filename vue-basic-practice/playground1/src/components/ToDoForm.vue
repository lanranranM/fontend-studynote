<template>
    <!--<form @submit.prevent="onSubmit">-->
    <form @submit.prevent="onSubmit">
    <input type="text" id="new-todo-input" v-model="label" name="new-todo" placeholder="What needs to be done today?"/>
    <button type="submit">Add task</button>
    </form>
</template>

<script>
    export default{
        methods:{
            onSubmit(){
                //let mes=this.label+" added!";
                //alert(mes);
                //$emit (event,match prop)
                if(this.label!==""){
                    this.$emit("todo-added",this.label);
                }
                this.label="";
                return;
            }
        },
        data(){
            return{ label:""};
        }
    };
</script>

<style>
#new-todo-input{
    width: 200px;
    margin: 10px;
}

button{
    height:21px;
    border:1px solid #90EE90;
    border-radius:10px;
    background:	white;
    transition-duration: 0.4s;
    cursor:pointer;
}
button:hover{
    color:white;
    background:#90EE90;
}
</style>