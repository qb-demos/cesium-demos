<template>
  <div style="width:100%;height:100%;position:relative">
    <div id="cesiumContainer"
         class="map"></div>
  </div>
</template>

<script setup>
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

// map
// Token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNmUwY2Q2OS00MTE0LTRmYjAtOTdkMy1iOTI2MTUwZmRkNDEiLCJpZCI6OTM4MjMsImlhdCI6MTY1MjYwODY1M30.RSL4Vhwk3Xw-tvstUCOzCUwdpcvAUIR2rGxGNfl54vk'
function init () {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false
  })

  // 移除默认图层
  // viewer.imageryLayers.remove(viewer.imageryLayers.get(0))
  // 添加自定义图层
  // viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3954 }))
  viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3 }))

  // 添加地形数据
  viewer.terrainProvider = Cesium.createWorldTerrain({
    requestWaterMask: true, // required for water effects
    requestVertexNormals: true // required for terrain lighting
  })
  // Enable depth testing so things behind the terrain disappear.
  viewer.scene.globe.depthTestAgainstTerrain = true
}

onMounted(() => {
  init()
})
onBeforeUnmount(() => { })
</script>

<style lang='scss' scoped>
.select {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background-color: var(--el-bg-color);
  border-radius: 4px;
}

.map {
  width: 100%;
  height: 100%;
  // background-color: pink;
}
</style>
