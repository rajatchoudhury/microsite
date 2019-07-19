<template>
    <div class="container-fluid navbar--horizontal">
      <div class="row">
        <div class="col-12">
          <div class="container slider">
            <div class="row">
             
              <div class="col-md-12 col-lg-4 slider__options">
                  <a>
                    <vue-slider
                      v-model="value"
                      :marks="true"
                      :data="data"
                      data-bi-area="navigation:year-slider-bar"
                    >
                      <template  data-bi-area="navigation:year-slider-bar">
                        <a data-bi-area="navigation:year-slider-bar">
                        </a>
                      </template>
                    </vue-slider>
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

	// import scrollTo from '@/mixins/scrollTo';

	export default {
  name: "Header",
  // mixins: [scrollTo],
  components: {
      VueSlider
    },
  data() {
    return {
      sections: [
            { "name": 'Performance', "anchor": '#DXP', "id": 'navigation--section-nav-performance' },
            { "name": 'Availability', "anchor": '#ABOUT', "id": 'navigation--section-nav-availability' },
            { "name": 'Security', "anchor": '#CASES', "id": 'navigation--section-nav-security' },
            { "name": 'Scalability', "anchor": '#ENGAGEMENT', "id": 'navigation--section-nav-scalability' },
            { "name": 'Management', "anchor": '#TEAM', "id": 'navigation--section-nav-management' },
            { "name": 'Business intelligence', "anchor": '#row_business_intelligence', "id": 'navigation--section-nav-business_intelligence' },
        ],
      selectedMenu:  [
            { "name": 'Performance', "anchor": '#DXP', "id": 'navigation--section-nav-performance' },
            { "name": 'Availability', "anchor": '#ABOUT', "id": 'navigation--section-nav-availability' },
            { "name": 'Security', "anchor": '#CASES', "id": 'navigation--section-nav-security' },
            { "name": 'Scalability', "anchor": '#ENGAGEMENT', "id": 'navigation--section-nav-scalability' },
            { "name": 'Management', "anchor": '#TEAM', "id": 'navigation--section-nav-management' },
            { "name": 'Business intelligence', "anchor": '#row_business_intelligence', "id": 'navigation--section-nav-business_intelligence' },
        ],
      value: 'ABOUT',
      data: ['DXP', 'ABOUT', 'CASES', 'ENGAGEMENT', 'TEAM'],
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
  },
  mounted() {
    // var controller = new ScrollMagic.Controller();

    //Sticky Navbar
    //  new ScrollMagic.Scene({
    //   triggerElement: '.navbar--horizontal',
    //   triggerHook: 'onLeave'
    // })
    // .setPin('.navbar--horizontal', {pushFollowers: false})
    // .addTo(controller);

    // Show Navbar on scroll
    //  new ScrollMagic.Scene({
    //   triggerElement: '.pagesection__performance',
    //   triggerHook: 'onEnter'
    // })
    // .setClassToggle('.navbar--horizontal, .scrollmagic-pin-spacer', 'show')
    // .offset(500)
    // .addTo(controller);
    // Show Sticky on scroll
    //  new ScrollMagic.Scene({
    //   triggerElement: '.pagesection__performance',
    //   triggerHook: 'onEnter'
    // })
    // .setClassToggle('.cta-circle--footer', 'block')
    // .offset(500)
    // .addTo(controller);
    // Selected nav item
	// this.sections.forEach(element => {
	//   new ScrollMagic.Scene({
	// 	  triggerElement: '.row-' + element.id.replace('navigation--section-nav-', ''),
	// 	  duration: "100%"
	//   })
	// 	  .setClassToggle('#' + element.id, 'active')
	// 	  .addTo(controller);
	// });
  }
}
</script>
