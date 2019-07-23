
<script>
import AppLogo from "../atoms/AppLogo";
import HomePageBanner from "../molecules/HomePageBanner";
import gradientBanner from "../molecules/gradientBanner";
import CustomInput from "../molecules/CustomInput";
import BannerComponent from "../molecules/BannerComponent";
import SliderBanner from "../molecules/SliderBanner.vue";
import VideoCarousel from "../molecules/VideoCarousel.vue";
import VideoCarouselv2 from "../molecules/VideoCarouselv2.vue";
import VideoCarouselSingle from "../molecules/VideoCarouselSingle.vue";
import AppCard from "../molecules/AppCard";
import Partners from "../molecules/Partners.vue";

export default {
  name: "ListOfComponent",
  render(createElement) {
    return (
      <div>
        <BannerComponent dataRef={this.dataRef} />
        <SliderBanner />
        <VideoCarousel />
        <VideoCarouselSingle />
        <VideoCarouselv2 />
        <AppCard variation="top-right" />
        <AppCard variation="card-double" />
        <Partners />
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
      ],
      dataRef: {
        picked: "bottom-left",
        angle: 50,
        textscale: 1.2,
        backgroundImage: "th.jpg",
        headerText: "Lorem",
        subHeaderText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      dataRef1: {
        picked: "bottom-right",
        angle: 50,
        textscale: 1.2,
        backgroundImage: "Zensar-Eon-01.jpg",
        headerText: "Lorem",
        subHeaderText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    };
  }
};
</script>