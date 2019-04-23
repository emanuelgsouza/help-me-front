<template>
  <WrapperCard
    title="Nos dê mais informações a seu respeito"
  >
    <FormRow>
      <FormCol>
        <WrapperInput
          required
          label="Cidade onde mora"
          :value="model.city"
          @input="value => onInput('city', value)"
        />
      </FormCol>

      <FormCol>
        <WrapperInput
          required
          label="Profissão"
          :value="model.professional"
          @input="value => onInput('professional', value)"
        />
      </FormCol>
    </FormRow>

    <br />

    <FormRow>
      <FormCol>
        <WrapperInput
          label="Telefone"
          :value="model.phone"
          @input="value => onInput('phone', value)"
        />
      </FormCol>

      <FormCol>
        <WrapperYesNotOptions
          label="É empresário?"
          :value="model.is_employer"
          @input="value => onInput('is_employer', value)"
        />
      </FormCol>
    </FormRow>
  </WrapperCard>
</template>

<script>
import ComponentsMixin from '../support/components-mixin'

export default {
  name: 'NotEmployeeInformations',
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
