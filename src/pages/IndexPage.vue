<script setup lang="ts">
import UserCard from 'src/components/UserCard.vue'

</script>

<template>
  <q-page class="row items-center justify-evenly">
    <UserCard
      :person="{
        name: 'Luke',
        age: 31
      }"
    />
  </q-page>
</template>
