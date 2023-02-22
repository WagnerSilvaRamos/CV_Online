<template>
  <div>
    <div class="infosCourses" data-aos="fade-left" data-aos-delay="2600">
      <h2>{{ $t("titleCourses") }}</h2>
      <img
        src="~/assets/long_line.png"
        alt="Linha acabamento divisão de blocos"
      />

      <ul>
        <li>● Técnico em Informática (Techinical Escola Paralelo)</li>
        <li>● Web Designer – Escola Técnica</li>
        <li>● Lógica de Programação – Senac</li>
        <li>
          ● UX &amp; Web Design Master Course Strategy, Design, Development
        </li>
        <li>● User Experience Design Fundamentals</li>
        <li>● Bootstrap 4</li>
        <li>● SASS – From beginner to Advanced</li>
        <li>● Jquery Mobile</li>
        <li>● Jquery UI Widgets</li>
        <li>● SASS Workflows</li>
        <li>● Criando Páginas Web com Github Pages</li>
        <li>● Programming for Entrepreneurs – HTML &amp; CSS</li>
        <li>● How to create a wordpress website from scratch</li>
        <li>● Javascript from Beginner to Expert</li>
        <li>● Grunt JS - automate web developement tasks and save time</li>
        <li>● Compass – Powerfull SASS Library</li>
        <li>● GIT Completo: do Básico ao Avançado</li>
        <li>● Google Tag Manager for Beginners</li>
        <li>● Build a Single Page Application with jQuery and AJAX</li>
        <li>● Search Engine Marketing (SEM) – Step by Step</li>
        <li>● Deep &amp; Dive Understand Angular</li>
        <li>● Desenvolvedor Node.js e MongoDB</li>
        <li>● Do Zero ao React Project</li>
        <li>● Programação em Jquery</li>
        <li>● Web Developement with Gulp</li>
        <li>● Vue JS – Mastering Web Apps</li>
        <li>● C++ - Desenvolvimento orientado a obejto</li>
        <li>● Gestão de projetos 1 – como trabalhar com projetos</li>
        <li>● Gestão de projetos 2 – como iniciar o trabalho com projetos</li>
        <li>● HTML5 – Microsoft Virtual Academy</li>
        <li>● UX – Introdução a UX aplicada a APPS</li>
        <li>● Otimizando Projetos com Gulp</li>
        <li>● React Fundamentals</li>
        <li>● Vue JS 2</li>
        <li>● Responsive Web Design Fundamentals by Google – Udacity v</li>
        <li>● Responsive Images by Google – Udacity</li>
        <li>● Browser Render Optimization by Google – Udacity</li>
        <li>● Introdução a Páginas Dinâmicas com PHP</li>
        <li>● Desenvolvimento Web com PHP e banco de Dados MySQl</li>
        <li>● Design Thinking na Prática</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.infosCourses {
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
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      color: #fccf02;
      font-size: 1.1rem;
      text-align: left;
      margin: 0;
      float: left;
      width: 95%;
      font-weight: 500;
    }
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
  .infosCourses {
    ul {
      li {
        font-size: 1rem;
      }
    }
  }
}

@media (min-width: 737px) and (max-width: 991px) {
  .infosCourses {
    ul {
      li {
        font-size: 1rem;
      }
    }
  }
}
</style>
