<template>
  <header>
    <div class="container">
      <h1 data-aos="fade-in" data-aos-delay="500">{{ $t("nameUser") }}</h1>
      <h2 data-aos="zoom-in" data-aos-delay="1000">{{ $t("Profession") }}</h2>
      <TxtIntro />
      <SkillsIntro />
      <NavBar />
    </div>
  </header>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import TxtIntro from "~/components/TxtIntro.vue";
import SkillsIntro from "~/components/SkillsIntro.vue";

export default {
  components: {
    NavBar,
    TxtIntro,
    SkillsIntro,
  },
};
</script>

<style lang="scss">
header {
  max-width: 100%;
  overflow: hidden;
  padding: 1rem 0 2rem 0;
  position: relative;
  margin-bottom: 2rem;
  background: url(../assets/bg_header.jpg) no-repeat center top;
  background-size: cover;

  .container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    flex-direction: column;
  }

  h1 {
    text-align: left;
    max-width: 38rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 3rem;
    line-height: 3.5rem;
  }

  h2 {
    color: #fff;
    background: #333;
    text-align: center;
    padding: 0.7rem;
    border-radius: 8px;
    margin: 1.5rem 0;
    max-width: 25rem;
    width: 100%;
    display: inline-block;
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
}

@media screen and (max-width: 736px) {
  body,
  html {
    overflow-x: hidden;
  }
  html {
    font-size: 16px;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.6rem;
  }

  header {
    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
      max-width: 15rem;
    }

    h2 {
      font-size: 1.3rem !important;
      line-height: 1.9rem;
    }
  }
  .languages {
    top: 0 !important;
    right: 0 !important;
    img {
      max-width: 40px;
    }
  }
}

@media (min-width: 737px) and (max-width: 991px) {
  header {
    h1 {
      font-size: 2.2rem;
      line-height: 2.5rem;
    }
    h2 {
      font-size: 1.5rem !important;
      line-height: 2rem;
    }
    .languages {
      top: 0 !important;
      right: 0 !important;
      img {
        max-width: 40px;
      }
    }
  }
}
</style>
