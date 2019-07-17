<template>
  <div>
    <div class="slideshow-container">
      <div class="mySlides fade">
        <video class="video-fluid" width="100%" autoplay loop muted>
          <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
        </video>
        <div class="text">
          Title
          <span class="desc">Lorem ipsum dolor sit amet</span>
        </div>
      </div>

      <div class="mySlides fade">
        <video class="video-fluid" width="100%" autoplay loop muted>
          <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
        </video>
        <div class="text">
          Title
          <span class="desc">Lorem ipsum dolor sit amet</span>
        </div>
      </div>

      <div class="mySlides fade">
        <video class="video-fluid" width="100%" autoplay loop muted>
          <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
        </video>
        <div class="text">
          Title
          <span class="desc">Lorem ipsum dolor sit amet</span>
        </div>
      </div>

      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>

      <div class="dots" style="text-align:center">
        <span class="dot" @click="currentSlide(1)">
          <div class="show"></div>
        </span>
        <span class="dot" @click="currentSlide(2)">
          <div class="show"></div>
        </span>
        <span class="dot" @click="currentSlide(3)">
          <div class="show"></div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCarousel",
  data() {
    return {
      slideIndex: 1
    };
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      if (slides.length) {
        slides[this.slideIndex - 1].style.display = "block";
      }
      if (dots.length) {
        dots[this.slideIndex - 1].className += " active";
      }
    }
  },
  mounted() {
    this.showSlides(this.slideIndex);
  }
};
</script>
