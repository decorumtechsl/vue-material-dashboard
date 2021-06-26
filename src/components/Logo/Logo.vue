<template>
  <div class="box">
      <div class="app-logo">
        <img class="img logo-container" :src="cardUserImage"  />
        <div class="box-column">
          <h4 class="title lore-title logo-text-color">LORE</h4>
          <p class="category lore-sub-title logo-text-color">Strong Bond</p>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Logo',
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/lore-logo-bg-white.png")
    }
  }
}

</script>
