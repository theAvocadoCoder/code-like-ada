<template>
  <div class="min-h-screen bg-gray-100 pb-5">
    <Header />
    <RegistrationForm />

    <div class="mt-10 m-auto text-center text-xs">
      <small>Powered by</small>
      <br />
      <img
        class="h-10 object contain m-auto rounded-md"
        src="../assets/dork-discovery-logo.jpg"
        alt=""
      />
    </div>
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
