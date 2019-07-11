
<script>
import TextField from "../atoms/test";
import AppLogo from "../atoms/AppLogo";
import HorizontalNav from "../molecules/HorizontalNav";
import HomePageBanner from "../molecules/HomePageBanner";

export default {
  name: "NavBar",
  render(createElement) {
    return (
      <div>
        <HomePageBanner />{" "}
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