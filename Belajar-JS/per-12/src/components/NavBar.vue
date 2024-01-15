<template>
    <div class="navbar">
        <h1>MyWeb.</h1>
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
    </div>
</template>

<script>

    export default {
    name: 'NavBar'
    }
    // ini dipake buat ngasih nama export component
</script>

<!-- scope buat css bekerja di component ini doang -->
<style scoped>
.navbar {
    margin: 20px 0;
    position: relative;
    height: 60px;
    padding-bottom: 20px;
    box-sizing: border-box;
}
.navbar h1{
    color: #4ECCA3;
    display: inline-block;
    margin: 0px 77px;
    font-size: 48px;
}
.navbar a{
    text-decoration: none;
    font-size: 24px;
    color: white;
    margin-right: 70px;
    display: inline-block;
    transform: 0.8s;
}

.navbar a:hover{
    color: #4ECCA3;
    border-bottom: 2px solid #4ECCA3;
    border-radius: 3px;
    font-size: 28px;
}
</style>
