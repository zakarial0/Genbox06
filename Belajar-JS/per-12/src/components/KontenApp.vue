<template>
<div class="konten">
        <h1>Welcome <br>To My Website.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, provident magni. 
            Quae sequi at, provident perspiciatis nihil maxime sapiente placeat </p>

        <div class="klik">
            <a href="#" id="chat"><button>Chat me</button></a>
            <a href="#" id="more"><button>More</button></a>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'KontenApp'
    }
    // ini dipake buat ngasih nama export component
</script>

<!-- scope buat css bekerja di component ini doang -->
<style scoped>
.konten {
    width: 70%;
    margin-left: 77px;
    margin-top: 8%;
}
.konten h1 {
    font-size: 76px;
    color: white;
}
.konten p{
    color: white;
    font-size: 20px;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 40px;
}

#chat button{
width: 157px;
height: 51px;
border-radius: 8px;
font-size: 22px;
border-style: none;
margin-right: 10px;
}
#chat :hover {
    background-color: #4ECCA3;
    color: white;
}

#more  button{
    width: 157px;
    height: 51px;
    border-radius: 8px;
    font-size: 22px;
    border: 4px solid #4ECCA3;
    background-color: rgba(0, 0, 0, 0);
    color: #4ECCA3;
    transform: 0.8s;
}
#more :hover{
    border: 0;
    background-color: white;
    color: black;
}
</style>
