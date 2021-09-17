<template>
  <div class="bg-gray-500">
    <SocialHead :social="social" />
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
        <div class="flipbook__footer">
          <button class="button button--transparent" @click="flipbook.flipLeft">
            <ChevronLeft :classes="'icon'" />
          </button>
          <button
            class="button button--transparent"
            @click="flipbook.flipRight"
          >
            <ChevronRight :classes="'icon'" />
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
        url: '',
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
