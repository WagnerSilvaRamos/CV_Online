<template>
  <div class="contact">
    <h2>{{ $t("titleContact") }}</h2>
    <img
      src="~/assets/short_line.png"
      alt="Linha acabamento divisão de blocos"
    />

    <ul>
      <li>
        <a href="callto:'+55 11 9 6574-5723'  " target="_blank" title="Phone"
          ><img
            src="~/assets/tel.png"
            alt="Telefone de contato +55 11 9 6574-5723"
          />+55 (011) 96574-5723</a
        >
      </li>
      <li>
        <a href="mailto:'qa302655@gmail.com' " target="_blank" title="Mail"
          ><img src="~/assets/mail.png" alt="Email" />qa302655@gmail.com</a
        >
      </li>
      <li>
        <a
          href="http://www.wagneramos.com.br"
          target="_blank"
          title="Portfolio Online"
          ><img src="~/assets/site.png" alt="Linkedin" />Portfolio Online</a
        >
      </li>
      <li>
        <a href="#" target="_blank" title="Location"
          ><img src="~/assets/address.png" alt="Linkedin" />São Paulo -
          Brazil</a
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 2rem;
  ul {
    margin: 0.7rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

    li {
      margin-bottom: 0.7rem;
      align-items: center;
      a {
        color: #fff;
        font-size: 1.2rem;
        line-height: 1.6rem;
        text-decoration: none;
        font-weight: 500;
        text-align: left;
        &:hover {
          transition: all 0.3s linear;
          color: #fccf02;
        }
      }
    }
    img {
      margin: 0 0.7rem 0 0;
      align-self: flex-start;
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
