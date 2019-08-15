<template lang="pug">
  .v-container.pa-4
    // Main content
    v-layout(column justify-center align-center).text-xs-center
      v-flex(xs12 md10)
        .headline.pb-4
          span(v-html='$t("home.info")')
</template>

<script>
export default {
  components: {}
};
</script>
