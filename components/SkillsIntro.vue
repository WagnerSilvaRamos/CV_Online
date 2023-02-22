<template>
  <div data-aos="fade-right" data-aos-delay="1500">
    <ul>
      <li>
        <img src="~/assets/html.png" alt="HTML 5" /><span>{{
          $t("skillIntro")
        }}</span>
      </li>
      <li>
        <img src="~/assets/css.png" alt="CSS 2 e 3" /><span>{{
          $t("skillIntro")
        }}</span>
      </li>
      <li>
        <img src="~/assets/js.png" alt="Javascript" /><span>{{
          $t("skillIntro")
        }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  margin: 1rem 0;
  padding: 0.7rem;
  list-style: none;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  background: #333;
  max-width: 30rem;
  li {
    color: #fff;
    font-weight: 500;
  }
  img {
    align-self: flex-start;
    margin: 0 0.5rem 0 0;
  }
}
</style>
