<script lang="ts" setup>
import { throttle } from '@zhonghe/utils';
import { ref, onMounted } from 'vue';
const getScrollTop = () => window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
const scrollTop = ref<number | null>(getScrollTop());
const consoleScrollTop = () => {
  scrollTop.value = getScrollTop();
  console.log('节流函数执行了', scrollTop.value);
};
const scrollFunction = throttle(consoleScrollTop, 1000);
onMounted(() => {
  window.addEventListener('scroll', scrollFunction);
});
</script>

<template>
  <div>当前屏幕滚动高度：{{ scrollTop }}</div>
</template>
