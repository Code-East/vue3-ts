<script lang="ts" setup>
import { ref } from 'vue';

let title = ref('HELLO WORLD')
const btnClick = ():void => {
  if (title.value == 'HI') {
    title.value = 'HELLO WORLD'
  }else{
    title.value = 'HI' 
  }
}

interface Person {
  readonly id:number,
  name:string,
  age?:number
}
let man:Person ={
  id:123123,
  name: '',
}


</script>
<template>
  <div>
    <h1>{{ title }}</h1>
    <el-button type="primary" @click="btnClick">Primary</el-button>
    <!-- <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view> -->
  </div>
</template>

<style lang="scss">
body {
  color: $test-color;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
