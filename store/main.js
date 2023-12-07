import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        directors: [
            {
                name: 'Edina McGinnis',
                title: 'Chairman'
            }
        ]
    }),
    getters: {
        Directors: (state) => state.directors
    },
    actions: {
        SET_DIRECTORS () {

        }
    }
})