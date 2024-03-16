<template>
    <div>
        <Editcontent></Editcontent>
    </div>
</template>

<script setup>
import Editcontent from '~/layouts/editcontent.vue';
import { useMainStore } from "@/store/main";

const mainStore = useMainStore();

</script>