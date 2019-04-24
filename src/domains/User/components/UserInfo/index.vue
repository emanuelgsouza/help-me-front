<template>
  <div class="user-info">
    <p class="no-margin"> Informações Gerais </p>
    <div>
      <QChip icon="fas fa-user" square> {{ user.name }} </QChip>
      <QChip icon="fas fa-envelope" square> {{ user.email }} </QChip>
    </div>
    <!-- Exibir informações como matrícula, se o mesmo for estudante -->

    <!-- Exibir informações da empresa, se o mesmo for empresário e não funcionário da Unigranrio -->

    <!-- Exibir outras informações caso o mesmo seja funcionário da Unigranrio -->
  </div>
</template>

<script>
import { QChip } from 'quasar'

export default {
  name: 'UserInfo',
  components: {
    QChip
  },
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>

</style>
