<template>
	<div>转换后的tree结构： {{ tree }}</div>
</template>
<script lang="ts" setup>
  import { arrayToTree } from "@zhonghe/utils";

  const data = [
    { id: 1, name: "Node 1", pid: null },
    { id: 2, name: "Node 2", pid: 1 },
    { id: 3, name: "Node 3", pid: 1 },
    { id: 4, name: "Node 4", pid: 2 },
    { id: 5, name: "Node 5", pid: 3 },
    { id: 6, name: "Node 6", pid: 4 },
  ];

  const tree = arrayToTree(data);
  console.log(tree);
</script>
<style scoped></style>
