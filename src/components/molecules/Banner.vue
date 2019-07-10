<template>
  <section class="BannerSection">
    <AppVideo
      src="movie.mp4"
      controls
      autoplay
      loop
      type="video/mp4"
      :className="BannerSection__video"
    />
    <div class="BannerSection__animText">
      <div class="BannerSection__animText__left">
        <div class="BannerSection__animText__leftContainer">
          <AppParagraph content="Lorem ipsum dolor" align="BannerSection__animText__left-text" />
          <AppParagraph content=" sit amet," align="BannerSection__animText__left-text" />
          <AppParagraph content="consectetur" align="BannerSection__animText__left-text" />
          <AppParagraph content="adipiscing elit" align="BannerSection__animText__left-text" />
        </div>
      </div>
      <div class="BannerSection__animText__right">
        <div class="BannerSection__animText__rightContainer">
          <AppParagraph
            content="Lorem ipsum dolor sit amet"
            align="BannerSection__animText__right-text"
          />
          <AppParagraph
            content="Consectetur adipiscing elit, sed"
            align="BannerSection__animText__right-text"
          />
          <AppParagraph content="do eiusmod tempor" align="BannerSection__animText__right-text" />
          <AppParagraph
            content="incididunt ut labore et dolore"
            align="BannerSection__animText__right-text"
          />
          <AppLink :isNewWindow="true" href="#" label="Learn More"></AppLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppVideo from "../atoms/AppVideo";
import AppParagraph from "@/components/atoms/AppParagraph";
import AppLink from "@/components/atoms/AppLink";

export default {
  components: {
    AppVideo,
    AppParagraph,
    AppLink
  }
};
</script>




