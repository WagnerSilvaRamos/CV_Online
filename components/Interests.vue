<template>
  <div class="interests" data-aos="zoom-in" data-aos-delay="700">
    <h2 data-aos="fade-in" data-aos-delay="700">{{ $t("titleInterests") }}</h2>
    <img
      src="~/assets/short_line.png"
      alt="Linha acabamento divisão de blocos"
      loading="lazy"
    />

    <ul>
      <li>
        <img src="~/assets/icon_design.png" alt="Design" loading="lazy" />
        <span>Design</span>
      </li>
      <li>
        <img src="~/assets/icon_ux.png" alt="UX" loading="lazy" />
        <span>UX</span>
      </li>
      <li>
        <img
          src="~/assets/programmer-icon.png"
          alt="Programmer"
          loading="lazy"
        />
        <span>Programming</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.interests {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 2rem;
  ul {
    margin: 0.9rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    align-content: center;

    li {
      margin-bottom: 1.3rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 0.5rem 0 0;
      max-width: 140px;
      width: 100%;
      justify-content: center;
      align-content: center;
      span {
        color: #fff;
        font-size: 1rem;
        line-height: 1.6rem;
        text-decoration: none;
        font-weight: 400;
        text-align: center;
        display: block;
        clear: both;
      }

      img {
        margin: 0 auto 0.2rem auto;
        display: block;
      }
    }
    :nth-child(1) img {
      margin: 0.5rem auto;
    }
    :nth-child(2) img {
      margin: 0.5rem auto;
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
  .interests {
    ul {
      display: block;
    }
    li {
      max-width: 100%;
      width: 100%;
      clear: left !important;
      display: block !important;
    }
    li span {
      color: #000 !important;
    }
    ul li img {
      display: none;
    }
  }
}
</style>
