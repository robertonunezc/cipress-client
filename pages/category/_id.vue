<template>
  <div>
    <div class="row">
      <div class="col">
        <hr />
      </div>
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
      announcements: [],
      category: null
    }
  },
  created() {
    const self = this
    console.log('Categoria ')
    const categoryId = this.$route.params.id
    this.$store
      .dispatch('getAnnouncementsByCategory', categoryId)
      .then(response => {
        self.announcements = response
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>
</style>