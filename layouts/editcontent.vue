<template>
    <div>
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
                                <tr v-for="directors in mainStore.directors">
                                    <td>{{ directors.firstname }}</td>
                                    <td>{{ directors.lastname }}</td>
                                    <td>{{ directors.title }}</td>
                                    <td><span v-if="directors.live">Yes</span><span v-else>NO</span></td>
                                    <td>{{ directors.headshot_img_url }}</td>
                                    <td><a><font-awesome-icon icon="fa fa-pencil"/></a></td>
                                </tr>
                            </tbody>
                            <!-- {{ mainStore.directors }} -->
                        </table>
                    </div>
                </div>
                <div class="tile is-parent is-vertical is-5">
                    <h1 class="title">Add New</h1>
                    <div class="tile is-child is-7">
                        <div class="container">
                            <div class="field">
                                <label class="label">First Name</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="John...">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-7">
                        <div class="container">
                            <div class="field">
                                <label class="label">Last Name</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Doe...">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-7">
                        <div class="container">
                            <div class="field">
                                <label class="label">Title</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Chairman...">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-7">
                        <div class="container">
                            <div class="field">
                                <label class="label">Biography</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Director Biography"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-child is-9">
                        <div class="container">
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox"/>
                                    Live on website?
                                </label>
                            </div>
                            <div class="file">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="headshot">
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
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { useMainStore } from "@/store/main";

export default {
    name: "EditContent",
    data() {
        return {
            mainStore: useMainStore()
        }
    },
    created() {
        console.log(this.mainStore)
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.mainStore.INIT_ALL_DATA();
        }
    }
}

</script>