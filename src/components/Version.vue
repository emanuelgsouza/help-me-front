<template>
  <div class="app-version">
    <QChip dense square icon="fas fa-tag" :color="color">
      {{ appVersion }}
    </QChip>
  </div>
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
  })
}
</script>

<style>

</style>
