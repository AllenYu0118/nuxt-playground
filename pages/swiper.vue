<template>
  <h1>Swiper</h1>

  <!-- <ClientOnly>
    <swiper :modules="[Controller, Pagination, Navigation]" :navigation="true" :space-between="10" :slides-per-view="3"
      @swiper="onSwiper" @slideChange="onSlideChange" class="swiper" :pagination="{
        clickable: true,
        el: '.swiper-pagination',
      }">
      <swiper-slide v-for="(item, key) in [...bannerList, ...bannerList, ...bannerList]" class="swiper-item"
        :data-type="item.type" :key="key">
        <img :src="item.cover_img.url" v-if="item.type === 'work'" />
        <template v-if="item.type === 'video'">
          
        </template>
      </swiper-slide>
    </swiper>


  </ClientOnly> -->


  <p>
    <ClientOnly>
      <Player id="player-1" />
      <Player id="player-2" />
    </ClientOnly>
  </p>
</template>

<script setup lang="ts">
import type { Swiper as SwiperType } from 'swiper/types'
import { Controller, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/controller';
import 'swiper/css/navigation';

const docLoaded = ref(false)

const onSwiper = (swiper: SwiperType) => {
  console.log('swiper: ', swiper);
}


const onSlideChange = (swiper: SwiperType) => {
  // const videos = document.querySelectorAll('.t5-player video')
  // videos.forEach(video => {
  //   video.pause()
  // })
}

onMounted(() => {
  nextTick(() => {
    docLoaded.value = true
  })
})

</script>

<style>
.swiper {
  width: 100%;
  height: 423px;
}
.swiper-item {
  width: 100%;
}
.swiper-item img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
