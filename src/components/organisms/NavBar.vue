
<script>
import TextField from "../atoms/AppVideo";
import Banner from "../molecules/Banner";
import AppLogo from "../atoms/AppLogo";
import HorizontalNav from "../molecules/HorizontalNav";

export default {
  name: "NavBar",
  render(createElement) {
    return (
      <div>
        {" "}
        <Banner />{" "}
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
