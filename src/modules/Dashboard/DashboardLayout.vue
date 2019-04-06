<template>
  <q-layout view="lHh lpR lFf">

    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Help-Me!
        </q-toolbar-title>
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
export default {
  name: 'DashboardLayout',
  components: {
  },
  data: () => ({
    left: false
  })
}
</script>

<style>

</style>
