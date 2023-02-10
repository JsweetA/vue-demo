<script setup>
import HelloWorld from './components/HelloWorld.vue'
import request from './api/request'
const fetchClick = async ()=>{
  const res = await request({
      url:`/aaa`,
    });
}

</script>

<template>
  <div>
    
    <button @click="fetchClick">请求</button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
