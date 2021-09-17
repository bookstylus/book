<template>
  <div
    class="
      w-full
      flex
      items-center
      justify-center
      bg-gradient-to-t
      from-gray-400
      to-gray-200
    "
  >
    <Flipbook
      v-slot="flipbook"
      ref=""
      class="flipbook"
      :pages="pages"
      :flip-duration="500"
      @flip-left-start="onFlipLeftStart"
      @flip-left-end="onFlipLeftEnd"
      @flip-right-start="onFlipRightStart"
      @flip-right-end="onFlipRightEnd"
    >
      <div class="flipbook__footer">
        <button class="button button--transparent" @click="flipbook.flipLeft">
          <ChevronLeft :classes="'icon'" />
        </button>
        <button class="button button--transparent" @click="flipbook.flipRight">
          <ChevronRight :classes="'icon'" />
        </button>
      </div>
    </Flipbook>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0,
      previousPage: 0,
      pages: [
        null,
        'https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/3083250/pexels-photo-3083250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
    }
  },
  methods: {
    onFlipLeftStart(page) {
      //   this.previousPage = page;
    },
    onFlipLeftEnd(page) {
      //   this.checkPage(page);
    },
    onFlipRightStart(page) {
      //   this.previousPage = page;
    },
    onFlipRightEnd(page) {
      //   this.checkPage(page);
    },
  },
}
</script>

<style lang="scss">
.page {
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.main-container {
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
}
.flipbook {
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  height: 90vh;
  justify-content: center;
  position: relative;
  width: 90vw;
}
.flipbook .bounding-box {
  box-shadow: 0px 50px 32px -40px rgba(0, 0, 0, 0.5),
    40px 10px 24px -32px rgba(0, 0, 0, 0.3),
    -40px 10px 24px -32px rgba(0, 0, 0, 0.3);
}

.flipbook__footer {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: -3rem;
  width: 100%;
  z-index: 1;
}
</style>
