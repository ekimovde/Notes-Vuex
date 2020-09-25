export default {
  state: {
    id: null,
    note: {
      title: '',
      descr: '',
      property: 'Simple',
      color: ''
    },
    notes: [
      {
        title: 'First Note',
        descr: 'Description for First Note',
        date: new Date(Date.now()).toLocaleString(),
        property: 'Simple',
        color: 'green'
      },
      {
        title: 'Second Note',
        descr: 'Description for Second Note',
        date: new Date(Date.now()).toLocaleString(),
        property: 'Standard',
        color: 'orange'
      },
      {
        title: 'Third Note',
        descr: 'Description for Third Note',
        date: new Date(Date.now()).toLocaleString(),
        property: 'Prime',
        color: 'red'
      }
    ]
  },
  mutations: {
    setChangeNote (state, payload) {
      state.notes = payload
    },
    setIdNote (state, payload) {
      state.id = payload
    }
  },
  actions: {
    setAddNote ({commit, state}, note) {
      let {title, descr, property, color} = note
      let arrNotes = state.notes

      if (property === 'Simple') color = 'green'
      if (property === 'Standard') color = 'orange'
      if (property === 'Prime') color = 'red'

      arrNotes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
        property,
        color
      })

      commit('setChangeNote', arrNotes)

      // Reset
      arrNotes = null
      title = ''
      descr = ''
      property = ''
      color = ''
    },
    setReplaceNote ({commit, state}, note) {
      let {title, descr, property, color} = note
      let arrsNotes = state.notes
      let index = state.id

      if (property === 'Simple') color = 'green'
      if (property === 'Standard') color = 'orange'
      if (property === 'Prime') color = 'red'

      arrsNotes.splice(index, 1, {
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
        property,
        color
      })

      commit('setChangeNote', arrsNotes)

      // Reset
      arrsNotes = null
      index = null
      title = ''
      descr = ''
      property = ''
      color = ''
    },
    setFilterNotes ({commit, state}, payload) {
      let array = state.notes
      let search = payload
      console.log(search)

      if (!search) return array

      // Small
      search = search.trim().toLowerCase()

      // Filter
      array = array.filter(function (item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item
        }
      })
      console.log(array)

      // Error
      return commit('setChangeNote', array)
    },
    setChangeNote ({commit}, payload) {
      commit('setChangeNote', payload)
    },
    setIdNote ({commit}, payload) {
      commit('setIdNote', payload)
    }
  },
  getters: {
    getNotes (state) {
      return state.notes
    },
    getNote (state) {
      return state.note
    }
  }
}