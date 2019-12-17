<template>
    <el-col :span="24">
        <img class="titleImg" :src="imgSrc">
    </el-col>
</template>
<script>
export default {
    name:"Title",
    data(){
        return {
            imgSrc:require('../assets/title.png'),
        }
    }
}
</script>