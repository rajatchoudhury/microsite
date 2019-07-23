<template>
  <div id="engagement" class="single-video-container">
    <img
      id="play-icon-full-video"
      ref="play-icon-full-video"
      class="play-icon"
      @click="playVideoOnClick()"
      src="../../assets/Big Play button.svg"
    />
    <video
      id="full-video"
      ref="full-video"
      width="100%"
      @click="!paused ? playVideoOnClick() : null"
      loop
    >
      <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
    </video>
    <div class="full-video-bg-gradient"></div>
    <div class="caption">
      <h1>Title</h1>
      <p>Lorem ipsum dolor sit ctetur adipisc ipsum dingsbums</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCarouselSingle",
  data() {
    return {
      paused: true
    };
  },
  methods: {
    playVideoOnClick() {
      var video = this.$refs["full-video"];
      var image = this.$refs["play-icon-full-video"];
      var bgGradient = document.querySelector(".full-video-bg-gradient");
      var caption = document.querySelector(".caption");
      if (this.paused) {
        video.play();
        image.style = bgGradient.style = caption.style = "opacity: 0;";
        setTimeout(() => {
          bgGradient.style.display = "none";
        }, 300);
      } else {
        video.pause();
        image.style = bgGradient.style = caption.style = "opacity: 1;";
        setTimeout(() => {
          bgGradient.style.display = "block";
        }, 300);
      }
      this.paused = !this.paused;
    }
  }
};
</script>