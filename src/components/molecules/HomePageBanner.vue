<template>
  <div>
    <br />
    <table>
      <thead>
        <tr>
          <th colspan="3" class="herotitle">Hero Banner</th>
        </tr>
        <tr>
          <th>Zoom</th>
          <th>
            <input
              type="range"
              name="points"
              min="1.2"
              max="1.6"
              step="0.2"
              v-model="textscale"
              @change="zoomInOut()"
            />
          </th>
          <th>{{textscale}}</th>
        </tr>
        <tr>
          <th>Panorama Speed:</th>
          <th>
            <input
              type="range"
              name="points"
              min="30"
              max="80"
              step="10"
              v-model="angle"
              @change="setIntervalAnimationZero(50, false, true, angle) "
            />
          </th>
          <th>{{angle}}</th>
        </tr>
      </thead>
    </table>
    <div class="container-fluid homepagebanner">
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-md-12 banner txt-center">
          <div class="banner__dxp pos--rel">
            <span class="banner__textbanner pad-top40">
              <h4 class="f-8rem banner__textbanner--headerText fromTopanim">DXP</h4>
            </span>

            <span class="banner__bltext">
              <h3 class="f-5rem banner__bltext--paraText fromBottomanim">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      textscale: 1.2,
      angle: 50
    };
  },
  mounted() {
    this.zoomInOut(true);
  },
  methods: {
    zoomInOut(isFirst) {
      var zoom = "zoom-effect";
      if (this.textscale == 1.2) {
        zoom = "zoom-effect";
      } else if (this.textscale == 1.4) {
        zoom = "zoom-effect_steptwo";
      } else if (this.textscale == 1.6) {
        zoom = "zoom-effect_stepthree";
      }
      document
        .querySelectorAll(".homepagebanner")[0]
        .classList.remove("zoom-outeffect");
      setTimeout(() => {
        document.querySelectorAll(".homepagebanner")[0].classList.add(zoom);
      }, 500);
      setTimeout(() => {
        document.querySelectorAll(".homepagebanner")[0].classList.remove(zoom);
        document
          .querySelectorAll(".homepagebanner")[0]
          .classList.add("zoom-outeffect");
      }, 2000);
      setTimeout(() => {
        if (isFirst) {
          this.setIntervalAnimationZero(50, false, true, 50);
        }
      }, 3000);
    },
    setIntervalAnimationZero(count, isFirstInt, isSecondInt, speed) {
      var counter = count;
      var timer = "";
      var timer = setInterval(() => {
        var tiltbanner = document.querySelectorAll(".banner")[0];
        counter--;
        if (counter == 0) {
          clearInterval(timer);
          if (isSecondInt) {
            this.setIntervalAnimation(counter, false, true, speed);
          }
        }
        tiltbanner.style.backgroundPosition = counter + "% 0";
      }, speed);
    },
    setIntervalAnimation(count, isFirstInt, isSecondInt, speed) {
      var counter = count;
      var timer = "";
      var timer = setInterval(() => {
        var tiltbanner = document.querySelectorAll(".banner")[0];
        counter++;
        if (counter == 100) {
          clearInterval(timer);
          if (isFirstInt) {
            this.setIntervalAnimationZero(counter, false, false, speed);
          }
        }
        tiltbanner.style.backgroundPosition = counter + "% 0";
      }, speed);
    },
    changeKeyFrames() {
      var ss = document.styleSheets;
      for (var i = 0; i < ss.length; ++i) {
        for (var j = 0; j < ss[i].cssRules.length; ++j) {
          if (
            (ss[i].cssRules[j].type === window.CSSRule.KEYFRAMES_RULE ||
              ss[i].cssRules[j].type ===
                window.CSSRule.WEBKIT_KEYFRAMES_RULE) &&
            ss[i].cssRules[j].name == "hpbanner"
          ) {
            var keyframes = ss[i].cssRules[j];
            keyframes.deleteRule("50%");
            keyframes.deleteRule("75%");
            keyframes.appendRule(
              "50% { -moz-transform: perspective(1200px) rotateY(10deg); -webkit-transform: perspective(1200px) rotateY(" +
                this.angle +
                "deg); }"
            );
            keyframes.appendRule(
              "75% { -moz-transform:perspective(1200px) rotateY(10deg); -webkit-transform: perspective(1200px) rotateY(-" +
                this.angle +
                "deg); }"
            );
          }
        }
      }
    }
  }
};
</script>






