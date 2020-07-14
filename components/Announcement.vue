<template>
  <div class="announcement card m-1">
    <div class="card-body">
      <h5 class="card-title">{{announcement.short_name}}</h5>
      <p class="card-text">{{announcement.description}}</p>
      <hr />
      <div class="card-text" v-if="!hideContactData">
        <p>{{announcement.owner_name}}</p>
        <p>{{announcement.telephone}}</p>
      </div>
      <a
        href="#"
        class="btn btn-danger"
        @click="hideContactData = !hideContactData"
      >Ver datos contacto</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['announcement'],
  data() {
    return {
      hideContactData: true
    }
  }
}
</script>

<style>
.announcement .card-body {
  flex-direction: column;
  justify-content: space-between;
  display: flex;
}
</style>