<template>
  <div data-aos="fade-right" data-aos-delay="2400">
    <ul>
      <li>
        <img src="~/assets/html.png" alt="HTML 5" loading="lazy" /><span
          class="print_skill"
          >HTML 5</span
        ><span>{{ $t("skillIntro") }}</span>
      </li>
      <li>
        <img src="~/assets/css.png" alt="CSS 2 e 3" loading="lazy" /><span
          class="print_skill"
          >CSS 2 e 3</span
        ><span>{{ $t("skillIntro") }}</span>
      </li>
      <li>
        <img src="~/assets/js.png" alt="Javascript" loading="lazy" /><span
          class="print_skill"
          >Javascript</span
        ><span>{{ $t("skillIntro") }}</span>
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

@media screen and (max-width: 736px) {
  ul li span {
    font-size: 0.9rem !important;
    line-height: 1.5rem;
    margin-right: 0.3rem;
  }
}

@media print {
  body {
    margin: 0;
    color: #000 !important;
    background-color: #fff;
  }

  span {
    color: #000 !important;
  }
}
</style>
