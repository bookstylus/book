<template>
  <span v-if="false" />
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
export default {
  props: {
    base: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'article',
      name: `ConvitesOn`,
      url: `${this.$config.publicURL}${this.$route.path}`,
      description: this.description,
      image: `${this.$config.publicURL}${this.image}`,
    }
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
          content: '@/conviteson',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${this.$config.publicURL}${this.image}`,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title,
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
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'ConvitesOn',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${this.$config.publicURL}${this.$route.path}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.$config.publicURL}${this.image}`,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: `${this.$config.publicURL}${this.image}`,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title,
        },
      ],
    }
  },
}
</script>
