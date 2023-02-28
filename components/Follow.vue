<template>
  <div class="follow" data-aos="fade-right" data-aos-delay="2000">
    <h2>{{ $t("titleFollow") }}</h2>
    <img
      src="~/assets/short_line.png"
      alt="Linha acabamento divisão de blocos"
      loading="lazy"
    />

    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/wagner-ramos-53a3116/"
          target="_blank"
          title="Linkedin"
          ><img
            src="~/assets/linkedin.png"
            alt="Linkedin"
            loading="lazy"
          />Linkedin</a
        >
      </li>
      <li>
        <a
          href="http://www.wagneramos.com.br"
          target="_blank"
          title="Portfolio Online"
          ><img
            src="~/assets/site.png"
            alt="Visite Portfolio"
            loading="lazy"
          />Website</a
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.follow {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  ul {
    margin: 0.7rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

    li {
      margin-bottom: 0.7rem;
      a {
        color: #fff;
        font-size: 1.2rem;
        line-height: 1.6rem;
        text-decoration: none;
        font-weight: 500;
        text-align: left;
        &:hover {
          transition: all 0.3s linear;
          color: #fccf02;
        }
      }
    }
    img {
      margin: 0 0.7rem 0 0;
      align-self: flex-start;
    }
  }
  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: #fff;
    text-align: left;
    letter-spacing: 1px;
    margin: 0.7rem 0 1rem 0;
  }
}

/* override styles when printing */
@media print {
  .follow {
    a {
      display: block !important;
      color: rgb(132, 76, 223) !important;
    }
  }
}
</style>
