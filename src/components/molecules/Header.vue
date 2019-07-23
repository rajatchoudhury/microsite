<template>
     <div class="container-fluid stickytop navbar--horizontal">
      <div class="row">
        <div class="col-12">
          <div class="container container-inside">
            <div class="row">
              <div class="col-12 topnav stickytop__titlewrapper titlewrapper--toggle" v-bind:class="{ 'responsive-nav': isResponsiveNav }">
                <a v-for="(section, index) in selectedMenu"
                data-bi-area="top-nav-menu"
                :index="index"
                :key="index"
                @click="toggleNav()"
                :href="'#' + section.id"
                class="nav-item">
                  {{ section.name }}
                </a>
                <h1>ZenSar</h1>
              </div>

              <div class="carrot-container">
                <a
                  class="icon-ham"
                  v-bind:class="{ 'open': isResponsiveNav }"
                  @click="toggleNav()"
                  id="navigation:hamburger-menu-toggle"
                  data-bi-id="navigation:hamburger-menu-toggle"
                  data-bi-area="mobile-home-page-navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	// import "@pnp/polyfill-ie11";
	import VueSlider from 'vue-slider-component';
	import 'vue-slider-component/theme/default.css';
  import {String} from 'core-js';
	export default {
  name: "Header",
  // mixins: [scrollTo],
  components: {
      VueSlider
    },
  data() {
    return {
      value: 'ABOUT',
      data: ['DXP', 'ABOUT', 'CASES', 'ENGAGEMENT', 'ENGAGEMENT'],
      selectedMenu :  [
            { "name": 'DXP', "id": 'dxp' },
            { "name": 'ABOUT', "id": 'about' },
            { "name": 'CASES', "id": 'cases' },
            { "name": 'ENGAGEMENT', "id": 'engagement' },
            { "name": 'TEAM', "id": 'team' }
        ],
      isResponsiveNav: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.resizeHeader);
  },
  destroyed() {
    delete window.sticky;
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.resizeHeader);
  },
  methods: {
    toggleNav: function() {
      debugger;
      if(window.outerWidth < 1084){
        this.isResponsiveNav = !this.isResponsiveNav;
      }
    },
    handleScroll() {
      // Followin code is used to add sticky navigation bar in IE. As position sticky does not work in IE we have to do it in javascript
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        // If Internet Explorer, return version number
        var header = document.getElementById("sticky_header");
        // I am commenting below line because this is causing sticky issue in IE.
        if (!window.sticky) {
          window.sticky = header.offsetTop;
        }
        if (window.pageYOffset > sticky) {
          header.style.position = "fixed";
          header.style.width = "81.14%";
          header.style.top = "-20px";
        } else {
          header.style.width = "100%";
          header.style.top = "0px";

          if (
            window.pageYOffset < sticky &&
            header.style.position != "static"
          ) {
            header.style.position = "static";
          }
        }
      }
      // End of Sticky navbar code for IE
    }
  },
  watch:{
    value: function(val) {
    },
  }
  
}
</script>
<style lang="scss" scoped>
.navbar--horizontal {
  background-color: $bg--black;
  z-index: 10;
  width: 100% !important;
  transition: all 250ms ease;
  height: 55px;
  @include media-breakpoint-up(xl) {
    height: auto;
    opacity: 1;
  }
  .container-inside {
    .topnav {
      overflow: auto;
      display: none;
      @include align-items(center);
      height: 90px;
      & > a {
        font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", sans-serif !important;
        font-weight: normal;
        color : $text--white;
        margin-right: 20px;
        padding: 15px 0;
        text-decoration: none;
        @include transition( color, .4s, ease-in-out, 0s);
        cursor: pointer;
        &:hover {
          color: $text--cyan;
        }
      }
      a:hover {
        color: $text--cyan;
      }
      .active {
        color: $text--cyan;
      }
      @include media-breakpoint-up(xl) {
        @include flexbox;
      }
      h1{
        color:white;
        margin-left:auto;
      }
    }
    .carrot-container {
      position: absolute;
      @include flexbox;
      padding: 18px 5px;
      z-index: 6;
      width: 90%;
      @include media-breakpoint-down(xl) {
        align-items: center;
        .icon-ham {
          width: 20px;
          height: 20px;
          margin-left: auto;
          @include rotate(0deg);
          @include transition(all, .3s, ease-in-out, 0s);
          cursor: pointer;
          span {
            position: absolute;
            height: 2px;
            width: 100%;
            background: $text--white;
            @include opacity(1);
            left: 0;
            @include rotate(0deg);
            @include transition(all, .3s, ease-in-out, 0s);
            -webkit-transform-origin: left center;
            -moz-transform-origin: left center;
            -o-transform-origin: left center;
            transform-origin: left center;
          }
          span:nth-child(1) {
            top: 0px;
          }
          span:nth-child(2) {
            top: 5px;
          }
          span:nth-child(3) {
            top: 10px;
          }
        }
        .icon-ham.open span:nth-child(1) {
          @include rotate(45deg);
          top: 2px;
          left: 3px;
        }
        .icon-ham.open span:nth-child(2) {
          width: 0%;
          @include opacity(0);
        }
        .icon-ham.open span:nth-child(3) {
          @include rotate(-45deg);
          top: 16px;
          left: 3px;
        }
      }
      @include media-breakpoint-up(xl) {
        display: none;
      }

    }
    @include media-breakpoint-down(xl) {
      width: 100%;
      margin: 0 auto;
      .responsive-nav {
        display: block;
        height: auto;
        width:100%;
        
        background: black;
        position: absolute;
        right: 1px;
        border: 1px solid white;
        padding-top: 35px;
        top: -1px;
        z-index: 6;
        a {
          float: none;
          display: block;
          color : $text--white;
          text-align: center;
          &:last-child {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}

.stickytop {
  position: sticky;
  top: 0px;
  z-index: 1;
  height: 75px;
  padding: 0;
  margin: 0;
  @include media-breakpoint-down(md) {
    height: 52px;
  }
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
}
</style>
