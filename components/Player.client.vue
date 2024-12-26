<template>
  <div>
    <T5Player :id pattern="component" src="https://video.591.com.tw/debug/target/house/hls/2023-04-12/6800/master.m3u8"
      poster="https://video.591.com.tw/debug/target/house/cover/2023-04-12/6800.png" />
  </div>
</template>

<script setup lang="ts">
import '@t5/player/style'
import { T5Player, useVideoControls } from '@t5/player'


const props = defineProps<{
  id: string
}>()

// @ts-ignore
useVideoControls(props.id)
</script>
