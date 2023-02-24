<template>
  <div class="container">
    <p>
      {{ $t("txtFooter")
      }}<img
        src="~/assets/print-icon.png"
        alt="Print"
        title="Print version"
        @click="print"
      />
    </p>
  </div>
</template>

<style lang="scss" scoped>
p {
  color: #fff;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
}
img {
  margin: 0 0 0 1rem;
  cursor: pointer;
  position: relative;
  top: -0.5rem;
}
@media screen and (max-width: 736px) {
  img {
    display: none;
  }
}

@media (min-width: 737px) and (max-width: 991px) {
  p {
    font-size: 1rem !important;
  }
  img {
    display: none;
  }
}
/* override styles when printing */
@media print {
  p {
    display: none;
  }
}
</style>

<script>
export default {
  methods: {
    print() {
      window.print();
    },
    mounted() {
      print();
    },
  },
};
</script>
