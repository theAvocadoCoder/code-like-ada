<template>
  <div
    class="flex items-center bg-blue-400 h-16 w-screen sticky top-0 z-50 px-5"
  >
    <div class="flex-auto justify-self-center text-center text-3xl">
      <a href="#">Code Like Ada</a>
    </div>
    <div class="flex-none justify-self-end text-xl">
      <a href="#"><Icon icon="ant-design:menu-outlined" /></a>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Header",
  components: { Icon },
};
</script>
