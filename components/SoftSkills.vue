<template>
  <div class="softskills" data-aos="fade-right" data-aos-delay="1000">
    <h2>Soft Skills</h2>
    <img
      src="~/assets/short_line.png"
      alt="Linha acabamento divisão de blocos"
      loading="lazy"
    />
    <h3>{{ $t("textComunicacao") }}</h3>
    <div class="progress active" style="height: 15px">
      <div class="progress-bar" style="width: 80%; height: 11px"></div>
    </div>
    <span>80%</span>

    <h3>{{ $t("textCriative") }}</h3>
    <div class="progress active" style="height: 15px">
      <div class="progress-bar" style="width: 90%; height: 11px"></div>
    </div>
    <span>80%</span>

    <h3>{{ $t("txtTeamwork") }}</h3>
    <div class="progress active" style="height: 15px">
      <div class="progress-bar" style="width: 85%; height: 11px"></div>
    </div>
    <span>85%</span>

    <h3>{{ $t("txtOrganization") }}</h3>
    <div class="progress active" style="height: 15px">
      <div class="progress-bar" style="width: 95%; height: 11px"></div>
    </div>
    <span>95%</span>
  </div>
</template>

<style lang="scss" scoped>
.softskills {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: #fff;
    text-align: left;
    letter-spacing: 1px;
    margin: 0.7rem 0 1rem 0;
  }
  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #fff;
    text-align: left;
    letter-spacing: 1px;
    margin: 0.7rem 0 1rem 0;
    font-weight: 400;
  }

  .progress {
    border-radius: 10px;
    border: #fccf02 3px solid;
    background: transparent;
    max-width: 70%;
  }

  .progress-bar {
    background-color: #fccf02;
    border-radius: 15px;
  }
  img {
    max-width: 100%;
    align-self: flex-start;
  }

  span {
    display: none;
  }
}

@media screen and (max-width: 736px) {
  .softskills {
    margin-bottom: 3rem;
  }
}

/* override styles when printing */
@media print {
  .softskills {
    .progress {
      display: none;
    }
    span {
      display: block;
      color: #000;
      text-align: left;
    }
  }
}
</style>
