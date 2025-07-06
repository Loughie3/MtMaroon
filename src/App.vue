<script>
import NavBar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { NavBar, Footer },
};
</script>

<template>
  <NavBar />
  <router-view />
  <Footer />
</template>
