<template>
    <div>
        <NuxtLink class="navbar-item" to="/">Home Page</NuxtLink>
        <section class="section">
            <h1 class="title">
                Edit Directors
            </h1>
            <div class="tile is-ancestor">
                <div class="tile is-parent is-vertical is-7">
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Title</th>
                                    <th>Live On Website</th>
                                    <th>Headshot Image URL</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="director in this.Directors">
                                    <td>{{ director.firstname }}</td>
                                    <td>{{ director.lastname }}</td>
                                    <td>{{ director.title }}</td>
                                    <td><span v-if="director.live">Yes</span><span v-else>NO</span></td>
                                    <td>{{ director.headshot_img_url }}</td>
                                    <td><a><font-awesome-icon icon="fa fa-pencil"/></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tile is-parent is-vertical is-5">
                    <h1 class="title">New Director</h1>
                    <div class="tile is-child is-7">
                        <div class="container">
                            <div class="field">
                                <label class="label">First Name</label>
                                <div class="control">
                                    <input class="input" v-model="newDirector.firstname" type="text" placeholder="John...">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-7">
                        <div class="container">
                            <div class="field">
                                <label class="label">Last Name</label>
                                <div class="control">
                                    <input class="input" v-model="newDirector.lastname" type="text" placeholder="Doe...">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-7">
                        <div class="container">
                            <div class="field">
                                <label class="label">Title</label>
                                <div class="control">
                                    <input class="input" v-model="newDirector.title" type="text" placeholder="Chairman...">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-7">
                        <div class="container">
                            <div class="field">
                                <label class="label">Biography</label>
                                <div class="control">
                                    <textarea class="textarea" v-model="newDirector.biography" placeholder="Director Biography"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-9">
                        <div class="container">
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox" v-model="newDirector.live"/>
                                    Live on website?
                                </label>
                            </div>
                            <div class="file">
                                <label class="file-label">
                                    <input class="file-input" @change="this.setFile" type="file" name="headshot">
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <font-awesome-icon icon="fa-solid fa-upload"/>
                                        </span>
                                        <span class="file-label">
                                            Upload Headshot…
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-3">
                        <div class="container">
                            <button @click="this.addDirector" class="button is-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <h1 class="title">
                Edit Articles
            </h1>
            <div class="tile is-ancestor">
                <div class="tile is-parent is-vertical is-12">
                    <div class="table-container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Content</th>
                                    <th>Article Image</th>
                                    <th>Slug</th>
                                    <th>Created At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="article in this.Articles">
                                    <td>{{ article.title }}</td>
                                    <td>{{ article.author }}</td>
                                    <td>{{ article.content }}</td>
                                    <td>{{ article.article_img }}</td>
                                    <td>{{ article.slug }}</td>
                                    <td>{{ article.created_at }}</td>
                                    <td><button class="js-modal-trigger" @click="this.openArticleModal(article.id)"><font-awesome-icon icon="fa fa-pencil"/></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <template v-for="article in this.Articles"><ArticleModal :id="`article-edit-modal-${article.id}`" :data-article="article"></ArticleModal></template>
            <div class="tile is-parent is-vertical is-5">
                <h1 class="title">New Article</h1>
                <div class="tile is-child is-7">
                    <div class="container">
                        <div class="field">
                            <label class="label">Author</label>
                            <div class="control">
                                <input class="input" type="text" v-model="newArticle.author" placeholder="John...">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tile is-child is-7">
                    <div class="container">
                        <div class="field">
                            <label class="label">Title</label>
                            <div class="control">
                                <input class="input" type="text" v-model="newArticle.title" placeholder="Title">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tile is-child is-7">
                    <div class="container">
                        <div class="field">
                            <label class="label">Content</label>
                            <div class="control">
                                <textarea class="textarea" v-model="newArticle.content" placeholder="Article Content"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tile is-child is-9">
                    <div class="container">
                        <div class="file has-name is-fullwidth">
                            <label class="file-label">
                                <input class="file-input" @change="this.setArticleFile" type="file" name="resume" />
                                <span class="file-cta">
                                <span class="file-icon">
                                    <font-awesome-icon icon="fa-solid fa-upload"/>
                                </span>
                                <span class="file-label"> Choose a file… </span>
                                </span>
                                <span class="file-name">{{ articleImageFile.article_img_name }}</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="tile is-child is-3">
                    <div class="container">
                        <button @click="this.addArticle" class="button is-success">Save</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useMinistryDataStore } from "~/store/MinistryData";
import ArticleModal from "~/components/modals/ArticleModal.vue"
export default {
    components: {
        ArticleModal
    },
    mounted () {

    },
    data() {
        return {
            newDirector: {
                firstname: '',
                lastname: '',
                biography: '',
                headshot_img_url: '',
                live: false,
                title: ''
            },
            directorImageFile: {
                headshot_img_data: {},
                headshot_img_name: ''
            },
            newArticle: {
                author: '',
                title: '',
                content: '',
                created_at: '',
                slug: '',
                article_img: ''
            },
            articleImageFile: {
                article_img_data: {},
                article_img_name: 'New File...'
            }
        }
    },
    computed: {
        ...mapState(useMinistryDataStore, ['Directors', 'Articles'])
    },
    methods: {
        ...mapActions(useMinistryDataStore, ['ADD_DIRECTOR', 'ADD_ARTICLE']),
        openArticleModal (id) {
            const target = document.getElementById(`article-edit-modal-${id}`)
            target.classList.add('is-active')
        },
        setFile(event) {
            this.directorImageFile.headshot_img_data = event.target.files[0]
            this.directorImageFile.headshot_img_name = event.target.files[0].name
        },
        addDirector () {
            this.ADD_DIRECTOR(this.newDirector, this.directorImageFile)
        },
        setArticleFile(event) {
            this.articleImageFile.article_img_data = event.target.files[0]
            this.articleImageFile.article_img_name = event.target.files[0].name
        },
        addArticle () {
            this.ADD_ARTICLE(this.newArticle, this.articleImageFile)
        }
    }
}
</script>