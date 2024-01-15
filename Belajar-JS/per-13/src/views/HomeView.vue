<template>
  <div class="home">
    <h3>{{ judul }}</h3>
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <CardName nama="Asep" umur="23"/>
    <CardName nama="coki" umur="23"/>
    <CardName nama="Asep" umur="23"/>
    <CardName nama="Budi" umur="20"/> -->

    <!-- cara lebih singkat pake loop-->
    <!-- key penting buat mancing proses loop -->
    <div v-for="item in datas" :key="item.umur">
      <span>{{ i }}</span>
      <CardName :nama="item.nama" :umur="item.umur" />
    </div>
  </div>
</template>

<script>
import CardName from "@/components/CardName.vue"

export default {
    name: 'HomeView',
    // components: {
    //   CardName
    // }
    
    // data dalam array buat looping
    data() {
        return {
            judul: "Web DEDE",
            datas: [
                {
                    nama: "Asep",
                    umur: 17
                },
                {
                    nama: "Asep",
                    umur: 23
                },
                {
                    nama: "Budi",
                    umur: 25
                },
                {
                    nama: "Coki",
                    umur: 52
                }
            ]
        };
    },
    components: { CardName }
}
</script>
