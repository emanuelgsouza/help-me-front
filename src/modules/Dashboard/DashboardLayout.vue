<template>
  <q-layout view="lHr Lpr lfr">

    <q-header elevated class="app-header text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Help-Me!
        </q-toolbar-title>

        <HeaderUserActions />
      </q-toolbar>
    </q-header>

    <QDrawer behavior="mobile" v-model="left" side="left" bordered>
      <figure>
        <img
          src="https://portal.unigranrio.edu.br/hs-fs/hubfs/logo_azul-topo.png?width=243&name=logo_azul-topo.png" />
      </figure>
      <QList v-for="(menuItem, index) in menuList" :key="index">

        <QItem
          v-if="filterItem(menuItem)"
          clickable
          :to="menuItem.to"
          v-ripple
        >
          <QItemSection avatar>
            <QIcon :name="menuItem.icon" />
          </QItemSection>
          <QItemSection>
            {{ menuItem.label }}
          </QItemSection>
        </QItem>

        <q-separator v-if="menuItem.separator" />

      </QList>

      <AppVersion class="absolute-bottom-left" />
    </QDrawer>

    <q-page-container>
      <router-view />

      <CreateProblemModal ref="createProblem" @refetch="onRefetch" />

      <QPageSticky position="bottom-right" :offset="[18, 18]">
        <QBtn
          fab
          color="primary"
          icon="add"
          @click="$refs.createProblem.open()"
        />
      </QPageSticky>
    </q-page-container>

  </q-layout>
</template>

<script>
import {
  QBtn,
  QPageSticky,
  QList,
  QItem,
  QItemSection,
  QIcon,
  QSeparator
} from 'quasar'
import HeaderUserActions from './components/Header/UserActions'
import injectUser from 'src/domains/User/mixins/inject-user'
import menuList from './menu'
import AppVersion from 'src/components/Version'
import CreateProblemModal from 'src/domains/Problems/components/Create/adapter/Modal'

export default {
  name: 'DashboardLayout',
  mixins: [ injectUser ],
  components: {
    QBtn,
    QPageSticky,
    QList,
    QItem,
    QItemSection,
    QIcon,
    QSeparator,
    AppVersion,
    HeaderUserActions,
    CreateProblemModal
  },
  data: () => ({
    left: false,
    right: false,
    menuList
  }),
  methods: {
    filterItem (item) {
      if (item.requireAdmin) {
        return this.isAdmin
      }

      if (item.requireUser) {
        return this.hasUser
      }

      return true
    },
    onRefetch () {
      this.$root.$emit('load:problems')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.app-header {
  background: linear-gradient(145deg, $secondary 11%, $primary 75%);
}
</style>
