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
    <table>
      <thead>
        <tr>
          <th colspan="3" class="herotitle">Video Banner</th>
        </tr>

        <tr>
          <th>Title and description:</th>
          <th colspan="2">
            <label>
              Left Text
              <input type="radio" id="one" value="left" v-model="picked" />
            </label>&nbsp;
            <label>
              right Text
              <input type="radio" id="two" value="right" v-model="picked" />
            </label>
          </th>
        </tr>
      </thead>
    </table>
    <!-- swiper Main -->
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
          class="video-fluid fullVideo"
          width="100%"
          @click="!paused ? playVideoOnClick(index) : null"
          loop
        >
          <source :src="item.src" type="video/mp4" />
        </video>
        <div class="bg-gradient"></div>
        <div class="caption" :class="picked" :id="'caption-' + index">
          <h1>{{item.title}}</h1>
          <p>{{item.description}}</p>
        </div>
      </swiper-slide>   
    </swiper>

    <!-- swiper Thumbs -->
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
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
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
        },
        {
          src: "https://mdbootstrap.com/img/video/Tropical.mp4",
          title: "Title 4",
          description: "Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums"
        },
        {
          src: "https://mdbootstrap.com/img/video/Tropical.mp4",
          title: "Title 5",
          description: "Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums"
        },
        {
          src: "https://mdbootstrap.com/img/video/Tropical.mp4",
          title: "Title 6",
          description: "Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums"
        },
        {
          src: "https://mdbootstrap.com/img/video/Tropical.mp4",
          title: "Title 7",
          description: "Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums"
        },
        {
          src: "https://mdbootstrap.com/img/video/Tropical.mp4",
          title: "Title 8",
          description: "Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums"
        }
      ],
      swiperOptionTop: {
        spaceBetween: 0,
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChangeTransitionStart() {
            var video = document.getElementById(
              "video-fluid-" + (this.previousIndex ? this.previousIndex : 0)
            );
            const isVideoPlaying = video =>
              !!(
                video.currentTime > 0 &&
                !video.paused &&
                !video.ended &&
                video.readyState > 2
              );
            if (isVideoPlaying) {
              video.click();
            }
          }
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 6,
        slidesPerView: 6,
        touchRatio: 0.2,
        loop: false,
        slideToClickedSlide: true,
        centeredSlides: true,
        breakpointsInverse: true,
        breakpoints: {
          414: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 6
          }
        },
        on: {
          slideChangeTransitionStart() {
            var video = document.getElementById(
              "video-fluid-" + (this.previousIndex ? this.previousIndex : 0)
            );
            const isVideoPlaying = video =>
              !!(
                video.currentTime > 0 &&
                !video.paused &&
                !video.ended &&
                video.readyState > 2
              );
            if (isVideoPlaying) {
              video.click();
            }
          }
        }
      },
      paused: true,
      lastIndex: -1,
      picked: "left"
    };
  },
  mounted() {
    this.$nextTick(() => {
      var galleryTop = new Swiper(".gallery-top", this.swiperOptionTop);
      var galleryThumbs = new Swiper(
        ".gallery-thumbs",
        this.swiperOptionThumbs
      );
      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;
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
      var caption = document.getElementById("caption-" + index);
      video.play();
      image.style = "opacity: 0; display: none";
      caption.style = "display: none";
      document.querySelectorAll(".bg-gradient")[index].style =
        "z-index: -1; transition: opacity 0.2s ease";
      this.paused = false;
    },
    pause(index) {
      var video = document.getElementById("video-fluid-" + index);
      var image = document.getElementById("play-icon-" + index);
      var caption = document.getElementById("caption-" + index);
      video.pause();
      image.style = "opacity: 1; display: block";
      caption.style = "display: block";
      document.querySelectorAll(".bg-gradient")[index].style =
        "z-index: 1; transition: opacity 0.2s ease";
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
    z-index: 1;
    p {
      font-size: 24px;
    }
  }
  .left {
    left: 8%;
  }

  .right {
    right: 8%;
  }
  .bg-gradient {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 1);
    background: -moz-linear-gradient(
      45deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8) 38%,
      rgba(224, 221, 224, 0.15) 100%
    );
    background: -webkit-gradient(
      left bottom,
      right top,
      color-stop(0%, rgba(0, 0, 0, 1)),
      color-stop(38%, rgba(0, 0, 0, 0.8)),
      color-stop(100%, rgba(224, 221, 224, 0.15))
    );
    background: -webkit-linear-gradient(
      45deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8) 38%,
      rgba(224, 221, 224, 0.15) 100%
    );
    background: -o-linear-gradient(
      45deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8) 38%,
      rgba(224, 221, 224, 0.15) 100%
    );
    background: -ms-linear-gradient(
      45deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8) 38%,
      rgba(224, 221, 224, 0.15) 100%
    );
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8) 38%,
      rgba(224, 221, 224, 0.15) 100%
    );
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
  .swiper-button-next,
  .swiper-button-prev {
    top: 15% !important;
    height: 90% !important;
    width: 70px;
    background-position-y: 35%;
  }
  .swiper-button-prev {
    left: 0px !important;
  }
  .swiper-button-next {
    right: 0px !important;
  }
  .swiper-button-disabled {
    display: none;
  }
}
.gallery-thumbs .swiper-slide {
  opacity: 1;
  // width: 209px !important;
  // height: 200px !important;
  width: 25%;
  background-color: black;
  height: 200px;
  top: 10px;
  z-index: 1;
  @include transition(all, 0.4s, ease, 0s);
  .heading {
    color: white;
    font-size: 30px;
    padding: 0 20px;
    position: absolute;
    top: 47%;
    z-index: 1;
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
    z-index: 1;
    p {
      font-weight: normal;
      font-size: 14px;
    }
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
  &:hover {
    transform: scaleX(1.2) scaleY(1.1);
    z-index: 2;
  }
}
.gallery-thumbs .swiper-slide-active {
  .caption {
    p {
      font-weight: bold;
    }
  }
}
</style>