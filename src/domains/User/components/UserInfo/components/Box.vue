<template>
  <div class="user-info-box">
    <p class="no-margin"> {{ title }} </p>

    <div>
      <QChip
        square
        v-for="(info, key) in infos"
        :key="key"
        v-bind="info"
        :label="getLabel(info)"
      />
    </div>
  </div>
</template>

<script>
import { QChip } from 'quasar'
import { isEmpty, isBoolean } from 'lodash'

export default {
  name: 'UserInfoBox',
  props: {
    title: String,
    infos: Array
  },
  components: { QChip },
  methods: {
    getLabel (info) {
      const { prefix, label } = info
      if (isBoolean(label)) {
        return label
      }

      if (isEmpty(prefix)) {
        return label
      }

      return isEmpty(label) ? 'Não informado' : `${prefix}: ${label}`
    }
  }
}
</script>
