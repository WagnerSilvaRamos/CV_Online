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

@media screen and (max-width: 736px) {
  .introtext p {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
}

@media (min-width: 737px) and (max-width: 991px) {
  .introtext p {
    font-size: 1.1rem !important;
    line-height: 1.5rem;
    max-width: 30rem;
    width: 100%;
  }
}
</style>
