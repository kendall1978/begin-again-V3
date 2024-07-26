<template>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" @click="closeModal" aria-label="close"></button>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        directorData: {
            type: [Object, Array],
            required: true
        }
    },
    data () {
        return {
            newDirector: {
                firstname: this.directorData.firstname,
                lastname: this.directorData.lastname,
                biography: this.directorData.biography,
                headshot_img_url: this.directorData.headshot_img_url,
                live: this.directorData.live,
                title: this.directorData.title
            },
        }
    }
}
</script>
