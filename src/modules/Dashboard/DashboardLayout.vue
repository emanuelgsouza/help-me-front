<template>
  <q-layout view="lHh lpR lFf">

    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Help-Me!
        </q-toolbar-title>

        <HeaderUserActions />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import HeaderUserActions from './components/Header/UserActions'

export default {
  name: 'DashboardLayout',
  components: {
    HeaderUserActions
  },
  data: () => ({
    left: false
  })
}
</script>

<style>

</style>
