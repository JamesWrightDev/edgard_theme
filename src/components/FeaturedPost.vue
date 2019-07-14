<template>
  <div class="blog-featured flex flex-col-reverse mb-5 lg:flex-row lg:flex-row-reverse lg:flex-no-wrap">
    <div class="blog-featured--content my-5 lg:mg-0">
      <h2
        class="font-bold lg:text-2xl"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quae quam laborum quas enim?</h2>
    </div>

    <g-image
      class="blog-featured--image"
      src="https://cdn.pixabay.com/photo/2019/07/06/03/30/sand-dune-4319681_1280.jpg"
    />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.blog-featured {
  height: 300px;
  overflow: hidden;
  @media (min-width: 1024px) {
    height: auto;
  }
  &--image {
    width: 100%;
    max-height: 300px;
  }
  &--content {
    background-color: white;
    width: 80%;

    @media (min-width: 1024px) {
      position: relative;
      top: 20px;
      transform: translateY(0px);
      left: -55px;
      padding: 24px;
      height: 100%;
    }
  }
}
</style>
