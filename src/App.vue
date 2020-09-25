<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">

          <!-- New Note -->
          <newNote />

          <!-- Title -->
          <div class="note-header">

            <!-- Title -->
            <h1> {{ title }} </h1>

            <!-- Search -->
            <search
              :value="search"
              placeholder="Find your Note"
              @search="search = $event" />

            <!-- Icons Control -->
            <div class="icons">
              <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <!-- Note List -->
          <notes
            :grid="grid"
            @open="modalEdit = true"/>

          <!-- Modal Edit -->
          <modalEdit
            v-show="modalEdit"
            @close="modalEdit = false" />

        </div>
      </section>

    </div>
  </div>
</template>

<script>
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'
import modalEdit from '@/components/ModalEdit.vue'

export default {
  name: 'App',
  components: {
    newNote,
    notes,
    search,
    modalEdit
  },
  data () {
    return {
      title: 'Notes App',
      grid: true,
      search: '',
      modalEdit: false
    }
  }
}
</script>

<style lang="scss">

</style>