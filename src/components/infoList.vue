<template>
  <ul class="m-0 px-0 py-1dot875 p-lg-1dot875 bg-gray-light radiusLg12px">
    <li
      v-for="(item, i) in infoList"
      :key="i"
      :class="{ 'mb-0dot75': i !== infoList.length - 1 }"
      class=""
    >
      <p class="d-inline fs-5dot125 fsLg5 fw-bold">{{ item.infoTitle }}</p>
      <p class="d-inline text-break">{{ item.infoConent }}</p>
    </li>
    <!-- <li class="fs-5dot125 fsLg5 fw-bold">注意事項：</li> -->
  </ul>
</template>

<script>
export default {
  name: "infoList",
  props: ["infoList"],
};
</script>
<style scoped lang="scss"></style>
