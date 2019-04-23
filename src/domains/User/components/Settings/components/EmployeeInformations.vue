<template>
  <WrapperCard
    title="Nos diga um pouco mais do seu papel aqui na Unigranrio"
  >
    <QForm>
      <FormRow>
        <FormCol>
          <WrapperInput
            label="Qual o setor você trabalha? Ou o(s) curso(s) em que ministra aulas?"
            :value="model.employee_observations"
            @input="value => onInput('employee_observations', value)"
          />
        </FormCol>

        <FormCol>
          <WrapperInput
            label="Sua matrícula"
            :value="model.employee_register"
            @input="value => onInput('employee_register', value)"
          />
        </FormCol>
      </FormRow>

      <FormRow>
        <FormCol>
          <WrapperYesNotOptions
            label="É coordenador de curso?"
            :value="model.is_course_coordinator"
            @input="value => onInput('is_course_coordinator', value)"
          />
        </FormCol>
      </FormRow>
    </QForm>
  </WrapperCard>
</template>

<script>
import ComponentsMixin from '../support/components-mixin'

export default {
  name: 'EmployeeInformations',
  mixins: [ ComponentsMixin ]
}
</script>

<style>

</style>
