<template>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button class="delete" @click="closeModal" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="tile is-parent is-vertical is-12">
                    <h1 class="title">Edit {{ dataArticle.title }}</h1>
                    <div class="tile is-child is-10">
                        <div class="container">
                            <div class="field">
                                <label class="label">Author</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="newArticle.author">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-10">
                        <div class="container">
                            <div class="field">
                                <label class="label">Title</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="newArticle.title">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-10">
                        <div class="container">
                            <div class="field">
                                <label class="label">Content</label>
                                <div class="control">
                                    <textarea class="textarea" v-model="newArticle.content"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-10">
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
                </div>
            </section>
            <footer class="modal-card-foot">
            <div class="buttons">
                <button class="button is-success" @click="this.addArticle">Save changes</button>
                <button class="button" @click="closeModal">Cancel</button>
            </div>
            </footer>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useMinistryDataStore } from "~/store/MinistryData";
export default {
    props: {
        dataArticle: {
            type: [Object, Array],
            required: false
        }
    },
    data () {
        return {
            newArticle: {
                author: this.dataArticle.author,
                title: this.dataArticle.title,
                content: this.dataArticle.content,
                created_at: this.dataArticle.created_at,
                slug: this.dataArticle.slug,
                article_img: this.dataArticle.article_img
            },
            articleImageFile: {
                article_img_data: {},
                article_img_name: 'New File...'
            }
        }
    },
    methods: {
        ...mapActions(useMinistryDataStore, ['ADD_DIRECTOR', 'ADD_ARTICLE', 'UPDATE_ARTICLE']),
        closeModal () {
            const target = document.getElementById(`article-edit-modal-${this.dataArticle.id}`) 
            target.classList.remove('is-active')
        },
        setArticleFile(event) {
            this.articleImageFile.article_img_data = event.target.files[0]
            this.articleImageFile.article_img_name = event.target.files[0].name
        },
        addArticle () {
            if (this.dataArticle) {
                this.UPDATE_ARTICLE(this.dataArticle.id, this.newArticle, this.articleImageFile)
            }
            else {
                this.ADD_ARTICLE(this.newArticle, this.articleImageFile)
            }
        }
    }
}
</script>
