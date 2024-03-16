import { defineStore } from 'pinia'
import { firestoreDb } from '../server/lib/firebase';
import { collection, getDocs, setDoc } from '@firebase/firestore';

export const useMainStore = defineStore('main', {
    state: () => ({
        directors: [],
        articles: []
    }),
    getters: {
        Directors: (state) => state.directors,
        Articles: (state) => state.articles
    },
    actions: {
        SET_DIRECTORS (docArray) {
            // Empty directors list
            this.directors = []
            // console.log(docArray)
            // Push array of directors to directors array
            for (let i = 0; i < docArray.length; i++) {
                const doc = docArray[i]
                const newDocObject = {
                    id: doc.id,
                    biography: doc._document.data.value.mapValue.fields.biography.stringValue,
                    firstname: doc._document.data.value.mapValue.fields.firstname.stringValue,
                    live: doc._document.data.value.mapValue.fields.live.booleanValue,
                    headshot_img_url: doc._document.data.value.mapValue.fields.headshot_img_url.stringValue,
                    lastname: doc._document.data.value.mapValue.fields.lastname.stringValue,
                    title: doc._document.data.value.mapValue.fields.title.stringValue
                }
                this.directors.push(newDocObject)
            }
        },
        SET_ARTICLES (docArray) {
            // Empty articles list
            this.articles = []
            // Push array of articles to articles array
            for (let i = 0; i < docArray.length; i++) {
                const doc = docArray[i]
                const newDocObject = {
                    id: doc.id,
                    article_img: doc._document.data.value.mapValue.fields.article_img.stringValue,
                    author: doc._document.data.value.mapValue.fields.author.stringValue,
                    content: doc._document.data.value.mapValue.fields.content.stringValue,
                    created_at: doc._document.data.value.mapValue.fields.created_at.timestampValue,
                    title: doc._document.data.value.mapValue.fields.title.stringValue,
                    slug: doc._document.data.value.mapValue.fields.slug.stringValue
                }
                this.articles.push(newDocObject)
            }
            console.log(this.articles[0].slug)
        },
        async GET_DIRECTORS () {
            const directorsCol = collection(firestoreDb, 'directors')
            const directorsSnapshot = await getDocs(directorsCol)
            this.SET_DIRECTORS(directorsSnapshot.docs)
        },
        async GET_ARTICLES () {
            const articlesCol = collection(firestoreDb, 'articles')
            const articlesSnapshot = await getDocs(articlesCol)
            // console.log(articlesSnapshot)
            this.SET_ARTICLES(articlesSnapshot.docs)
        },
        INIT_ALL_DATA () {
            this.GET_ARTICLES()
            this.GET_DIRECTORS()
        },
        async UPDATE_DIRECTORS (docData) {
            await setDoc(doc(firestoreDb, "directors", docData.id), {
                biography: docData.biography,
                firstname: docData.firstname,
                headshot_img_url: docData.headshot_img_url,
                lastname: docData.lastname,
                live: docData.live,
                title: docData.title
            })
        }
    }
})