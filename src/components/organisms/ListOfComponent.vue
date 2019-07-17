
<script>
import AppLogo from "../atoms/AppLogo";
import HomePageBanner from "../molecules/HomePageBanner";
import gradientBanner from "../molecules/gradientBanner";
import CustomInput from "../molecules/CustomInput";
import BannerComponent from "../molecules/BannerComponent";
import SliderBanner from "../molecules/SliderBanner.vue";
import VideoCarousel from "../molecules/VideoCarousel.vue";
export default {
  name: "ListOfComponent",
  render(createElement) {
    return (
      <div>
        <HomePageBanner />
        <BannerComponent />
        <SliderBanner />
        <VideoCarousel />
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