<template>
  <QInput
    filled
    v-bind="$attrs"
    :hint="required ? 'Obrigatório' : null"
    :value="value"
    @input="value => $emit('input', value)"
  />
</template>

<script>
import { QInput } from 'quasar'

export default {
  name: 'WrapperInput',
  components: { QInput },
  props: {
    value: [String, Number],
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
