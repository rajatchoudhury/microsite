<template>
    <!-- READ:-
    http://idangero.us/swiper/api/ 
    
    main.js:-
    import VueAwesomeSwiper from 'vue-awesome-swiper';
    import 'swiper/dist/css/swiper.css'
    Vue.use(VueAwesomeSwiper);
    
    dependency:-
    vue-awesome-swiper
    -->

    <!-- hero -->
      <div>

        <h2>Version 2 slider </h2>
        <!-- swiper1 -->
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
          <swiper-slide class="slide-1">
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-2">
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-3">
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-4">
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-5">
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-1">
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-2">
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-3">
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-4">
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-5">
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide class="slide-1">
            <h1 class="heading">Title</h1>
            <div class="caption">
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-2">
            <h1 class="heading">Title</h1>
            <div class="caption">
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-3">
            <h1 class="heading">Title</h1>
            <div class="caption">
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-4">
            <h1 class="heading">Title</h1>
            <div class="caption">
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-5">
            <h1 class="heading">Title</h1>
            <div class="caption">
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-1">
            <h1 class="heading">Title</h1>
            <div class="caption">
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-2">
            <h1 class="heading">Title</h1>
            <div class="caption">
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-3">
            <h1 class="heading">Title</h1>
            <div class="caption">
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-4">
            <h1 class="heading">Title</h1>
            <div class="caption">
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-5">
            <h1 class="heading">Title</h1>
            <div class="caption">
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>

    <!-- END hero -->
</template>

<script>
  export default {
    data() {
      return {
        swiperOptionTop: {
          spaceBetween: 0,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 6,
          slidesPerView: 6,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 6, //looped slides should be the same
          slideToClickedSlide: true,
          centeredSlides: true,
          slidesOffsetBefore: 10,
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    background-color: transparent;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
    &.slide-1 {
      background-image:url('http://lorempixel.com/1200/1200/nature/3');
    }
    &.slide-2 {
      background-image:url('http://lorempixel.com/1200/1200/nature/3');
    }
    &.slide-3 {
      background-image:url('http://lorempixel.com/1200/1200/nature/3');
    }
    &.slide-4 {
      background-image:url('http://lorempixel.com/1200/1200/nature/3');
    }
    &.slide-5 {
      background-image:url('http://lorempixel.com/1200/1200/nature/3');
    }
  }
  .gallery-top {
    height: 800px!important;
    width: 100%;
    .swiper-button-next,
    .swiper-button-prev {
      top: 50% !important;
    }
    .caption {
      color: white;
      width: 300px;
      height: auto;
      position: absolute;
      top: 50%;
      left: 8%;
      p { 
        font-size: 24px;
      }
    }
  }
  .gallery-thumbs {
    box-sizing: border-box;
    top: -202px;
     height: 200px !important;
  }
  .gallery-thumbs .swiper-slide {
    opacity: 1;
    // width: 209px !important;
    // height: 200px !important;
    width: 25%;
    height: 100%;
    .heading {
      color: white;
      font-size: 30px;
      padding: 0 20px;
      position: absolute;
      top: 45%;
    }
    .caption {
      position: absolute;
      min-height: 20%;
      width: 100%;
      bottom: 0;
      background-color: black;
      color: white;
      text-align: center;
      padding: 5px 10px;
      p {
        font-weight: normal;
        font-size: 14px;
      }
    }
    &:hover {
      transform: scale(1.1);
    }
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
    .caption {
      p {
        font-weight: bold;
      }
    }
  }
</style>