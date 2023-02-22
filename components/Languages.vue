<template>
  <div class="languages" data-aos="fade-in" data-aos-delay="700">
    <h2 data-aos="fade-in" data-aos-delay="700">{{ $t("titleLanguages") }}</h2>
    <img
      src="~/assets/short_line.png"
      alt="Linha acabamento divisão de blocos"
    />

    <ul>
      <li>
        <h3>English</h3>
        <img src="~/assets/full_bullet.png" alt="Language English" data-aos="zoom-in" data-aos-delay="850"/>
        <img src="~/assets/full_bullet.png" alt="Language English" data-aos="zoom-in" data-aos-delay="900"/>
        <img src="~/assets/full_bullet.png" alt="Language English" data-aos="zoom-in" data-aos-delay="950" />
        <img src="~/assets/full_bullet.png" alt="Language English" data-aos="zoom-in" data-aos-delay="1000" />
        <img src="~/assets/empty_bullet.png" alt="Language English" data-aos="zoom-in" data-aos-delay="1050" />
      </li>
      <li>
       <h3>Spanish</h3>
        <img src="~/assets/full_bullet.png" alt="Language Spanish" data-aos="zoom-in" data-aos-delay="1100" />
        <img src="~/assets/full_bullet.png" alt="Language Spanish" data-aos="zoom-in" data-aos-delay="1150" />
        <img src="~/assets/full_bullet.png" alt="Language Spanish" data-aos="zoom-in" data-aos-delay="1200" />
        <img src="~/assets/full_bullet.png" alt="Language Spanish" data-aos="zoom-in" data-aos-delay="1250"/>
        <img src="~/assets/empty_bullet.png" alt="Language Spanish"data-aos="zoom-in" data-aos-delay="1300" />
      </li>
      <li>
          <h3>German</h3>
        <img src="~/assets/full_bullet.png" alt="Language German" data-aos="zoom-in" data-aos-delay="1350"/>
        <img src="~/assets/full_bullet.png" alt="Language German" data-aos="zoom-in" data-aos-delay="1400"/>
        <img src="~/assets/full_bullet.png" alt="Language German" data-aos="zoom-in" data-aos-delay="1450"/>
        <img src="~/assets/empty_bullet.png" alt="Language German" data-aos="zoom-in" data-aos-delay="1500"/>
        <img src="~/assets/empty_bullet.png" alt="Language German" data-aos="zoom-in" data-aos-delay="1550"/>
      </li>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.languages {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 2rem;
  ul {
    margin: 1.4rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    align-content: center;

    li {
      margin-bottom: 1.3rem;
      margin: 0 0.5rem 0 0;
      max-width: 140px;
      width: 100%;

      h3 {
        color: #fff;
        font-size: 1rem;
        line-height: 1.6rem;
        text-decoration: none;
        font-weight: 400;
        text-align: left;
        display: block;
        clear: both;
        width: 100%;
      }

      img {
        margin: 0 0.2rem 0 0;
        float: left;
        max-width: 100%;
        width:15px;
        height:15px
      }
    }
     }
      img{ max-width:100%}
  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: #fff;
    text-align: left;
    letter-spacing: 1px;
    margin: 0.7rem 0 1rem 0;
  }
}
</style>
