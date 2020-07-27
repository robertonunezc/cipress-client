<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">CipressVecinos</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/">Inicio</nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nuevo Anuncio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#admin-contact">Contactar administrador</a>
          </li>
        </ul>
        <!-- <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Buscar producto"
            aria-label="Search"
          />
          <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Buscar</button>
        </form>-->
      </div>
    </nav>
    <nuxt />
    <div class="footer text-center" id="admin-contact">
      <span>Contacto administrador</span>
      <a href="mailto:rcorralesn@gmail.com">rcorralesn@gmail.com</a>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  /*background-color: #343a40;*/
  color: black;
}
.footer a {
  color: black;
}
</style>
