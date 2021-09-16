<template>
  <div id="app">
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.setAppHeight()
    window.addEventListener('resize', this.setAppHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.setAppHeight)
  },
  methods: {
    // get viewport height
    setAppHeight() {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    },
  },
}
</script>

<style lang="scss">
:root {
  --app-height: 100%;
}

html,
body,
.inner-h {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  height: var(--app-height);
}
</style>
