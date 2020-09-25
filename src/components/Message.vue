<template>
  <div class="message">
    <p> {{ message }} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null
    }
  },
  created() {
    this.message = this.$store.getters.getMessage
  }
}
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  padding: 20px;
}
p {
  color: #de404d;
}
</style>