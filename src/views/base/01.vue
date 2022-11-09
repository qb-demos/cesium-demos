<template>
  <div style="width:100%;height:100%;position:relative">
    <div class="select">
      <el-select v-model="val"
                 filterable
                 @change="onChange">
        <el-option v-for="item in options"
                   :key="item"
                   :label="item"
                   :value="item">
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
const val = ref('1')
const options = [1, 2, 3]
function onChange (val) {
  console.log('%c val: ', 'background-color: pink', val)
}

// map
function init () {
  const viewer = new Cesium.Viewer('cesiumContainer')
  // console.log('%c viewer: ', 'background-color: pink', viewer)
  // console.log('%c Cesium: ', 'background-color: pink', Cesium)

  // entity 支持多种平面和立方体（Shapes、volumes）
  const wyoming = viewer.entities.add({
    // add polygon
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArray([
        -109.080842, 45.002073,
        -105.91517, 45.002073,
        -104.058488, 44.996596,
        -104.053011, 43.002989,
        -104.053011, 41.003906,
        -105.728954, 40.998429,
        -107.919731, 41.003906,
        -109.04798, 40.998429,
        -111.047063, 40.998429,
        -111.047063, 42.000709,
        -111.047063, 44.476286,
        -111.05254, 45.002073]),
      height: 0,
      material: Cesium.Color.fromCssColorString('#95ec69').withAlpha(0.5)
    }
  })

  // wall
  viewer.entities.add({
    name: 'Green wall from surface with outline',
    wall: {
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        -107.0,
        43.0,
        100000.0,
        -97.0,
        43.0,
        100000.0,
        -97.0,
        40.0,
        100000.0,
        -107.0,
        40.0,
        100000.0,
        -107.0,
        43.0,
        100000.0
      ]),
      material: Cesium.Color.fromCssColorString('pink')
    }
  })

  viewer.zoomTo(wyoming)
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
