<template>
  <div class="hobbies" data-aos="zoom-in" data-aos-delay="700">
    <h2 data-aos="fade-in" data-aos-delay="700">{{ $t("titleHob") }}</h2>
    <img
      src="~/assets/short_line.png"
      alt="Linha acabamento divisão de blocos"
      loading="lazy"
    />

    <ul>
      <li>
        <span
          ><img
            src="~/assets/joystick.png"
            alt="Video Games"
            loading="lazy"
          />Games</span
        >
      </li>
      <li>
        <span
          ><img
            src="~/assets/icon_movie.png"
            alt="Movies"
            loading="lazy"
          />Movies</span
        >
      </li>
      <li>
        <span
          ><img src="~/assets/icon_dj.png" alt="DJ" loading="lazy" />DJ</span
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.hobbies {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 2rem;
  ul {
    margin: 0.7rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

    li {
      margin-bottom: 0.9rem;
      align-items: center;
      span {
        color: #fff;
        font-size: 1rem;
        line-height: 1.6rem;
        text-decoration: none;
        font-weight: 400;
        text-align: left;
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
  .hobbies {
    li span {
      clear: left;
      color: #000 !important;
    }
  }
}
</style>
