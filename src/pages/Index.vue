<template>
  <Layout>
    <div class="blog-container bg-white px:1 lg:px-16" item-selector=".item" fit-width="true">
      <!-- Featured Post -->
      <Featured-Post/>
      <!-- Blog Post Loop -->
      <div class="item" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <div class="blog-post flex flex-row mb-5">
          <div class="blog-post--content">
            <div>
              <router-link :to="node.path">
                <h2 class="font-bold lg:text-2xl mb-2">{{node.title}}</h2>
              </router-link>
              <p>{{node.date}}</p>
            </div>
          </div>
          <g-image class="blog-post--image max-w-xs" :src="node.image" />
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
          date (format: "HH:MM D MMM, YYYY")
          description
          path
          image
          category
        }
      }
    }
  }
</page-query>
<script>
import FeaturedPost from "../components/FeaturedPost"

export default {
  components: {
    "Featured-Post": FeaturedPost
  }
};
</script>

<style lang="scss">
.blog-container {
  width: 100%;
  margin: 0 auto;
}

.blog-post {
  justify-content: space-between;
  &--content {
    flex-basis: 60%;
  }

  &--image {
    width: 90px;
    height: 90px;
    object-fit: cover;

    @media (min-width: 1024px) {
      height: 135px;
      width: 240px;
    }
  }
}
</style>