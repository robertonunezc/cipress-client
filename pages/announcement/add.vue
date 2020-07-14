<template>
  <div class="m-2">
    <div class="row">
      <div class="col-12">
        <h3>Crear un anuncio</h3>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
        <form class="card p-2">
          <div class="form-row">
            <div class="col-12 col-md-4 mt-2">
              <label for>Nombre Producto o servicio</label>
              <input
                type="text"
                class="form-control"
                maxlength="50"
                v-model="announcement.short_name"
                placeholder="Nombre producto"
              />
            </div>
            <div class="col-12 col-md-4 mt-2">
              <label for>Categoría de Producto o servicio</label>
              <select
                name="category"
                id="categories"
                v-model="announcement.category"
                class="form-control"
              >
                <option value="-1" selected>--categorias--</option>
                <option
                  v-for="category in categories"
                  :key="category.id"
                  v-bind:value="category.id"
                >{{category.name}}</option>
              </select>
            </div>
            <div class="col-12 col-md-4 mt-2">
              <label for>Descripción de Producto o servicio</label>
              <textarea
                v-model="announcement.description"
                class="form-control"
                placeholder="Descripción de su producto, precio , dirección u otro dato que crea necesario"
              />
            </div>
          </div>
          <h3 class="mt-3">Datos del anunciante</h3>
          <hr />
          <div class="form-row">
            <div class="col-12 col-md-4 mt-2">
              <label for>Nombre</label>

              <input
                type="text"
                class="form-control"
                v-model="announcement.owner_name"
                placeholder="Nombre Anunciante"
              />
            </div>
            <div class="col-12 col-md-4 mt-2">
              <label for>Teléfono</label>

              <input
                type="number"
                maxlength="10"
                class="form-control"
                v-model="announcement.telephone"
                placeholder="Teléfono Anunciante"
              />
            </div>
            <!-- <div class="col-12 col-md-4 mt-2">
              <input
                type="file"
                maxlength="10"
                max="10"
                class="form-control"
                placeholder="Teléfono Anunciante"
              />
            </div>-->
          </div>
          <div class="row mt-3">
            <div class="col">
              <button
                class="btn btn-block btn-danger"
                @click.prevent="addAnnouncement"
              >Crear Anuncio</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-12 col-md-4">
        <div class="card m-1">
          <div class="card-body">
            <h5 class="card-title">{{announcement.short_name}}</h5>
            <p class="card-text">{{announcement.description}}</p>
            <p class="card-text">{{announcement.owner_name}}</p>
            <p class="card-text">{{announcement.telephone}}</p>

            <a href="#" class="btn btn-danger">Ver datos contacto</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      announcement: {
        short_name: '',
        description: '',
        owner_name: '',
        telephone: '',
        image: '',
        category: null
      }
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    }
  },
  methods: {
    addAnnouncement() {
      this.$store.dispatch('setAnnouncement', this.announcement);
      
    }
  }
}
</script>

<style>
</style>