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
      <QList v-for="(menuItem, index) in menuList" :key="index">

        <QItem clickable :to="menuItem.to" v-ripple>
          <QItemSection avatar>
            <QIcon :name="menuItem.icon" />
          </QItemSection>
          <QItemSection>
            {{ menuItem.label }}
          </QItemSection>
        </QItem>

        <q-separator v-if="menuItem.separator" />

      </QList>
    </q-drawer>

    <q-page-container>
      <router-view />

      <QPageSticky position="bottom-right" :offset="[18, 18]">
        <QFab color="negative" icon="keyboard_arrow_up" direction="up">
          <QFabAction
            color="primary"
            icon="add"
            :to="{ 'name': 'dashboard.problems.create' }" />
        </QFab>
      </QPageSticky>
    </q-page-container>

  </q-layout>
</template>

<script>
import {
  QFab,
  QFabAction,
  QPageSticky,
  QList,
  QItem,
  QItemSection,
  QIcon,
  QSeparator
} from 'quasar'
import HeaderUserActions from './components/Header/UserActions'

export default {
  name: 'DashboardLayout',
  components: {
    QFab,
    QFabAction,
    QPageSticky,
    QList,
    QItem,
    QItemSection,
    QIcon,
    QSeparator,
    HeaderUserActions
  },
  data: () => ({
    left: false,
    menuList: [
      {
        icon: 'inbox',
        label: 'Problemas',
        separator: true,
        to: {
          name: 'dashboard.problems.list'
        }
      },
      {
        icon: 'add',
        label: 'Criar Problema',
        separator: true,
        to: {
          name: 'dashboard.problems.create'
        }
      }
    ]
  })
}
</script>

<style>

</style>
