<template>
  <div>
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
    <div class="slideshow-container">
      <div class="mySlides">
        <img
          src="../../assets/Big Play button.svg"
          style="width: 150px; position: absolute; left: 45%; top: 30%; "
        />
        <video
          class="video-fluid"
          width="100%"
          onclick="this.paused ? this.play() : this.pause();"
          loop
          muted
        >
          <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
        </video>
        <div class="text" :class="picked">
          Title
          <span class="desc">Lorem ipsum dolor sit amet</span>
        </div>
      </div>

      <div class="mySlides">
        <img
          src="../../assets/Big Play button.svg"
          style="width: 150px; position: absolute; left: 45%; top: 30%;"
        />
        <video
          class="video-fluid"
          width="100%"
          onclick="this.paused ? this.play() : this.pause();"
          loop
          muted
        >
          <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
        </video>
        <div class="text" :class="picked">
          Title
          <span class="desc">Lorem ipsum dolor sit amet</span>
        </div>
      </div>

      <div class="mySlides">
        <img
          src="../../assets/Big Play button.svg"
          style="width: 150px; position: absolute; left: 45%; top: 30%;"
        />
        <video
          class="video-fluid"
          width="100%"
          onclick="this.paused ? this.play() : this.pause();"
          loop
          muted
        >
          <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
        </video>
        <div class="text" :class="picked">
          Title
          <span class="desc">Lorem ipsum dolor sit amet</span>
        </div>
      </div>

      <div class="thumb-container">
        <span class="thumb" @click="currentSlide(1)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(2)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(3)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(1)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(2)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(3)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(1)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(2)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(3)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(1)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(2)">
          <div class="show"></div>
        </span>
        <span class="thumb" @click="currentSlide(3)">
          <div class="show"></div>
        </span>
        <a class="prev" @click="scrollWin(0)">&#10094;</a>
        <a class="next" @click="scrollWin(1)">&#10095;</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCarousel",
  data() {
    return {
      slideIndex: 1,
      left: 0,
      windowWidth: window.innerWidth,
      numberOfNexts: 0,
      allowedNumberOfNext: 0,
      picked: "left"
    };
  },
  methods: {
    scrollWin(n) {
      var thumbWidth =
        document.getElementsByClassName("thumb")[0].offsetWidth + 20;
      if (n) {
        this.left -= thumbWidth;
        this.numberOfNexts++;
        document.querySelectorAll(".prev")[0].style.display = "block";
      } else {
        this.left += thumbWidth;
        this.numberOfNexts--;
      }
      document.querySelectorAll(".thumb").forEach(element => {
        element.style.left = this.left + "px";
        element.style.transition = "left 0.4s ease-in";
      });
      if (this.left === 0) {
        document.querySelectorAll(".prev")[0].style.display = "none";
      }
      if (this.numberOfNexts === this.allowedNumberOfNext) {
        document.querySelectorAll(".next")[0].style.display = "none";
        document.querySelectorAll(".prev")[0].style.display = "block";
      } else {
        document.querySelectorAll(".next")[0].style.display = "block";
      }
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var thumbs = document.getElementsByClassName("thumb");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < thumbs.length; i++) {
        thumbs[i].className = thumbs[i].className.replace(" active", "");
      }
      if (slides.length) {
        slides[this.slideIndex - 1].style.display = "block";
      }
      if (thumbs.length) {
        thumbs[this.slideIndex - 1].className += " active";
      }
    }
  },
  mounted() {
    var thumbs = document.getElementsByClassName("thumb");
    if (this.windowWidth / (thumbs[0].offsetWidth + 20) >= thumbs.length) {
      document.querySelectorAll(".next")[0].style.display = "none";
      document.querySelectorAll(".prev")[0].style.display = "none";
    } else {
      this.allowedNumberOfNext =
        thumbs.length -
        Math.floor(this.windowWidth / (thumbs[0].offsetWidth + 20));
    }
    this.showSlides(this.slideIndex);
  }
};
</script>
