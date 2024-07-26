import { defineStore } from 'pinia';
import { piniaInstance } from '~/server/lib/global';
import { fireStore } from '~/server/lib/firestore';
import { query, collection, getDocs, setDoc, onSnapshot, doc, addDoc } from '@firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import { Directors, MegansPlace } from '#build/components';

interface Article {
  id?: string,
  article_img?: string,
  slug?: string,
  author?: string,
  content?: string,
  created_at?: Date,
  title?: string
}

interface Director {
  id?: string,
  biography?: string,
  firstname?: string,
  headshot_imge_url?: string,
  lastname?: string,
  live?: boolean,
  title?: string
}

export const useMinistryDataStore = defineStore({
    id: 'ministry-data',
    state: () => ({
      articles: [],
      directors: []
    }),
    actions: {
      async GET_ARTICLES () {
        const articlesQuery = await getDocs(collection(fireStore, 'articles'))
        articlesQuery.forEach((doc) => {
            let dataObj = this.createArticle({id: doc.id, article_img: doc.data().article_img, slug: doc.data().slug, author: doc.data().author, content: doc.data().content, created_at: doc.data().created_at, title: doc.data().title})
            this.articles.push(dataObj);
        })
      },
      async GET_DIRECTORS () {
        const directorsQuery = await getDocs(collection(fireStore, 'directors'))
        directorsQuery.forEach((doc) => {
          this.directors.push(this.createDirector({id: doc.id, biography: doc.data().biography, firstname: doc.data().firstname, lastname: doc.data().lastname, headshot_imge_url: doc.data().headshot_imge_url, live: doc.data().live, title: doc.data().title}))
        })
      },
      createArticle(config: Article) {
        return {
          id: config.id,
          article_img: config.article_img,
          slug: config.slug,
          author: config.author,
          content: config.content,
          created_at: config.created_at,
          title: config.title
        }
      },
      createDirector(config: Director) {
        return {
          id: config.id,
          biography: config.biography,
          firstname: config.firstname,
          headshot_imge_url: config.headshot_imge_url,
          lastname: config.lastname,
          live: config.live,
          title: config.title
        }
      },
      async ADD_DIRECTOR (newDirector, directorImageFile) {
        // upload image to firebase storage
        const storage = getStorage()
        const storageRef = ref(storage, directorImageFile.headshot_img_name)
        await uploadBytes(storageRef, directorImageFile.headshot_img_data).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            newDirector.headshot_img_url = downloadURL
            addDoc(collection(fireStore, 'directors'), {
              firstname: newDirector.firstname,
              lastname: newDirector.lastname,
              biography: newDirector.biography,
              headshot_img_url: newDirector.headshot_img_url,
              live: newDirector.live,
              title: newDirector.title
            }).then((snapshot) => {
              console.log(snapshot)
            })
          });
        });
      },
      async ADD_ARTICLE (newArticle, articleImageFile) {
        // upload image to firebase storage
        const storage = getStorage()
        const storageRef = ref(storage, articleImageFile.headshot_img_name)
        await uploadBytes(storageRef, articleImageFile.headshot_img_data).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            newArticle.article_img = downloadURL
            addDoc(collection(fireStore, 'articles'), {
              author: newArticle.author,
              content: newArticle.content,
              article_img: newArticle.article_img,
              slug: newArticle.slug,
              created_at: Date.now(),
              
            })
          })
        })
      },
      UPDATE_ARTICLE (articleId, newArticleData, articleImageFile) {
        const docRef = doc(fireStore, "articles", articleId)
        console.log(docRef)
        
        console.log("Article ID: " + articleId)
        console.log(newArticleData)
        console.log(articleImageFile)
      },
      GET_ARTICLE_BY_ID (id) {
        
      }
    },
    getters: {
      MegansPlace: state => state.articles.find(i => i.id === 'tdeYzD3VUE4cR6qPupTH'),
      Directors: state => state.directors,
      Articles: state => state.articles
    }
  })
  
