import { defineStore } from 'pinia'
import firestoreDb from '../server/lib/firebase';

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

        },
        GET_DIRECTORS () {

        }
    }
})