<template>
  <div style="width:100%;height:100%;position:relative">
    <div id="cesiumContainer"
         class="map"></div>
  </div>
</template>

<script setup>
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import * as token from '../../../token'

// map
// Token
Cesium.Ion.defaultAccessToken = token.ion

function init () {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false
  })
  // 移除默认图层
  viewer.imageryLayers.remove(viewer.imageryLayers.get(0))

  // 添加自定义图层
  const name = 'tdt'
  const imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=' + token.tdt,
    layer: 'tdtVecBasicLayer',
    style: 'default',
    tileMatrixSetID: 'GoogleMapsCompatible',
    show: false
  })
  imageryProvider.name = name
  const imagery = viewer.imageryLayers.addImageryProvider(imageryProvider)
  imagery.hue = 3 // 图层色调
  imagery.contrast = -1.2 // 图层对比度
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
