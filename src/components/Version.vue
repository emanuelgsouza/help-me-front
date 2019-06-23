<template>
  <QChip
    class="app-version"
    dense
    square
    icon="fas fa-tag"
    :color="color"
    :text-color="textColor"
    v-bind="$attrs"
  >
      v.{{ appVersion }}
  </QChip>
</template>

<script>
import { QChip } from 'quasar'
import pkg from '../../package.json'

export default {
  name: 'AppVersion',
  components: { QChip },
  props: {
    color: String
  },
  data: () => ({
    appVersion: pkg.version
  }),
  computed: {
    textColor () {
      if (this.color === 'primary') {
        return 'white'
      }

      return 'primary'
    }
  }
}
</script>

<style>

</style>
