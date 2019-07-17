<template>
  <div class>
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
              @change="setIntervalAnimationZero(angle, false, true, angle) "
            />
          </th>
          <th>{{angle}}</th>
        </tr>
        <tr>
          <th>Title and description:</th>
          <th colspan="2">
            <label>
              Left Text
              <input type="radio" id="one" value="aligncontentleft" v-model="picked" />
            </label>&nbsp;
            <label>
              right Text
              <input type="radio" id="two" value="aligncontentright" v-model="picked" />
            </label>
          </th>
        </tr>
      </thead>
    </table>
    <div class="container-fluid fpbanner fullpagebanner">
      <div class="row">
        <div class="col-md-12 fpbanner__text" :class="picked">
          <div class="fpbanner__text--para pos--rel">
            <h3 class="fpbanner__heading f-3rem fromTopanim">
              <span class="fpbanner__heading--ptext m10">Lorem Ipsum</span>
            </h3>

            <h2 class="fpbanner__fpl2 f-2rem fromBottomanim">
              <span class="fpbanner__fpl2--fpl2text m10">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: "aligncontentleft",
      angle: 50,
      textscale: 1.2
    };
  },
  mounted() {
    this.changeKeyFrames();
    this.zoomInOut(true, 500);
  },
  methods: {
    changeKeyFrames() {
      var ss = document.styleSheets;
      for (var i = 0; i < ss.length; ++i) {
        for (var j = 0; j < ss[i].cssRules.length; ++j) {
          if (
            (ss[i].cssRules[j].type === window.CSSRule.KEYFRAMES_RULE ||
              ss[i].cssRules[j].type ===
                window.CSSRule.WEBKIT_KEYFRAMES_RULE) &&
            ss[i].cssRules[j].name == "fpBanner"
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
    },
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
        .querySelectorAll(".fullpagebanner")[0]
        .classList.remove("zoom-outeffect");
      setTimeout(() => {
        document.querySelectorAll(".fullpagebanner")[0].classList.add(zoom);
      }, 500);
      setTimeout(() => {
        document.querySelectorAll(".fullpagebanner")[0].classList.remove(zoom);
        document
          .querySelectorAll(".fullpagebanner")[0]
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
        var tiltbanner = document.querySelectorAll(".fpbanner")[0];
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
        var tiltbanner = document.querySelectorAll(".fpbanner")[0];
        counter++;
        if (counter == 100) {
          clearInterval(timer);
          if (isFirstInt) {
            this.setIntervalAnimationZero(counter, false, false, speed);
          }
        }
        tiltbanner.style.backgroundPosition = counter + "% 0";
      }, speed);
    }
  }
};
</script>






