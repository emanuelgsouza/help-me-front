<template>
  <WrapperCard
    title="Informações do estudante"
  >
    <WrapperInput
      required
      label="Matrícula"
      :value="model.registration"
      @input="value => onInput('registration', value)"
    />
  </WrapperCard>
</template>

<script>
import ComponentsMixin from '../support/components-mixin'

export default {
  name: 'StudentInformations',
  mixins: [ ComponentsMixin ]
}
</script>

<style>

</style>
