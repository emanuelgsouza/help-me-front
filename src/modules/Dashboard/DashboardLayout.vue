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

    <QDrawer v-model="left" side="left" bordered>
      <figure>
        <img
          src="https://portal.unigranrio.edu.br/hs-fs/hubfs/logo_azul-topo.png?width=243&name=logo_azul-topo.png" />
      </figure>
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
import HeaderUserActions from './components/Header/UserActions'
import { mapState } from 'vuex'

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
    right: false,
    menuList: [
      {
        icon: 'home',
        label: 'Home',
        separator: true,
        to: {
          name: 'index'
        }
      },
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
