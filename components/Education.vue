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
</style>
