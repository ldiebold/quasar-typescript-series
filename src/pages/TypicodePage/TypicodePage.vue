<script lang="ts" setup>
import usePostFetcher from './usePostFetcher'

const postFetcher = usePostFetcher()
</script>

<template>
  <q-page>
    <q-card
      v-for="post in postFetcher.records.value"
      :key="post.id"
      :post="post"
    >
      <q-card-section>
        {{ post.title }}
      </q-card-section>

      <q-card-section>
        {{ post.body }}
      </q-card-section>
    </q-card>
  </q-page>
</template>
