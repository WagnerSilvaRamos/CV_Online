<template>
  <div class="introtext">
    <p data-aos="fade-up">{{ $t("txtIntro") }}</p>
  </div>
</template>

<style lang="scss">
.introtext {
  display: flex;
  justify-content: flex-start;
  max-width: 45rem;
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #fff;
    text-align: left;
  }
}
</style>
