<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-12 col-xs-12">
        <Follow />
      </div>
      <div class="col-md-7 col-sm-12 col-xs-12">
        <Education />
      </div>
    </div>

    <div class="row">
      <div class="col-md-5 col-sm-12 col-xs-12">
        <Contact />
        <SoftSkills />
      </div>
      <div class="col-md-7 col-sm-12 col-xs-12">
        <Experience />
        <Courses />
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-sm-12 col-xs-12"><Hobbies /></div>
      <div class="col-md-4 col-sm-12 col-xs-12"><Interests /></div>
      <div class="col-md-4 col-sm-12 col-xs-12"><Languages /></div>
    </div>
  </div>
  <!--end .container-->
</template>

<script>
import Follow from "~/components/Follow.vue";
import Education from "~/components/Education.vue";
import Contact from "~/components/Contact.vue";
import Experience from "~/components/Experiences.vue";
import SoftSkills from "~/components/SoftSkills.vue";
import Courses from "~/components/Courses.vue";
import Hobbies from "~/components/Hobbies.vue";
import Interests from "~/components/Interests.vue";
import Languages from "~/components/Languages.vue";

import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "index",
  components: {
    Follow,
    Education,
    Contact,
    Experience,
    SoftSkills,
    Courses,
    Hobbies,
    Interests,
    Languages,
  },

  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },

  mounted() {
    AOS.init({});
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  text-align: center;
  width: 70rem;
  max-width: 100%;
  position: relative;
}

.row {
  max-width: 100%;
  margin-bottom: 2rem;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
