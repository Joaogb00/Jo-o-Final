<template>
  <div class="menu">
    <h1 class="title">ConeFinance</h1>
    <nav class="links">
      <router-link class="link" to="/teste" >Visão Geral</router-link>
      <router-link class="link" to="/transacoes" >Transações</router-link>
      <router-link class="link" to="/relatorios" >Relatórios</router-link>
      <router-link class="link" to="/config" >Configurações</router-link>
      <a class="link logout" href="#">Sair</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style>
 * {
   margin: 0;
   padding: 0;
   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
 }

 .menu {
   background-color: #111213;
   display: flex;
   flex-direction: column;
   width: 240px;
   height: 140vh;
   box-shadow: 3px 0 15px rgba(0, 0, 0, 0.4);
   color: white;
   padding-top: 30px;
 }

 .title {
   font-size: 22px;
   font-weight: bold;
   margin: 0 auto;
   margin-bottom: 40px;
   color: #f1f1f1;
   letter-spacing: 1px;
 }

 .links {
   display: flex;
   flex-direction: column;
   gap: 8px;
   padding: 0 20px;
 }

 .link {
   text-decoration: none;
   color: #bbb;
   padding: 10px 15px;
   border-radius: 6px;
   transition: all 0.3s;
   display: block;
 }

 .link:hover {
   background-color: #2a2b2e;
   color: #fff;
   padding-left: 20px;
 }

 .active {
   background-color: #3b82f6;
   color: white;
   font-weight: 600;
 }

 .logout {
   margin-top: auto;
   color: #d96464;
 }

 .logout:hover {
   background-color: #521818;
   padding-left: 20px;
   color: #fff;
 }
</style>
