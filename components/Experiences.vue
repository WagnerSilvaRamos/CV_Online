<template>
  <div>
    <div class="infosExperience" data-aos="fade-left" data-aos-delay="2200">
      <h2>{{ $t("titleExp") }}</h2>
      <img
        src="~/assets/long_line.png"
        alt="Linha acabamento divisão de blocos"
      />

      <h3>Impacta Tecnologia</h3>
      <p>
        Desenvolvimento front-end apoiando o Marketing Digital. (Vue , Quasar)
      </p>
      <strong>2022</strong>

      <h3>Agência Núcleo</h3>
      <p>
        Desenvolvimento de Landing pages, sites e email marketings para clientes
        de segmentos distintos. (HTML 5, CSS3, JS, PHP)
      </p>
      <strong>2021/2022</strong>

      <h3>Asus</h3>
      <p>
        Desenvolvimento web para peças de varejo e Desenvolvimento de Landing
        pages, para clientes de segmentos distintos. (HTML 5, CSS3, JS, NUXT)
      </p>
      <strong>2021/2022</strong>

      <h3>Agência Digi</h3>
      <p>
        Desenvolvimento web de portais, para incentivos de vendas, peças de
        varejo e Desenvolvimento de Landing pages, para clientes de segmentos
        distintos. (HTML 5, CSS3, JS, jQuery)
      </p>
      <strong>2013 /2016</strong>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.infosExperience {
  max-height: 21rem;
  overflow: auto;
  margin-bottom: 2rem;
  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: #fff;
    text-align: left;
    letter-spacing: 1px;
    margin: 0.7rem 0;
  }
  img {
    max-width: 95%;
    align-self: flex-start;
    margin: 0 0 1.8rem 0;
  }

  strong {
    text-align: left;
    color: #999;
    font-size: 1rem;
    line-height: 1.5rem;
    float: right;
    margin: 0 20px 0 0;
  }

  h3 {
    color: #fccf02;
    font-size: 1.1rem;
    text-align: left;
    margin: 0;
    float: left;
    width: 65%;
  }
  p {
    color: #fff;
    font-size: 1.1rem;
    text-align: left;
    margin: 0.5rem 0 1.8rem 0;
    float: left;
    width: 65%;
  }
}
::-webkit-scrollbar {
  width: 13px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #fccf02;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fccf02;
}

@media screen and (max-width: 736px) {
  .infosExperience {
    margin-bottom: 3rem;
    h3 {
      clear: left;
    }
    p {
      max-width: 11rem;
      width: 100%;
      font-size: 1rem;
      line-height: 1.5rem;
      clear: left;
    }
    strong {
      font-size: 0.9rem;
      margin: -1.3rem 1.5rem 0 0;
    }
  }
}

@media (min-width: 737px) and (max-width: 991px) {
  .infosExperience {
    margin: 0.3rem 0 2rem 0;
    p {
      margin: 0 0 2rem 0;
      font-size: 1rem !important;
      max-width: 18rem;
      width: 100%;
    }
    img {
      max-width: 100%;
    }
  }
}
</style>
