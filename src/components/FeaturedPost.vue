<template>
    <div class="blog-featured flex flex-col-reverse">
        <h2 class=" font-bold  lg:text-4xl  blog-featured--content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quae quam laborum quas enim?</h2>

        <g-image class="blog-featured--image" src="https://cdn.pixabay.com/photo/2019/07/06/03/30/sand-dune-4319681_1280.jpg"/>

      </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">

.blog-featured {
    width: 100%;

    &--content{
        background-color: white;
        transform: translateY(-40px);
        width: 80%;
        margin: auto;
    }
}

</style>
