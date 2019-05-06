<template>
  <QPage padding>
    <p class="text-h5 no-margin"> Atualize seus dados </p>

    <UserSettingsForm v-model="model" />
  </QPage>
</template>

<script>
import UserSettingsForm from 'src/domains/User/components/Settings'

export default {
  name: 'UserSettingsPage',
  components: { UserSettingsForm },
  data: () => ({
    model: {}
  })
}
</script>

<style>

</style>
