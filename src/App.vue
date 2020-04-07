<template>
  <div id="app">
    <router-link to="/socket">跳转socket页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>