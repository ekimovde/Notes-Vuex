<template>
  <modal
    title="Modal with Edit"
    @close="$emit('close')">
    <div slot="body">
      <form @submit.prevent="editNote()">
        <!-- Title -->
        <div class="form-item">
          <label>Title</label>
          <input
            type="text"
            v-model="noteItem.title"
            required >
        </div>

        <!-- Priority -->
        <label>Priority</label>
        <div class="new-note__radio">

          <div class="new-note__block">
            <input
              type="radio"
              id="one"
              value="Simple"
              v-model="noteItem.property">
            <label for="one">Simple</label>
          </div>

          <div class="new-note__block">
            <input
              type="radio"
              id="two"
              value="Standard"
              v-model="noteItem.property">
            <label for="two">Standard</label>
          </div>

          <div class="new-note__block">
            <input
              type="radio"
              id="thre"
              value="Prime"
              v-model="noteItem.property">
            <label for="two">Prime</label>
          </div>

        </div>

        <!-- Description -->
        <div class="form-item">
          <label>Description</label>
          <input
            type="text"
            v-model="noteItem.descr" >
        </div>

        <!-- Button -->
        <button class="btn btnPrimary">Editing!</button>
      </form>
    </div>

  </modal>
</template>

<script>

import modal from '@/components/UI/Modal.vue'

export default {
  components: {
    modal
  },
  data () {
    return {
      noteItem: {}
    }
  },
  created() {
    this.noteItem = this.$store.getters.getNote
  },
  methods: {
    editNote() {
      this.$store.dispatch('setReplaceNote', this.noteItem)
      this.$emit('close')

      // Replace
      this.noteItem.title = ''
      this.noteItem.descr = ''
      this.noteItem.property = 'Simple'
    }
  }
}
</script>

<style lang="scss">

</style>