<script setup lang="ts">
import Person from './Person'

interface Props {
  person: Person
}

defineProps<Props>()
</script>

<template>
  <q-card>
    {{ person.name }}
  </q-card>
</template>
