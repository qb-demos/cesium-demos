<template>
  <div style="width:100%;height:100%;position:relative">
    <div class="select">
      <el-select v-model="val"
                 filterable
                 @change="onChange">
        <el-option v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div id="cesiumContainer"
         class="map"></div>
  </div>
</template>

<script setup>
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

// select
const val = ref('2')
const options = [
  { label: 'flyInACity', value: 'flyInACity' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' }
]
function onChange (val) {
  switch (val) {
    case 'flyInACity':
      flyInACity()
      break
  }
}

// map
// Token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNmUwY2Q2OS00MTE0LTRmYjAtOTdkMy1iOTI2MTUwZmRkNDEiLCJpZCI6OTM4MjMsImlhdCI6MTY1MjYwODY1M30.RSL4Vhwk3Xw-tvstUCOzCUwdpcvAUIR2rGxGNfl54vk'

let viewer
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
  return viewer
}
// https://sandcastle.cesium.com/index.html?src=Camera.html
function flyInACity () {
  const { scene } = viewer
  const camera = scene.camera
  camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(
      -73.98580932617188,
      40.74843406689482,
      363.34038727246224
    ),
    complete: function () {
      setTimeout(function () {
        camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(
            -73.98585975679403,
            40.75759944127251,
            186.50838555841779
          ),
          orientation: {
            heading: Cesium.Math.toRadians(200.0),
            pitch: Cesium.Math.toRadians(-50.0)
          },
          easingFunction: Cesium.EasingFunction.LINEAR_NONE
        })
      }, 1000)
    }
  })
}

onMounted(() => {
  viewer = init()
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
