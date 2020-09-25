<template>
  <div class="notes">
    <div class="note" :class="[note.color, { full: !grid }]" v-for="(note, index) in notes" :key="index">
      <div class="note-header" :class="{ full: !grid }">
        <p> {{ note.title }} </p>
        <div class="note-icon">
          <p @click="editing(index)">✎</p>
          <p class="note-exit" @click="removeNote(index)">x</p>
        </div>
      </div>

      <div class="note-body">
        <p> {{ note.descr }} </p>
        <p> {{ note.property }} </p>
        <span> {{ note.date }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: []
    }
  },
  props: {
    grid: {
      type: Boolean,
      required: true
    }
  },
  created() {
    this.notes = this.$store.getters.getNotes
  },
  watch: {
    filterNotes () {
      this.notes = this.$store.getters.getNotes
    }
  },
  methods: {
    removeNote (index) {
      console.log(`Note id - ${index} removed`)
      this.notes.splice(index, 1)
      this.$store.dispatch('setChangeNote', this.notes)
    },
    editing (index) {
      this.$emit('open', index)
      this.$store.dispatch('setIdNote', index)
    }
  }
}
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 10px;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.green {
    border: 2px solid green;
  }
  &.orange {
    border: 2px solid orange;
  }
  &.red {
    border: 2px solid red;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 22px;
    color: #402caf;
  }
  h1 {
    font-size: 32px;
  }
  svg {
    margin-right: 12px;
    cursor: pointer;
    color: #999;
    &:last-child {
      margin-right: 0px;
    }
    &.active {
      color: #402caf;
    }
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .note-icon {
    display: flex;
    .note-exit {
      margin-left: 8px;
    }
    p {
      cursor: pointer;
    }
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999;
  }
}
</style>