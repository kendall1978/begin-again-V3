<template>
    <TheNav/>
    <div>
        TEST
        <slot />
    </div>
    <TheFooter/>
</template>

<script>
    export default {
        created () {
            this.fetchSheetsData()
        },
        methods: {
            fetchSheetsData () {
                console.log('test')
            }
        }
    } 

</script>
