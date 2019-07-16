<template>
  <div class="homepagebanner">
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
              min="1"
              max="10"
              v-model="textscale"
              @change="zoomInOut()"
            />
          </th>
          <th>{{textscale}}</th>
        </tr>
        <tr>
          <th>Angle Tilt:</th>
          <th>
            <input
              type="range"
              name="points"
              min="0"
              max="50"
              v-model="angle"
              @change="changeKeyFrames()"
            />
          </th>
          <th>{{angle}}</th>
        </tr>
      </thead>
    </table>
    <div class="container-fluid">
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
      textscale: 0,
      angle: 10
    };
  },
  mounted() {
    this.zoomInOut();
  },
  methods: {
    zoomInOut() {
      setTimeout(function() {
        document
          .querySelectorAll(".homepagebanner")[0]
          .classList.add("zoom-effect");
      }, 500);
      setTimeout(function() {
        document
          .querySelectorAll(".homepagebanner")[0]
          .classList.add("zoom-outeffect");
      }, 2000);
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






