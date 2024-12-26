<template>
  <T5Player :id pattern="component" src="https://video.591.com.tw/debug/target/house/hls/2023-04-12/6800/master.m3u8"
    poster="https://video.591.com.tw/debug/target/house/cover/2023-04-12/6800.png" />
</template>

<script setup lang="ts">
import { T5Player, useVideoControls } from '@t5/player'
import '@t5/player/style'

const props = defineProps<{
  id: string
}>()

console.log('props.id: ', props.id);


useVideoControls(props.id)
</script>
