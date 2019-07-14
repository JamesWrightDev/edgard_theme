<template>
  <Layout>
    <div class="header">
      <h2 class="text-6xl my-12 font-mono">Edgar</h2>
    </div>
    <ul class="articles container flex justify-center lex-wrap">
      <li class="w-1/2" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <div class="article rounded m-3 shadow-lg">
          <g-image :src="node.image" />

          <div class="hover">
            <div class="p-5">
              <router-link :to="node.path">
                <h2 class="font-bold text-xl mb-2">{{node.title}}</h2>
              </router-link>
              <p>{{node.description}}</p>
            </div>
          </div>

        </div>
      </li>
    </ul>
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
        }
      }
    }
  }
</page-query>

<style lang="scss">
.article{
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>