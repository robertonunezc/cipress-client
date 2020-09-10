<template>
  <div>
    <!-- <div class="card mt-2">
      <div class="card-body bg-warning">
        Este sitio es solo para el uso exclusivo de los vecinos de Cipress. Se les pide sean respetuosos y usen la plataforma
        de forma responsable para así poderla mejorar y sea de utilidad para todos. Es un proyecto gratuito en su totalidad.
        .
      </div>
    </div>-->
    <div class="header">
      <div class="d-flex w-100 justify-content-center mb-4">
        <input
          type="text"
          class="form-control"
          placeholder="Buscar productos"
          v-model="searchQuery"
          @change="onClearSearch"
        />
        <button class="search-button" @click="onSearch()">Buscar</button>
      </div>
      <ul class="small-categories d-md-flex d-none">
        <li v-for="(category, index) in categories" :key="category.id" class>
          <nuxt-link
            v-if="index < 6"
            class="small-category"
            :to="{name:'category-id', params: {id:category.id}}"
          >{{category.name}}</nuxt-link>
        </li>
      </ul>
      <nuxt-link to="/announcement/add" class="add-annonunc-btn">Quiero anunciarme</nuxt-link>
    </div>
    <h3 class="text-center">Categorías</h3>
    <div class="d-flex categories">
      <div
        class="category-item card p-2 text-center m-1"
        v-for="category in categories"
        :key="category.id"
      >
        <nuxt-link
          :to="{name:'category-id', params: {id:category.id}}"
          class="category-link"
        >{{category.name}}</nuxt-link>
      </div>
    </div>
    <h3 class="text-center">Anuncios</h3>
    <div class="d-flex">
      <button
        class="btn btn-success mb-2"
        v-if="searchQuery.length > 0"
        @click="onClearSearch()"
      >Ver todos los anuncios</button>
    </div>
    <div class="d-flex announcements">
      <announcement
        v-bind:announcement="announcement"
        v-for="announcement in announcements"
        :key="announcement.id"
      />
    </div>
  </div>
</template>

<script>
import Announcement from '~/components/Announcement.vue'

export default {
  components: {
    Announcement
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    announcements() {
      return this.$store.state.announcements
    }
  },
  created() {
    console.log('Create cat list')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getAnnouncements')
  },
  methods: {
    onSearch() {
      const searchQuery = this.searchQuery
      this.$store.dispatch('searchAnnouncements', this.searchQuery)
    },
    onClearSearch() {
      if (this.searchQuery != '') {
        this.searchQuery == ''
      }
      this.$store.dispatch('getAnnouncements')
    }
  }
}
</script>

<style>
body {
  background-color: lightblue;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('~assets/img/home.jpg');
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  height: 300px;
  margin-bottom: 1em;
}
.header input[type='text'] {
  width: 50%;
  border-radius: 4px 0 0 4px;
}
.add-annonunc-btn {
  padding: 1em;
  border-radius: 5px;
  border: solid 2px white;
  color: white;
  text-align: center;
}
.categories {
  flex-wrap: wrap !important;
}
.add-annonunc-btn:hover {
  text-decoration: none;
  border: solid 2px #d32323;
  color: #d32323;
}
.small-categories {
  flex-wrap: wrap;
}
.small-category {
  color: white;
  list-style: none;
  margin: 0.5em;
  font-weight: bolder;
}
.small-category:hover {
  color: #d32323;
  cursor: pointer;
}
.announcements {
  flex-wrap: wrap;
}
.announcement {
  flex: 0 1 19%;
}
.search-button {
  border-radius: 0 4px 4px 0;
  border: 0;
  background: #d32323;
  box-shadow: none;
  color: white;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.category-item {
  border: #d32323;
}
.category-link {
  color: #d32323;
}
.category-link:hover {
  text-decoration: none;
  color: #d32323;
}
@media only screen and (max-width: 800px) {
  .announcement {
    flex: 1 1 100%;
  }
}
</style>
