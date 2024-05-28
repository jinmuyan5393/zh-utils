<template>
	<div>
    基础类型判断
    <div>是否是对象：{{ isObject }}</div>
    <div>是否是字符串：{{ isString }}</div>
    <div>是否是undefined：{{ isUndef }}</div>
  </div>
</template>
<script lang="ts" setup>
import { commonType } from "@zhonghe/utils";

const data = { name: "sjsj" };
let aa;
const isObject = commonType.isObject(data);

const isString = commonType.isString(data);

const isUndef = commonType.isUndefined(aa);
</script>
<style scoped></style>
