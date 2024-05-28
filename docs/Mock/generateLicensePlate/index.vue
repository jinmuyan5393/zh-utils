<template>
	<div>
    <button @click="generate">点击生成随机车牌</button>
    <div>随机生成的车牌：{{ license}}</div>
  </div>
</template>
<script lang="ts" setup>
import { generateLicensePlate } from '@zhonghe/utils';
import { ref } from "vue";

const license = ref("");
function generate() {
  license.value = generateLicensePlate();
}
</script>
<style scoped></style>
