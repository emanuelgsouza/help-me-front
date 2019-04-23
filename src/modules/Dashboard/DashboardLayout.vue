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
import { mapState } from 'vuex'
import HeaderUserActions from './components/Header/UserActions'
import injectUser from 'src/domains/User/mixins/inject-user'
import menuList from './menu'
import AppVersion from 'src/components/Version'

export default {
  name: 'DashboardLayout',
  mixins: [ injectUser ],
  components: {
    QFab,
    QFabAction,
    QPageSticky,
    QList,
    QItem,
    QItemSection,
    QIcon,
    QSeparator,
    AppVersion,
    HeaderUserActions
  },
  data: () => ({
    left: false,
    right: false,
    menuList
  }),
  computed: {
    ...mapState('auth', ['wasLogin', 'loadingUser'])
  },
  watch: {
    loadingUser: 'updateLoadingStatus'
  },
  methods: {
    updateLoadingStatus (val) {
      if (val) {
        return this.showLoadingToUser()
      }

      this.hideLoadingToUser()
    },
    showLoadingToUser () {
      return this.$q.loading.show({
        message: 'Carregando os dados do usuário'
      })
    },
    hideLoadingToUser () {
      return this.$q.loading.hide()
    },
    filterItem (item) {
      if (item.requireAdmin) {
        return this.isAdmin
      }

      if (item.requireUser) {
        return this.hasUser
      }

      return true
    }
  },
  mounted () {
    this.updateLoadingStatus(this.loadingUser)
  }
}
</script>

<style lang="stylus" scoped>
@import '~quasar-variables'

.app-header {
  background: linear-gradient(145deg, $secondary 11%, $primary 75%);
}
</style>
