<template>
  <div>
    <label> {{ $attrs.label }} </label>
    <QOptionGroup
      inline
      filled
      :options="options"
      :value="value"
      @input="value => $emit('input', value)"
    />
  </div>
</template>

<script>
import { QOptionGroup } from 'quasar'
import { YES_NOT_OPTIONS } from 'src/support/constants'

export default {
  name: 'WrapperYesNotOptions',
  components: { QOptionGroup },
  data: () => ({
    options: YES_NOT_OPTIONS
  }),
  props: {
    value: Boolean
  }
}
</script>

<style>

</style>
