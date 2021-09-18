<template>
  <span v-if="false" />
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
export default {
  props: {
    social: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      meta: [
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: `@/${this.social.twitter}`,
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: `@/${this.social.twitter}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.social.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.social.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.social.photo,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.social.title,
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '335122579943720',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.social.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.social.description,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.social.sitename,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.$config.baseURL}${this.$route.path}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.photo,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.photo,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.social.title,
        },
      ],
    }
  },
  computed: {
    photo1x1() {
      const width = 1200
      const height = 1200
      const img = this.$img(this.social.image, {
        width,
        height,
        quality: 70,
        format: 'webp',
      })
      return `${this.$config.baseURL}${img}`
    },
    photo4x3() {
      const width = 1200
      const height = 900
      const img = this.$img(this.social.image, {
        width,
        height,
        quality: 70,
        format: 'webp',
      })
      return `${this.$config.baseURL}${img}`
    },
    photo3x4() {
      const width = 1200
      const height = 1600
      const img = this.$img(this.social.image, {
        width,
        height,
        quality: 70,
        format: 'webp',
      })
      return `${this.$config.baseURL}${img}`
    },
    photo() {
      const width = 1200
      const height = 600
      const img = this.$img(this.social.image, {
        width,
        height,
        quality: 70,
        format: 'webp',
      })
      return `${this.$config.baseURL}${img}`
    },
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'NewsArticle',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${this.$config.baseURL}${this.$route.path}`,
          },
          headline: this.social.title,
          description: this.social.description,
          image: [this.photo1x1, this.photo4x3, this.photo3x4],
          datePublished: new Date(Date.now()),
          dateModified: new Date(Date.now()),
          author: {
            '@id': `${this.$config.baseURL}/#Author`,
          },
          publisher: {
            '@type': 'Organization',
            name: 'ConvitesOn',
            logo: {
              '@type': 'ImageObject',
              url: '${this.$config.baseURL}/icon.png',
            },
            url: this.$config.baseURL,
            sameAs: [
              'https://www.facebook.com/convitesoncom/',
              'https://www.instagram.com/convitesoncom/',
              'https://g.page/conviteson?share',
              'https://twitter.com/conviteson',
            ],
          },
        },
        {
          '@type': 'Author',
          '@id': `${this.$config.baseURL}/#Author`,
          name: this.social.name,
          image: this.photo1x1,
          url: `${this.$config.baseURL}${this.$route.path}`,
          sameAs: this.social.socials,
        },
      ],
    }
  },
}
</script>
