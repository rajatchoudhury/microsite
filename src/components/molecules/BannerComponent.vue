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
              @change="setIntervalAnimationZero(-25, false, true, angle) "
            />
          </th>
          <th>{{angle}}</th>
        </tr>
        <tr>
          <th>Title and description:</th>
          <th colspan="2">
            <label>
              Left Text
              <input type="radio" id="one" value="bottom-left" v-model="picked" />
            </label>&nbsp;
            <label>
              Center Text
              <input type="radio" id="two" value="center-center" v-model="picked" />
            </label>&nbsp;
            <label>
              right Text
              <input type="radio" id="two" value="bottom-right" v-model="picked" />
            </label>
          </th>
        </tr>
      </thead>
    </table>
    <div class="container-fluid fpbanner">
      <div class="imgcontainer">
        <img :src="getImage(backgroundImage)" alt="banner" class="fpbanner__img" />
      </div>
      <div class="row fpbanner__row">
        <div class="col-md-12" :class="picked">
          <div class="fpbanner__container pos--rel">
            <h3 class="fpbanner--header f-3rem fromtopanim">
              <span class="fpbanner--text m10">{{headerText}}</span>
            </h3>
            <h2 class="fpbanner__subheader f-2rem frombottomanim">
              <span class="fpbanner__subheader--text m10">{{subHeaderText}}</span>
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
      textscale: 1.2,
      backgroundImage: "Zensar-Eon-01.jpg",
      headerText: "Lorem Ipsum",
      subHeaderText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    };
  },
  mounted() {
    this.changeKeyFrames();
    this.zoomInOut(true, 500);
  },
  methods: {
    getImage(img) {
      return require("@/assets/" + img);
    },
    changeKeyFrames() {
      (function() {
        // Init
        var container = document.querySelectorAll(".fpbanner")[0],
          inner = document.querySelectorAll(".fpbanner__img ")[0];

        // Mouse
        var mouse = {
          _x: 0,
          _y: 0,
          x: 0,
          y: 0,
          updatePosition: function(event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
          },
          setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
          },
          show: function() {
            return "(" + this.x + ", " + this.y + ")";
          }
        };

        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(container);

        //-----------------------------------------

        var counter = 0;
        var updateRate = 10;
        var isTimeToUpdate = function() {
          return counter++ % updateRate === 0;
        };

        //-----------------------------------------

        var onMouseEnterHandler = function(event) {
          //update(event);
        };

        var onMouseLeaveHandler = function() {
          inner.style = "";
        };

        var onMouseMoveHandler = function(event) {
          if (isTimeToUpdate()) {
            update(event);
          }
        };

        //-----------------------------------------

        var update = function(event) {
          mouse.updatePosition(event);
          updateTransformStyle(
            (mouse.y / inner.offsetHeight / 2).toFixed(2),
            (mouse.x / inner.offsetWidth / 2).toFixed(2)
          );
        };

        var updateTransformStyle = function(x, y) {
          var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
          inner.style.transform = style;
          inner.style.webkitTransform = style;
          inner.style.mozTransform = style;
          inner.style.msTransform = style;
          inner.style.oTransform = style;
        };

        //-----------------------------------------

        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;
      })();
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
        .querySelectorAll(".fpbanner__img")[0]
        .classList.remove("zoom-outeffect");
      document
        .querySelectorAll(".fpbanner__img")[0]
        .classList.remove("zoom-effect");
      document
        .querySelectorAll(".fpbanner__img")[0]
        .classList.remove("zoom-effect_steptwo");
      document
        .querySelectorAll(".fpbanner__img")[0]
        .classList.remove("zoom-effect_stepthree");
      setTimeout(() => {
        document.querySelectorAll(".fpbanner__img")[0].classList.add(zoom);
      }, 500);
      setTimeout(() => {
        document
          .querySelectorAll(".fpbanner__img")[0]
          .classList.add("zoom-outeffect");
      }, 2000);
      document.querySelectorAll(".fpbanner__img")[0].classList.remove(zoom);
      setTimeout(() => {
        if (isFirst) {
          this.setIntervalAnimationZero(-25, false, true, 50);
        }
      }, 3000);
    },
    setIntervalAnimationZero(count, isFirstInt, isSecondInt, speed) {
      var counter = count;
      var timer = "";
      var timer = setInterval(() => {
        var tiltbanner = document.querySelectorAll(".fpbanner__img")[0];
        counter--;
        if (counter == -49) {
          clearInterval(timer);
          if (isSecondInt) {
            this.setIntervalAnimation(counter, false, true, speed);
          }
        }
        tiltbanner.style.left = counter + "%";
      }, speed);
    },
    setIntervalAnimation(count, isFirstInt, isSecondInt, speed) {
      var counter = count;
      var timer = "";
      var timer = setInterval(() => {
        var tiltbanner = document.querySelectorAll(".fpbanner__img")[0];
        counter++;
        if (counter == 0) {
          clearInterval(timer);
          if (isFirstInt) {
            this.setIntervalAnimationZero(counter, false, false, speed);
          }
        }
        tiltbanner.style.left = counter + "%";
      }, speed);
    }
  }
};
</script>






