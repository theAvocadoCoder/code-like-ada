<template>
  <div class="home w-screen">
    <Header />
    <RegistrationForm />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

export default {
  name: "Home",
  components: {
    Header,
    RegistrationForm,
  },
};
</script>
