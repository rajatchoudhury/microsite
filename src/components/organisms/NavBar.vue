
<script>
import TextField from "../atoms/test";
import AppLogo from "../atoms/AppLogo";
import HorizontalNav from "../molecules/HorizontalNav";
import HomePageBanner from "../molecules/HomePageBanner";
import gradientBanner from "../molecules/gradientBanner";
import CustomInput from "../molecules/CustomInput";
export default {
  name: "NavBar",
  render(createElement) {
    return (
      <div>
        <CustomInput />{" "}
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