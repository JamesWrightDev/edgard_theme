<template>
  <Layout>
    <div class="header">
      <h2 class="text-6xl my-12 font-mono">Edgar</h2>
    </div>
    <div v-masonry class="container" item-selector=".item" fit-width="true">

    <div v-masonry-tile class="item" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
       <div class=" card max-w-xs rounded overflow-hidden shadow-lg mb-5 mr-5">
          <g-image class="w-full" :src="node.image" />
          <div>
            <div class="p-5">
              <router-link :to="node.path">
                <h2 class="font-bold text-xl mb-2">{{node.title}}</h2>
              </router-link>
              <p class="mb-5">{{node.description}}</p>
              <p>{{node.category}}</p>
            </div>
          </div>

        </div>
    </div>
  </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
          image
          category
        }
      }
    }
  }
</page-query>

<style lang="scss">
.card{
  transition: box-shadow 0.8s cubic-bezier(.25,.8,.25,1), transform 0.9s cubic-bezier(.25,.8,.25,1);
}
.card:hover {
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  transform: translateY(-10px);
}
</style>