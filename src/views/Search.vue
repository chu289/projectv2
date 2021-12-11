<template>
    <div id="search">
        {{this.searchResult}}    
    </div>
</template>

<script>
import { mapState } from "vuex";


export default {
    computed: {
        ...mapState(['searchResult'])
    }
}
</script>