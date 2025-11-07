<template>
  <div class="app-container">
    <Menu />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  components: {
    Menu
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
.app-container {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #f3f4f6;
}
</style>
