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
