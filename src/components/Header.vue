<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-header">  
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" active-class="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
        <router-link to="/stocks" active-class="active" tag="li"><a class="nav-link">Stocks</a></router-link>
      </ul>
      <ul class="navbar-nav">
        <li><a href="#" class="nav-link">End Day</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
    data: () => ({})
}
</script>
