<template>
  <WrapperCard
    title="Informações Gerais"
  >
    <FormRow>
      <FormCol>
        <WrapperInput
          label="Nome"
          required
          :value="model.name"
          @input="value => onInput('name', value)"
        />
      </FormCol>

      <FormCol>
        <WrapperInput
          label="Email"
          :value="model.email"
          disable
        />
      </FormCol>
    </FormRow>
  </WrapperCard>
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
