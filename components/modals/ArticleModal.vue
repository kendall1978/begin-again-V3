<template>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button class="delete" @click="closeModal" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
            <!-- Content ... -->
            </section>
            <footer class="modal-card-foot">
            <div class="buttons">
                <button class="button is-success">Save changes</button>
                <button class="button" @click="closeModal">Cancel</button>
            </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dataArticle: {
            type: [Object, Array],
            required: false
        }
    },
    methods: {
        closeModal () {
            const target = document.getElementById(`article-edit-modal-${this.dataArticle.id}`) 
            target.classList.remove('is-active')
        }
    }
}
</script>
