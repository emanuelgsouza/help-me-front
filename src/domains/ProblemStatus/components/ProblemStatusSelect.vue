<script>
import { QSelect } from 'quasar'
import injectApplication from 'src/domains/Application/mixins/inject-application'

export default {
  name: 'ProblemStatusSelect',
  mixins: [ injectApplication ],
  components: { QSelect }
}
</script>

<template>
  <QSelect
    :options="problemsStatusesOptions"
    emit-value
    option-label="label"
    option-value="value"
    map-options
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
