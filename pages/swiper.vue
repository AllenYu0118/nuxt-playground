<template>
  <h1>Swiper</h1>
  <button @click="swiperRef.slidePrev()">Prev</button>
  <button @click="swiperRef.slideNext()">Next</button>

  <ClientOnly>
    <swiper :modules="[Controller, Pagination, Navigation]" :navigation="true" :space-between="10" :slides-per-view="3"
      @swiper="onSwiper" @slideChange="onSlideChange" class="swiper" :pagination="{
        clickable: true,
        el: '.swiper-pagination',
      }" @reach-end="reachEnd" @reach-beginning="reachBeginning">
      <swiper-slide v-for="item,key in [...bannerList]" class="swiper-item" :data-type="item.type" :key="key">
        <img :src="item.cover_img.url" v-if="item.type === 'work'" />
        <template v-if="item.type === 'video' && docLoaded">
          <T5Player :src="item.hls_url" height="423"
            poster="https://images.debug.100.com.tw/images/companies/202405/29/api_1547501_1716947122_dMS1MrCxZ2.jpg!t1000.jpg" />
        </template>
      </swiper-slide>
    </swiper>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { Swiper as SwiperType } from 'swiper/types'
import { Controller, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/controller';
import 'swiper/css/navigation';

import { T5Player, useVideoControls } from '@t5/player'
import '@t5/player/style'

const docLoaded = ref(false)

const swiperRef = ref<SwiperType>()



const onSwiper = (swiper: SwiperType) => {
  swiperRef.value = swiperRef
  console.log(swiperRef)
}
const onSlideChange = (swiper) => {
  console.log('slide change', swiper);
};

onMounted(() => {
  nextTick(() => {
    docLoaded.value = true
  })
})

function reachEnd(swiper) {
  console.log('swiper: ', swiper);
  console.log('swiperRef.value: ', swiperRef.value);
  setTimeout(() => {
    swiper?.slideTo(0, 800)
  }, 100)
  // swiper.isEnd = false
  // swiper.realIndex = 0
  
}

function reachBeginning(swiper) {
  console.log('swiper: ', swiper);
  // swiperRef.value?.slideTo(bannerList.length - 1, 0)
  console.log('swiperRef.value: ', swiperRef.value);
}



</script>

<style>
.swiper {
  width: 100%;
  height: 423px;
}
.swiper-item {
  width: 100%;
}
.swiper-item video {
  width: 100%;
    height: 100%;
}
.swiper-item img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
