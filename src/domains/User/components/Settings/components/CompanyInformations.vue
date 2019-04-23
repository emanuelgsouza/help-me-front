<template>
  <WrapperCard
    title="Conte-nos mais a respeito da empresa"
  >
    <FormRow>
      <FormCol>
        <WrapperInput
          label="Nome da empresa"
          :value="model.company_name"
          @input="value => onInput('company_name', value)"
        />
      </FormCol>

      <FormCol>
        <WrapperInput
          label="Ramo de atuação"
          :value="model.company_activity"
          @input="value => onInput('company_activity', value)"
        />
      </FormCol>
    </FormRow>

    <FormRow>
      <FormCol>
        <WrapperInput
          label="Telefone"
          :value="model.company_phone"
          @input="value => onInput('company_phone', value)"
        />
      </FormCol>
    </FormRow>
  </WrapperCard>
</template>

<script>
import ComponentsMixin from '../support/components-mixin'

export default {
  name: 'CompanyInformations',
  mixins: [ ComponentsMixin ],
  data: () => ({
    employerOptions: [
      { label: 'Sim', value: true },
      { label: 'Não', value: false }
    ]
  })
}
</script>

<style>

</style>
