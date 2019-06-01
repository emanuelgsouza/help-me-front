<template>
  <QPage padding>
    <p class="text-h5 no-margin"> Usuários cadastrados </p>
    <br />
    <UserListForm />
  </QPage>
</template>

<script>
import UserListForm from 'src/domains/User/components/List'

export default {
  name: 'UserListPage',
  components: { UserListForm }
}
</script>

<style>

</style>
