<template>
  <div class="sliderBanner">
    <b-carousel
      class="sliderBanner__carousel"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      no-animation
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide class="sliderBanner__carousel--item">
        <img src="../assets/slides/slide_1.png" slot="img" class="d-block img-fluid w-100" />
      </b-carousel-slide>

      <b-carousel-slide class="sliderBanner__carousel--item">
        <img src="../assets/slides/slide_2.png" slot="img" class="d-block img-fluid w-100" />
      </b-carousel-slide>

      <b-carousel-slide class="sliderBanner__carousel--item">
        <img src="../assets/slides/slide_1.png" slot="img" class="d-block img-fluid w-100" />
      </b-carousel-slide>

      <b-carousel-slide class="sliderBanner__carousel--item">
        <img src="../assets/slides/slide_2.png" slot="img" class="d-block img-fluid w-100" />
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      currentSlide: 0,
      sliderTimer: undefined
    };
  },
  mounted() {
    this.resetSlider();
  },
  methods: {
    makeSlideAnimation(isNext) {
      alert("" + isNext);
      if (isNext) {
        var cSlide = document.querySelectorAll(
          ".sliderBanner__carousel--item.active"
        )[0];

        cSlide.classList.add("zoomout--right");

        if (cSlide.nextSibling !== null) {
          cSlide.nextSibling.classList.add("zoomin--right");
        } else {
          document
            .querySelectorAll(".sliderBanner__carousel--item")[0]
            .classList.add("zoomin--right");
        }
      } else {
        var cSlide = document.querySelectorAll(
          ".sliderBanner__carousel--item.active"
        )[0];

        cSlide.classList.add("zoomout--left");

        if (cSlide.previousSibling !== null) {
          cSlide.previousSibling.classList.add("zoomin--left");
        } else {
          var domElements = document.querySelectorAll(
            ".sliderBanner__carousel--item"
          );
          domElements[domElements.length - 1].classList.add("zoomin--left");
        }
      }
    },
    onSlideStart(slide) {
      let clsObj = this;
      if (this.sliderTimer !== undefined) {
        clearTimeout(this.sliderTimer);
        clsObj.resetSlider();
      }
      var totalSlide = document.querySelectorAll(
        ".sliderBanner__carousel--item"
      ).length;
      this.sliding = true;
      var isNextBtn = true;

      if (totalSlide === this.currentSlide + 1 && slide === 0) {
        isNextBtn = true;
      } else if (this.currentSlide === 0 && slide === totalSlide - 1) {
        isNextBtn = false;
      } else if (slide >= this.currentSlide) {
        isNextBtn = true;
      } else {
        isNextBtn = false;
      }
      if (isNextBtn) {
        this.makeSlideAnimation(true);
      } else {
        this.makeSlideAnimation(false);
      }
      this.currentSlide = slide;
    },
    onSlideEnd(slide) {
      this.sliding = false;
      this.resetClassNames("tilteffectY");
      var cObj = this;

      this.sliderTimer = setTimeout(function() {
        cObj.resetSlider();
      }, 3000);
    },
    resetSlider() {
      var cObj = this;
      var cSlide = document
        .querySelectorAll(".sliderBanner__carousel--item.active")[0]
        .classList.add("tilteffectY");
      cObj.resetClassNames("zoomin--right");
      cObj.resetClassNames("zoomout--right");
      cObj.resetClassNames("zoomin--left");
      cObj.resetClassNames("zoomout--left");
    },
    resetClassNames(clsName) {
      var cls = document.querySelectorAll("." + clsName);
      if (cls !== null && cls.length !== 0) {
        for (var i = 0; i < cls.length; i++) {
          var dom = cls[i].classList.remove(clsName);
        }
      }
    }
  }
};
</script>
