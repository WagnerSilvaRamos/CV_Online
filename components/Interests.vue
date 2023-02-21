<template>
  <div class="interests">
    <h2>{{ $t("titleInterests") }}</h2>
    <img
      src="~/assets/short_line.png"
      alt="Linha acabamento divisão de blocos"
    />

    <ul>
      <li>
        <img src="~/assets/icon_design.png" alt="Design" />
        <span>Design</span>
      </li>
      <li>
        <img src="~/assets/icon_ux.png" alt="UX" />
        <span>UX</span>
      </li>
      <li>
        <img src="~/assets/programmer-icon.png" alt="Programmer" />
        <span>programming</span>
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
    margin: 0.7rem 0 0;
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
</style>
