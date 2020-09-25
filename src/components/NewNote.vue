<template>
  <div class="new-note">
    <!-- Message -->
    <message v-if="message" />

    <label>Title</label>
    <input v-model="note.title" type="text">

    <label>Priority</label>
    <div class="new-note__radio">

      <div class="new-note__block">
        <input
          type="radio"
          id="one"
          value="Simple"
          v-model="note.property">
        <label for="one">Simple</label>
      </div>

      <div class="new-note__block">
        <input
          type="radio"
          id="two"
          value="Standard"
          v-model="note.property">
        <label for="two">Standard</label>
      </div>

      <div class="new-note__block">
        <input
          type="radio"
          id="thre"
          value="Prime"
          v-model="note.property">
        <label for="two">Prime</label>
      </div>

    </div>

    <label>Description</label>
    <textarea v-model="note.descr"></textarea>

    <button @click="addNote()" class="btn btnPrimary">New note</button>
  </div>
</template>

<script>
import message from '@/components/Message.vue'

export default {
  components: {
    message
  },
  data() {
    return {
      note: {},
      message: null
    }
  },
  created() {
    this.note = this.$store.getters.getNote
  },
  methods: {
    addNote () {
      if (this.note.title === '') {
        this.message = 'Заголовок не может быть пустым!'
        this.$store.dispatch('setMessage', this.message)
        return false
      }

      this.$store.dispatch('setAddNote', this.note)

      // Reset
      this.message = ''
      this.note.title = ''
      this.note.descr = ''
      this.note.property = 'Simple'
    }
  }
}
</script>

<style lang="scss">
.new-note {
  text-align: center;
  button {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.new-note__radio {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  .new-note__block {
    display: flex;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
    input {
      margin-bottom: 0px;
      margin-right: 8px;
    }
    label {
      margin-bottom: 0px;
    }
  }
}
</style>