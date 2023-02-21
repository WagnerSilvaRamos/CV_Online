export default {
  mode: "universal",
  /*
   ** Headers of the page
   */

  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },

  head: {
    title: "Wagner Ramos CV",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "curriculum Wagner Ramos ",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "nuxt-i18n",
  ],

  i18n: {
    locales: [
      "br",
      "en",
      "es",
      "de",
      { code: "en", iso: "en-US", name: "English", dir: "ltr" },
      { code: "br", iso: "pt-BR", name: "Portugues", dir: "rtl" },
      { code: "es", iso: "es-ES", name: "Spanish" },
      { code: "de", iso: "de-DE", name: "Deutsch" },
    ],
    defaultLocale: "br",
    seo: "true",
    isCatchallLocale: true,

    vueI18n: {
      fallbackLocale: "br",
      messages: {
        br: {
          welcome: "Benvindo",
          nameUser: " Wagner Ramos",
          Profession: "Desenvolvedor Front end",
          txtIntro:
            "Apaixonado por programação front end e todas suas vertentes , vou atrás da informação e direto ao assunto, extremamente dedicado, tenho ânsia por conhecimento e atualização constante, continuo sempre estudando e praticando, tudo que envolve o universo front-end, sempre me propondo ser um profissional multifacetado, para entregar a melhor solução visual e técnica e consequemente , a melhor experiência para clientes e usuários dos trabalhos desenvolvidos.",
          skillIntro: "Avançado",
          titleFollow: " Siga-me",
          titleEducation: "Educação",
          descEducationOne:
            "Curso técnico me informática, HTML, CSS ,JS, REDES e Backend",
          descEducationTwo: "Faculdade de web Design e comunicação digital",
          titleContact: "Contato",
          textComunicacao: "Comunicação",
          titleExp: "Experiências",
          textCriative: "Criatividade",
          txtTeamwork: "Trabalho em equipe",
          txtOrganization: "Organização",
          titleCourses: "Cursos",
          titleHob: "Hobbies",
          titleInterests: "Interesses",
          txtFooter: "Projeto desenvolvido com Nuxt e i18n por Wagner Ramos",
        },
        en: {
          welcome: "Welcome",
          nameUser: " Wagner Ramos",
          Profession: "Front end Developer",
          txtIntro:
            "Passionate about front-end programming and all its aspects, I go after information and get straight to the point, extremely dedicated, I have a desire for knowledge and constant updating, I am always studying and practicing, everything that involves the front-end universe, always proposing myself to be a multifaceted professional, to deliver the best visual and technical solution and, consequently, the best experience for clients and users of the work developed.",
          skillIntro: "Advanced",
          titleFollow: " Follow-me",
          titleEducation: "Education",
          descEducationOne:
            "Technical course in informatics, HTML, CSS, JS, NETWORKS and Backend",
          descEducationTwo: "Faculty of web design and digital communication",
          titleContact: "Get in Touch",
          textComunicacao: "Communication",
          titleExp: "Experiences",
          textCriative: "Creativity",
          txtTeamwork: "Teamwork",
          txtOrganization: "Organization",
          titleCourses: "Courses",
          titleHob: "Hobbys",
          titleInterests: "interests",
          txtFooter: "Project developed with Nuxt and i18n by Wagner Ramos",
        },
        es: {
          welcome: "Bienvenido",
          nameUser: " Wagner Ramos",
          Profession: "Desarrollador Front end",
          txtIntro:
            "Apasionado de la programación front-end y todas sus vertientes, busco información y voy directo al grano, sumamente dedicado, tengo afán de conocimiento y actualización constante, siempre estoy estudiando y practicando, todo lo que involucra el universo front-end , proponiéndome siempre ser un profesional multifacético, para entregar la mejor solución visual y técnica y, en consecuencia, la mejor experiencia para los clientes y usuarios del trabajo desarrollado.",
          skillIntro: "Avanzado",
          titleFollow: "Sígueme",
          titleEducation: "Educación",
          descEducationOne:
            "Curso técnico en informática, HTML, CSS, JS, REDES y Backend",
          descEducationTwo: "Facultad de diseño web y comunicación digital.",
          titleContact: "Contacto",
          textComunicacao: "Communication",
          titleExp: "Experiencias",
          textCriative: "Creatividad",
          txtTeamwork: "Trabajo en equipo",
          txtOrganization: "Organización",
          titleCourses: "Cursos",
          titleHob: "Aficiones",
          titleInterests: "intereses",
          txtFooter: "Proyecto desarrollado con Nuxt e i18n por Wagner Ramos",
        },
        de: {
          welcome: "Willkommen",
          nameUser: "Wagner Ramos",
          Profession: "Front End Entwickler",
          txtIntro:
            "Ich bin leidenschaftlich an der Frontend-Programmierung und all ihren Aspekten interessiert, gehe Informationen nach und komme direkt auf den Punkt, extrem engagiert, ich habe den Wunsch nach Wissen und ständiger Aktualisierung, ich studiere und praktiziere ständig alles, was das Frontend-Universum betrifft , immer vorschlagend, ein facettenreicher Profi zu sein, um die beste visuelle und technische Lösung und folglich die beste Erfahrung für Kunden und Benutzer der entwickelten Arbeit zu liefern.",
          skillIntro: "vorgeschritte",
          titleFollow: "Folgen Sie mir",
          titleEducation: "Schulbildung",
          descEducationOne:
            "Technischer Kurs in Informatik, HTML, CSS, JS, NETZWERKE und Backend",
          descEducationTwo: "Fakultät für Webdesign und digitale Kommunikation",
          titleContact: "Kontakt",
          textComunicacao: "Kommunikation",
          titleExp: "Erfahrungen",
          textCriative: "Kreativität",
          txtTeamwork: "Zusammenarbeit",
          txtOrganization: "Organisation",
          titleCourses: "Kurse",
          titleHob: "Hobbys ",
          titleInterests: "Interessen",
          txtFooter: "Projekt entwickelt mit Nuxt und i18n von Wagner Ramos",
        },
      },
    },
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  components: true,
};
