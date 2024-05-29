<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          class="img"
          src="https://website.xdcdn.net/poster/187168/IGA%E6%AF%94%E8%B5%9B/80aNWNtf.png"
          alt=""
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div style="height: 100px; background-color: orange">1111</div>
  <div style="height: 100px; background-color: yellow">1111</div>
</template>

<style lang="less" scoped>
.bg-body-tertiary {
  background-color: red !important;

  .container-fluid {
    max-width: 1200rem;
    height: 80rem;
    background-color: #11b6d1;

    .img {
      width: 120rem;
      height: 100rem;
    }
  }
}
</style>
