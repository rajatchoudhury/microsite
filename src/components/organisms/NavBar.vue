
<script>
import TextField from "../atoms/test";
import AppLogo from "../atoms/AppLogo";
import HorizontalNav from "../molecules/HorizontalNav";
import HomePageBanner from "../molecules/HomePageBanner";
import gradientBanner from "../molecules/gradientBanner";
import CustomInput from "../molecules/CustomInput";
import FullPageBanner from "../molecules/FullPageBanner";
export default {
  name: "NavBar",
  render(createElement) {
    return (
      <div>
        <CustomInput />
        <FullPageBanner />
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