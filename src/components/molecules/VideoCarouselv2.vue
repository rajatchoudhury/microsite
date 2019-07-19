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
    <h2>Version 2 slider</h2>
    <!-- swiper1 -->
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide v-for="(item, index) in videosList" :key="index">
        <img
          :id="'play-icon-' + index"
          class="play-icon"
          @click="playVideoOnClick(index)"
          src="../../assets/Big Play button.svg"
        />
        <video
          :id="'video-fluid-' + index"
          class="video-fluid"
          width="100%"
          @click="!paused ? playVideoOnClick(index) : null"
          loop
        >
          <source :src="item.src" type="video/mp4" />
        </video>
        <div class="bg-gradient"></div>
        <div class="caption">
          <h1>{{item.title}}</h1>
          <p>{{item.description}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>

    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide v-for="(item, index) in videosList" v-bind:key="index">
        <video class="video-fluid" loop muted onmouseover="this.play()" onmouseout="this.pause()">
          <source :src="item.src + '#t=0,5'" type="video/mp4" />
        </video>
        <h1 class="heading">{{item.title}}</h1>
        <div class="caption">
          <p>{{item.description}}</p>
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
      videosList: [
        {
          src: "https://mdbootstrap.com/img/video/Agua-natural.mp4",
          title: "Title 1",
          description: "Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums"
        },
        {
          src: "https://mdbootstrap.com/img/video/forest.mp4",
          title: "Title 2",
          description: "Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums"
        },
        {
          src: "https://mdbootstrap.com/img/video/Tropical.mp4",
          title: "Title 3",
          description: "Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums"
        }
      ],
      swiperOptionTop: {
        spaceBetween: 0,
        loop: false,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
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
        slidesOffsetBefore: 10
      },
      paused: true,
      lastIndex: -1
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    playVideoOnClick(index) {
      if (this.lastIndex > -1 && this.lastIndex !== index) {
        this.pause(this.lastIndex);
      }
      this.lastIndex = index;
      if (this.paused) {
        this.play(index);
      } else {
        this.pause(index);
      }
    },
    play(index) {
      var video = document.getElementById("video-fluid-" + index);
      var image = document.getElementById("play-icon-" + index);
      video.play();
      image.style = "opacity: 0; display: none";
      setTimeout(() => {
        document.querySelectorAll(".bg-gradient")[index].style.display = "none";
      }, 300);
      document.querySelectorAll(".bg-gradient")[index].style =
        "opacity: 0; transition: opacity 0.2s ease";
      this.paused = false;
    },
    pause(index) {
      var video = document.getElementById("video-fluid-" + index);
      var image = document.getElementById("play-icon-" + index);
      video.pause();
      image.style = "opacity: 1; display: block";
      document.querySelectorAll(".bg-gradient")[index].style =
        "opacity: 1; display: block; transition: opacity 0.2s ease";
      this.paused = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: transparent;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.gallery-top {
  height: 800px !important;
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
    background: rgba(0,0,0,1);
    background: -moz-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 38%, rgba(224,221,224,0.15) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(0,0,0,1)), color-stop(38%, rgba(0,0,0,0.8)), color-stop(100%, rgba(224,221,224,0.15)));
    background: -webkit-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 38%, rgba(224,221,224,0.15) 100%);
    background: -o-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 38%, rgba(224,221,224,0.15) 100%);
    background: -ms-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 38%, rgba(224,221,224,0.15) 100%);
    background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 38%, rgba(224,221,224,0.15) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#e0dde0', GradientType=1 );
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