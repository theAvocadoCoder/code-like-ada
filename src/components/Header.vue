<template>
  <div
    class="
      component-container
      flex
      items-center
      bg-green-400
      w-full
      h-16
      sticky
      top-0
      z-50
      px-5
      m-0
    "
  >
    <div class="flex-auto justify-self-center text-center font-bold text-3xl">
      <a href="#">Code Like Ada</a>
    </div>
    <!-- <div class="flex-none justify-self-end text-xl">
      <a href="#"><Icon icon="ant-design:menu-outlined" /></a>
    </div> -->
  </div>
</template>

<style>
.component-container {
  font-family: "Skyhook Mono", "Courier New", Courier, monospace;
}
</style>

<script>
// import { Icon } from "@iconify/vue";
export default {
  name: "Header",
  // components: { Icon },
};
</script>
