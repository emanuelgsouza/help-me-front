<template>
  <QInnerLoading :showing="loading">
    <QSpinnerGears color="primary" size="64px" />
  </QInnerLoading>
</template>

<script>
import { QInnerLoading, QSpinnerGears } from 'quasar'

export default {
  name: 'AppLoading',
  components: { QInnerLoading, QSpinnerGears },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
