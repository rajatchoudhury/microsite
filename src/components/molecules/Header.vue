<template>
     <div class="container-fluid navbar--horizontal">
      <div class="row">
        <div class="col-12">
          <div class="container container-inside">
            <div class="row">
              <div class="col-12 topnav" v-bind:class="{ 'responsive-nav': isResponsiveNav }">
                <a v-for="(section, index) in selectedMenu"
                :id="section.id"
                @click="scrollTo(section.anchor)"
                data-bi-area="top-nav-menu"
                :index="index"
                :key="index"
                class="nav-item">
                  {{ section.name }}
                </a>
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
	import ScrollMagic from 'scrollmagic';
  import {String} from 'core-js';
  // import { ScrollTo } from "scroll-to-position";

	import scrollTo from '@/mixins/scrollTo';

	export default {
  name: "Header",
  mixins: [scrollTo],
  components: {
      VueSlider
    },
  data() {
    return {
      value: 'ABOUT',
      data: ['DXP', 'ABOUT', 'CASES', 'ENGAGEMENT', 'ENGAGEMENT'],
      selectedMenu :  [
            { "name": 'DXP', "id": 'navigation--section-nav-performance' },
            { "name": 'ABOUT', "id": 'navigation--section-nav-availability' },
            { "name": 'CASES', "id": 'navigation--section-nav-security' },
            { "name": 'ENGAGEMENT', "id": 'navigation--section-nav-scalability' },
            { "name": 'ENGAGEMENT', "id": 'navigation--section-nav-management' }
        ],
      isResponsiveNav: false
    };
  },
  methods: {
    toggleNav: function() {
      this.isResponsiveNav = !this.isResponsiveNav;
    },
  },
  watch:{
    value: function(val) {
    },
  }
  
}
</script>
<style lang="scss" scoped>
.navbar--horizontal {
  background-color: $bg--grey;
  z-index: 10;
  width: 100% !important;
  transition: all 250ms ease;
  height: 55px;
  @include media-breakpoint-up(xl) {
    height: auto;
    // display: none;
    opacity: 1;
    // pointer-events: none;
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
          &:last-child {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>
