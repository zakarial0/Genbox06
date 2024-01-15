<!-- ini buat apa aja yang ada di file -->
<template>
    <h1>Data</h1>
    <div>
        <!-- conditional render -->
        <div v-if="nama === 'Asep'">
            <span>nama : kece</span>
        </div>
        <div v-else-if="nama === 'Budi'">
            <span>nama : man</span>
        </div>
        <div v-else>
            <span>nama : ga tau siapa</span>
        </div>
        <span>umur : {{umur}} <!-- ini cara pake props--></span>
    </div>
</template>
<!-- ini buat script -->
<script>
export default {
    name : 'CardName',
    props : {
        nama : String, 
        umur : String, 
    }
}
</script>