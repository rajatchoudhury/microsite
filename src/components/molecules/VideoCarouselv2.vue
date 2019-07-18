<template>
    <!-- READ:-
    http://idangero.us/swiper/api/ 
    https://www.cssmatic.com/gradient-generator#

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
          <swiper-slide>
            <img
              id="play1"
              class="play-icon"
              @click="playVideoOnClick('vdo1')"
              src="../../assets/Big Play button.svg"
              />
            <video
              id="vdo1"
              class="video-fluid"
              width="100%"
              @click="!paused ? playVideoOnClick('vdo1') : null"
              loop
              muted
              >
              <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
            </video>
            <div class="bg-gradient"></div>
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
            
          </swiper-slide>
          <swiper-slide class="slide-2">
            <div class="bg-gradient"></div>
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-3">
            <div class="bg-gradient"></div>
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-4">
            <div class="bg-gradient"></div>
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-5">
            <div class="bg-gradient"></div>
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-1">
            <div class="bg-gradient"></div>
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-2">
            <div class="bg-gradient"></div>
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-3">
            <div class="bg-gradient"></div>
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-4">
            <div class="bg-gradient"></div>
            <div class="caption">
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
            </div>
          </swiper-slide>
          <swiper-slide class="slide-5">
            <div class="bg-gradient"></div>
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
          <swiper-slide class="">
            <video
              class="video-fluid"
              loop
              muted
              onmouseover="this.play()"
              onmouseout="this.pause()"
              >
              <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4#t=0,5" type="video/mp4" />
            </video>
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
    name: "VideoCarouselv2",
    data() {
      return {
        swiperOptionTop: {
          spaceBetween: 0,
          loop: false,
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
          loop: false,
          loopedSlides: 6, //looped slides should be the same
          slideToClickedSlide: true,
          centeredSlides: true,
          slidesOffsetBefore: 10,
        },
        paused: true
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    },
    methods: {
      playVideoOnClick(id) {
        var video = document.getElementById(id);
        var image = document.getElementById("play1");
        if (this.paused) {
          video.play();
          image.style = "opacity: 0; display: none";
          setTimeout(() => {
            document.querySelectorAll('.bg-gradient')[0].style.display = "none";
          }, 300);
          document.querySelectorAll('.bg-gradient')[0].style = "opacity: 0; transition: opacity 0.2s ease";
          this.paused = false;
        } else {
          video.pause();
          image.style = "opacity: 1; display: block";
          document.querySelectorAll('.bg-gradient')[0].style = "opacity: 1; display: block; transition: opacity 0.2s ease";
          this.paused = true;
        }
      }
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
    .play-icon {
      width: 100px;
      position: absolute;
      left: 47%;
      top: 35%;
      z-index: 2;
      opacity: 1;
    }
    .caption {
      color: white;
      width: 300px;
      height: auto;
      position: absolute;
      top: 50%;
      left: 8%;
      z-index: 1;
      p { 
        font-size: 24px;
      }
    }
    .bg-gradient {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
      background: rgba(0,0,0,1);/* Old Browsers */
      background: -moz-linear-gradient(45deg, rgba(0,0,0,1) 18%, rgba(148,148,148,0.1) 51%, rgba(255,255,255,0.36) 90%); /* FF3.6+ */
      background: -webkit-gradient(left bottom, right top, color-stop(18%, rgba(0,0,0,1)), color-stop(51%, rgba(148,148,148,0.1)), color-stop(90%, rgba(255,255,255,0.36)));/* Chrome, Safari4+ */
      background: -webkit-linear-gradient(45deg, rgba(0,0,0,1) 18%, rgba(148,148,148,0.1) 51%, rgba(255,255,255,0.36) 90%); /* Chrome10+,Safari5.1+ */
      background: -o-linear-gradient(45deg, rgba(0,0,0,1) 18%, rgba(148,148,148,0.1) 51%, rgba(255,255,255,0.36) 90%); /* Opera 11.10+ */
      background: -ms-linear-gradient(45deg, rgba(0,0,0,1) 18%, rgba(148,148,148,0.1) 51%, rgba(255,255,255,0.36) 90%); /* IE 10+ */
      background: linear-gradient(45deg, rgba(0,0,0,1) 18%, rgba(148,148,148,0.1) 51%, rgba(255,255,255,0.36) 90%);/* W3C */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#ffffff', GradientType=1 );/* IE6-9 fallback on horizontal gradient */
    }
    video {
      object-fit: fill;
      height: 100%;
      position: absolute;
      z-index: 1;
    }
  }
  .gallery-thumbs {
    box-sizing: border-box;
    top: -210px;
    height: 220px !important;
  }
  .gallery-thumbs .swiper-slide {
    opacity: 1;
    // width: 209px !important;
    // height: 200px !important;
    width: 25%;
    height: 200px;
    top: 10px;
    z-index: 1;
    @include transition(all, 0.4s, ease, 0s);
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
    video {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    &:hover {
      transform: scaleX(1.2) scaleY(1.1);
      z-index: 2;
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