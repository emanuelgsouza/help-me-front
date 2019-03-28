<template>
  <q-layout>
    <q-page-container>
      <QPage>
        <HomeHeader />
      </QPage>
    </q-page-container>
  </q-layout>
</template>

<script>
import HomeHeader from './components/Header'

export default {
  name: 'HomeLayout',
  components: {
    HomeHeader
  }
}
</script>

<style>

</style>
