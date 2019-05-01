<template>
  <q-layout>
    <q-page-container>
      <QPage>
        <HomeHeader/>

        <!-- <HomeSection /> -->
        <GithubCorners />
      </QPage>
    </q-page-container>
  </q-layout>
</template>

<script>
import HomeHeader from './components/Header'
// import HomeSection from './components/Section'
import GithubCorners from 'src/components/GithubCorners'

export default {
  name: 'HomeLayout',
  components: {
    HomeHeader,
    GithubCorners
  }
}
</script>

<style>

</style>
