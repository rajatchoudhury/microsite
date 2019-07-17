<template>
  <div style="margin:auto; width: 82%;">
    <!-- <h1>Hello</h1>
    <AppButton label="Search" shape="circle"/>
    <Input placeholder="Enter your name"/>-->
    <br/>
    Default
    <AppCard />
    <br/>
    With class 'bottom-right'
    <AppCard variation="bottom-right"/>
    <br/>
    With class 'top-right'
    <AppCard variation="top-right" />
    <br/>
    With class 'top-left'
    <AppCard variation="top-left" />
    With class 'card-double'
    <AppCard variation="card-double" />
    With class 'card-double', arranged in a grid
    <div class="row">
      <div class="col-12 col-sm-6"><AppCard variation="card-double" /></div>
      <div class="col-12 col-sm-6"><AppCard variation="card-double" /></div>
    </div>
    
  </div>
  
</template>

<script>

// @ is an alias to /src
import AppButton from './atoms/AppButton'
import Input from './atoms/AppInput'
import AppCard from './molecules/AppCard'

export default {
  name: "HelloWorld",

  components:{
    AppButton,
    Input,
    AppCard
  }
};
</script>