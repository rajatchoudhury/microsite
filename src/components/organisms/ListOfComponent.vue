
<script>
import AppLogo from "../atoms/AppLogo";
import HorizontalNav from "../molecules/HorizontalNav";
import HomePageBanner from "../molecules/HomePageBanner";
import gradientBanner from "../molecules/gradientBanner";
import CustomInput from "../molecules/CustomInput";
import FullPageBanner from "../molecules/FullPageBanner";
import SliderBanner from "../molecules/SliderBanner.vue";
import VideoCarousel from "../molecules/VideoCarousel.vue";
import videoCarouselv2 from "../molecules/videoCarouselv2.vue";

export default {
  name: "ListOfComponent",
  render(createElement) {
    return (
      <div>
        <HomePageBanner />
        <FullPageBanner />
        <SliderBanner />
        <VideoCarousel />
        <videoCarouselv2/>
      </div>
    );
  },
  data() {
    return {
      links: [
        {
          path: "/",
          label: "Test"
        },
        {
          path: "/about",
          label: "About"
        },
        {
          path: "/test",
          label: "Test"
        },
        {
          path: "/organisms",
          label: "Organisms"
        }
      ]
    };
  }
};
</script>