<template>
  <div>
    <div class="infosEducation" data-aos="fade-left" data-aos-delay="2000">
      <h2>{{ $t("titleEducation") }}</h2>
      <img
        src="~/assets/long_line.png"
        alt="Linha acabamento divisão de blocos"
      />
      <strong>2007 / 2009</strong>
      <h3>Técnico em Informática</h3>
      <p>{{ $t("descEducationOne") }}</p>

      <strong>2009 / 2011</strong>
      <h3>Web Design</h3>
      <p>{{ $t("descEducationTwo") }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.infosEducation {
  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: #fff;
    text-align: left;
    letter-spacing: 1px;
    margin: 0.7rem 0;
  }
  img {
    max-width: 100%;
    align-self: flex-start;
    margin: 0 0 1.8rem 0;
  }

  strong {
    text-align: left;
    color: #fff;
    font-size: 1rem;
    line-height: 1.5rem;
    float: left;
    clear: left;
  }

  h3 {
    color: #fccf02;
    font-size: 1.1rem;
    text-align: left;
    margin: 0 0 0 5rem;
    float: left;
    width: 65%;
  }
  p {
    color: #fff;
    font-size: 1.1rem;
    text-align: left;
    margin: 0 0 1.5rem 5rem;
    float: left;
    width: 65%;
  }
}

@media screen and (max-width: 736px) {
  .infosEducation {
    strong {
      display: block;
    }
    h3 {
      margin: 0.7rem 0 0;
      clear: left;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
      max-width: 17rem;
      width: 100%;
      clear: left;
      margin: 0.7rem 0 2rem 0;
    }
  }
}

@media (min-width: 737px) and (max-width: 991px) {
  .infosEducation {
    h3,
    p {
      clear: left;
    }
    p {
      margin: 0 0 2rem 0;
      font-size: 1rem !important;
      max-width: 18rem;
      width: 100%;
    }
    h3 {
      margin: 0.7rem 0 0.6rem 0;
    }
  }
}

/* override styles when printing */
@media print {
  .infosEducation strong {
    color: #000 !important;
  }
}
</style>
