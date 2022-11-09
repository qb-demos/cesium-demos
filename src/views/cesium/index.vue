<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

function init () {
  const viewer = new Cesium.Viewer('cesiumContainer')
  console.log('%c viewer: ', 'background-color: pink', viewer)
  console.log('%c Cesium: ', 'background-color: pink', Cesium)
}

onMounted(() => {
  init()
})
onBeforeUnmount(() => { })
</script>

<style lang='scss' scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
