import { ScrollTo } from "scroll-to-position";

export default {
  methods: {
    scrollTo(target) {
      ScrollTo(document.querySelector(target), {
        duration: [300, 1000]
      });
    }
  }
};
