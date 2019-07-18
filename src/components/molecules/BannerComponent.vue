<template>
  <div class>
    <br />
    <table>
      <thead>
        <tr>
          <th colspan="3" class="herotitle">Hero Banner</th>
        </tr>
        <tr>
          <th>Zoom Effect:</th>
          <th>
            <input
              type="radio"
              name="points"
              value="zoomSelected"
              v-model="zoomSelected"
              @change="zoomInOut() "
            />
          </th>
          <th>Zoom Range</th>
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
          <th>Panorama Effect:</th>
          <th>
            <input
              type="radio"
              name="points"
              value="ponaramaSelected"
              v-model="zoomSelected"
              @change="setIntervalAnimationZero(-25, false, true, angle) "
            />
          </th>
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
          <th>Tilt Effect:</th>
          <th>
            <input
              type="checkbox"
              name="points"
              v-model="tiltSelected"
              @change="startTiltEffect() "
            />
          </th>
          <th>{{tiltSelected}}</th>
        </tr>
        <tr>
          <th>Title and description:</th>
          <th colspan="5">
            <label>
              Left Text
              <input type="radio" id="one" value="bottom-left" v-model="dataRef.picked" />
            </label>&nbsp;
            <label>
              Center Text
              <input
                type="radio"
                id="two"
                value="center-center"
                v-model="dataRef.picked"
              />
            </label>&nbsp;
            <label>
              right Text
              <input type="radio" id="two" value="bottom-right" v-model="dataRef.picked" />
            </label>
          </th>
        </tr>
      </thead>
    </table>
    <div class="container-fluid fpbanner" ref="container">
      <div class="imgcontainer">
        <img
          :src="getImage(dataRef.backgroundImage)"
          alt="banner"
          class="fpbanner__img"
          ref="fpbannerimg"
        />
      </div>
      <div class="row fpbanner__row">
        <div class="col-md-12" :class="dataRef.picked">
          <div class="fpbanner__container pos--rel">
            <h3 class="fpbanner--header f-3rem fromtopanim">
              <span class="fpbanner--text m10">{{dataRef.headerText}}</span>
            </h3>
            <h2 class="fpbanner__subheader f-2rem frombottomanim">
              <span class="fpbanner__subheader--text m10">{{dataRef.subHeaderText}}</span>
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
      angle: 50,
      textscale: 1.2,
      zoomSelected: "zoomSelected",
      tiltSelected: false
    };
  },
  props: {
    dataRef: {
      type: Object,
      required: true
    }
  },
  mounted() {
    //this.changeKeyFrames();
    this.zoomInOut(true, 500);
    //this.startTiltEffect();
  },
  methods: {
    getImage(img) {
      return require("@/assets/" + img);
    },
    startTiltEffect() {
      var counter = 10;
      var timer = setInterval(() => {
        if (this.tiltSelected) {
          counter++;
          if (counter == 20) {
            this.infiniteTilt(0.018, -0.17);
          } else if (counter == 40) {
            this.infiniteTilt(0.75, 0.17);
          } else if (counter == 60) {
            this.infiniteTilt(0.36, 0.16);
          } else if (counter == 80) {
            this.infiniteTilt(0.35, -0.17);
            counter = 20;
          }
        } else {
          clearInterval(timer);
        }
      }, 40);
    },
    infiniteTilt(x, y) {
      var container = this.$refs.container,
        inner = this.$refs.fpbannerimg;

      var onMouseEnterHandler = function(event) {
        update(event);
      };
      var update = function() {
        updateTransformStyle(x, y);
      };

      var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTranform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
      };
      onMouseEnterHandler();
    },
    changeKeyFrames() {
      // Init
      var container = this.$refs.container,
        inner = this.$refs.fpbannerimg;

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

      //----------------------------------------------------

      var counter = 0;
      var refreshRate = 10;
      var isTimeToUpdate = function() {
        return counter++ % refreshRate === 0;
      };

      //----------------------------------------------------

      var onMouseEnterHandler = function(event) {
        update(event);
      };

      var onMouseLeaveHandler = function() {
        inner.style = "";
      };

      var onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
          update(event);
        }
      };

      //----------------------------------------------------

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
        inner.style.mozTranform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
      };

      //--------------------------------------------------------
      if (this.tiltSelected) {
        container.onmousemove = onMouseMoveHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmouseenter = onMouseEnterHandler;
      } else {
        container.onmousemove = "";
        container.onmouseleave = "";
        container.onmouseenter = "";
      }
    },
    zoomInOut(isFirst) {
      if (this.zoomSelected == "zoomSelected") {
        var zoom = "zoom-effect";
        if (this.textscale == 1.2) {
          zoom = "zoom-effect";
        } else if (this.textscale == 1.4) {
          zoom = "zoom-effect_steptwo";
        } else if (this.textscale == 1.6) {
          zoom = "zoom-effect_stepthree";
        }
        this.$refs.fpbannerimg.classList.remove("zoom-outeffect");
        this.$refs.fpbannerimg.classList.remove("zoom-effect");
        this.$refs.fpbannerimg.classList.remove("zoom-effect_steptwo");
        this.$refs.fpbannerimg.classList.remove("zoom-effect_stepthree");
        setTimeout(() => {
          this.$refs.fpbannerimg.classList.add(zoom);
        }, 500);
        setTimeout(() => {
          this.$refs.fpbannerimg.classList.add("zoom-outeffect");
          this.$refs.fpbannerimg.classList.remove(zoom);
        }, 2000);
        setTimeout(() => {
          this.$refs.fpbannerimg.classList.remove("zoom-outeffect");
        }, 5000);
      }

      setTimeout(() => {
        if (isFirst && this.zoomSelected == "ponaramaSelected") {
          this.setIntervalAnimationZero(-25, false, true, 50);
        }
      }, 3000);
    },
    setIntervalAnimationZero(count, isFirstInt, isSecondInt, speed) {
      if (this.zoomSelected == "ponaramaSelected") {
        var counter = count;
        var timer = "";
        var timer = setInterval(() => {
          var tiltbanner = this.$refs.fpbannerimg;
          // counter = counter - 0.2;
          // if (Math.round(counter) == -49) {
          counter--;
          if (counter == -49) {
            clearInterval(timer);
            if (isSecondInt) {
              this.setIntervalAnimation(counter, false, true, speed);
            }
          }
          tiltbanner.style.left = counter + "%";
        }, speed);
      }
    },
    setIntervalAnimation(count, isFirstInt, isSecondInt, speed) {
      var counter = count;
      var timer = "";
      var timer = setInterval(() => {
        var tiltbanner = this.$refs.fpbannerimg;
        // counter = counter + 0.2;
        // if (Math.round(counter) == -25) {
        counter++;
        if (counter == -25) {
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






