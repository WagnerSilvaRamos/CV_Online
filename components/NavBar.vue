<template>
  <div class="languages" data-aos="fade-down" data-aos-delay="1800">
    <ul>
      <li>
        <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
          <img
            src="~/assets/icons8-usa-48.png"
            alt="English Language"
            title="English Language"
            loading="lazy"
          />
        </nuxt-link>
      </li>

      <li>
        <nuxt-link v-if="$i18n.locale !== 'br'" :to="switchLocalePath('br')">
          <img
            src="~/assets/icons8-brazil-48.png"
            alt="Portuguese Language"
            title="Portuguese Language"
            loading="lazy"
          />
        </nuxt-link>
      </li>

      <li>
        <nuxt-link v-if="$i18n.locale !== 'es'" :to="switchLocalePath('es')">
          <img
            src="~/assets/icons8-spain-48.png"
            alt="Spanish Language"
            title="Spanish Language"
            loading="lazy"
          />
        </nuxt-link>
      </li>

      <li>
        <nuxt-link v-if="$i18n.locale !== 'de'" :to="switchLocalePath('de')">
          <img
            src="~/assets/icons8-germany-48.png"
            alt="Deustch Language"
            title="Deustch Language"
            loading="lazy"
          />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameTitle: "",
      title: "",
      TPortugusese: "Portuguese",
      TEnglish: "English",
      TEspanish: "Spanish",
      TDeustch: "German",
    };
  },

  mounted() {
    //this.ReturnTitle();
    // this.ReturnName();
    // console.log(this.$route.params=== 'en')
  },

  methods: {
    /*ReturnTitle(title) {
      if (this.$route.params === "index___en") {
        this.title = this.TEnglish;
      } else if (this.$route.params === "index___br") {
        this.title = this.TPortugusese;
      } else if (this.$route.params === "index___es") {
        this.title = this.TEspanish;
      } else if (this.$route.params === "index___de") {
        this.title = this.TDeustch;
      }
    },*/
    /*ReturnName(nameUser) {
      if (this.$route.params === "index___en") {
        this.nameUser = this.TEnglish;
      } else if (this.$route.params === "index___br") {
        this.nameUser = this.TPortugusese;
      } else if (this.$route.params === "index___es") {
        this.nameUser = this.TEspanish;
      } else if (this.$route.params === "index___de") {
        this.nameUser = this.TDeustch;
      }
    },*/
  },
};
</script>

<style lang="scss" scoped>
.languages {
  max-width: 30rem;
  position: absolute;
  top: 0;
  right: 2rem;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;

    li a {
      text-decoration: none;
      margin: 0 5px;
    }

    a.nuxt-link-active {
      font-weight: bold;
    }
    /* exact link will show the primary color for only the exact matching link */
    a.nuxt-link-exact-active {
      color: #00c58e;
      display: block;
    }
  }
}
</style>
