<template>
  <div style="width:100%;height:100%;position:relative">
    <div id="cesiumContainer"
         class="map"></div>
  </div>
</template>

<script setup>
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
// ?url 以静态资源方式导入
import fileUrl from '../../assets/SampleData/kml/gdpPerCapita2008.kmz?url'

// map
function init () {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false,
    shouldAnimate: true
  })
  viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3 }))

  // 返回一个 Promise，可以在 then 方法中修改 dataSource.entities
  const promise = Cesium.KmlDataSource.load(fileUrl, {
    camera: viewer.scene.camera,
    canvas: viewer.scene.canvas,
    screenOverlayContainer: viewer.container
  })
  promise.then(ds => {
    viewer.dataSources.add(ds)

    // 修改 entities
    // const entities = ds.entities.values
  })
}

onMounted(() => {
  init()
})
onBeforeUnmount(() => { })
</script>

<style lang='scss' scoped>
.map {
  width: 100%;
  height: 100%;
  // background-color: pink;
}
</style>
