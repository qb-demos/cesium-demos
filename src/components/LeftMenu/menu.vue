<template>
  <el-menu default-active="2"
           router
           class="el-menu-vertical"
           :default-openeds="['1']"
           :collapse="menuCollapse">
    <el-sub-menu v-for="menu in menus"
                 :key="menu.label"
                 :index="menu.index">
      <template #title>
        <el-icon>
          <Files />
        </el-icon>
        <span>{{ menu.label }}</span>
      </template>
      <el-menu-item v-for="item in menu.children"
                    :key="item.index"
                    :index="item.index">{{ item.label }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import useAppStore from '../../store/modules/app'
import { Files } from '@element-plus/icons-vue'

const menuCollapse = computed(() => useAppStore().menuCollapse)
const menus = ref([])
menus.value = [
  {
    label: 'Cesium-Base',
    index: '1',
    children: [
      { label: '添加图层', index: '/base_01' },
      { label: '自定义矢量地图', index: '/base_01_a' },
      { label: '添加地形', index: '/base_02' },
      { label: '相机操控', index: '/base_03' },
      { label: '时钟 Clock', index: '/base_04' },
      { label: 'Entity', index: '/base_05' },
      { label: 'CzmlDataSource', index: '/base_06' },
      { label: 'GeoJsonDataSource', index: '/base_07' },
      { label: 'KmlDataSource', index: '/base_08' }
    ]
  },
  {
    label: 'Point',
    index: '1',
    children: [
      { label: 'point_01', index: '/point_01' }
    ]
  }
]
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  height: 100%;
  overflow-y: auto;
  border-right: 0;
  display: flex;
  flex-direction: column;

  &:not(.el-menu--collapse) {
    width: 240px;
  }

  .brand {
    height: 60px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: pink;
  }

  .empty {
    flex: 1;
  }
}
</style>
