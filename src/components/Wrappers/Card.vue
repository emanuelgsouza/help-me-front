<template>
  <QCard>
    <QCardSection>
      <p class="no-margin text-h6"> {{ title }} </p>
    </QCardSection>

    <QCardSection>
      <slot></slot>
    </QCardSection>
  </QCard>
</template>

<script>
import { QCard, QCardSection } from 'quasar'

export default {
  name: 'WrapperCard',
  components: { QCard, QCardSection },
  props: {
    title: String
  }
}
</script>

<style>

</style>
