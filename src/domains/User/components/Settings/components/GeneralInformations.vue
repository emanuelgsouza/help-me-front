<template>
  <QForm>
    <QInput
      label="Nome"
      :value="model.name"
      @input="value => onInput('name', value)"
    />

    <QInput
      label="Email"
      :value="model.email"
      disable
    />
  </QForm>
</template>

<script>
import ComponentsMixin from '../support/components-mixin'

export default {
  name: 'GeneralInformations',
  mixins: [ ComponentsMixin ]
}
</script>

<style>

</style>
