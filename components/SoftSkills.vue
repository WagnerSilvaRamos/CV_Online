<template>
  <div class="softskills" data-aos="fade-right" data-aos-delay="2400">
    <h2>Soft Skills</h2>
    <img
      src="~/assets/short_line.png"
      alt="Linha acabamento divisão de blocos"
    />
    <h3>{{ $t("textComunicacao") }}</h3>
    <div class="progress active" style="height: 15px">
      <div class="progress-bar" style="width: 80%; height: 11px"></div>
    </div>

    <h3>{{ $t("textCriative") }}</h3>
    <div class="progress active" style="height: 15px">
      <div class="progress-bar" style="width: 90%; height: 11px"></div>
    </div>

    <h3>{{ $t("txtTeamwork") }}</h3>
    <div class="progress active" style="height: 15px">
      <div class="progress-bar" style="width: 85%; height: 11px"></div>
    </div>

    <h3>{{ $t("txtOrganization") }}</h3>
    <div class="progress active" style="height: 15px">
      <div class="progress-bar" style="width: 95%; height: 11px"></div>
    </div>
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
  }

  .progress-bar {
    background-color: #fccf02;
    border-radius: 15px;
  }
}
</style>
