<template>
  <div class="bg-gray-500">
    <SocialHead :social="social" />
    <div
      class="
        w-full
        flex
        items-center
        justify-center
        h-screen
        bg-gradient-to-tl
        from-gray-900
        to-gray-600
      "
    >
      <Flipbook
        v-slot="flipbook"
        ref="flipbook"
        class="flipbook"
        :pages="pages"
        :pages-hi-res="pagesHiRes"
        :zooms="[1, 2]"
        :flip-duration="800"
        @flip-left-start="onFlipLeftStart"
        @flip-left-end="onFlipLeftEnd"
        @flip-right-start="onFlipRightStart"
        @flip-right-end="onFlipRightEnd"
      >
        <div class="absolute inset-y-0 flex items-center z-10 -left-2">
          <button
            class="bg-white/80 rounded-full p-2"
            :class="{ hidden: !flipbook.canFlipLeft }"
            @click="flipbook.flipLeft"
          >
            <Icon icon="heroicons-solid:chevron-left" class="w-8 h-8" />
          </button>
        </div>
        <div class="absolute inset-y-0 flex items-center z-10 -right-2">
          <button
            class="bg-white/80 rounded-full p-2"
            :class="{ hidden: !flipbook.canFlipRight }"
            @click="flipbook.flipRight"
          >
            <Icon icon="heroicons-solid:chevron-right" class="w-8 h-8" />
          </button>
        </div>
      </Flipbook>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: {
        title: 'ConvitesOn',
        description: 'ConvitesOn - compartilhe seu sucesso',
        image: 'images/1.jpg',
        twitter: 'conviteson',
      },
      currentPage: 0,
      previousPage: 0,
      images: [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg',
      ],
    }
  },
  computed: {
    pages() {
      const pages = [null]
      const images = this.images.map((image) => {
        return this.$img(image, { width: '512', quality: 50, format: 'webp' })
      })
      return pages.concat(images)
    },
    pagesHiRes() {
      const pages = [null]
      const images = this.images.map((image) => {
        return this.$img(image, {
          width: '1024',
          quality: 80,
          format: 'webp',
        })
      })
      return pages.concat(images)
    },
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
  width: 90vw;
  justify-content: center;
  position: relative;
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
