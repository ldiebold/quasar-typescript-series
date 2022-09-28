<script setup lang="ts">
import Person from './Person'

interface Props {
  person: Person
}

defineProps<Props>()

const emit = defineEmits<{
  (event: 'name-clicked', person: Person): void
  (event: 'card-clicked'): void
}>()
</script>

<template>
  <q-card @click="emit('card-clicked')">
    <q-card-section>
      <q-btn @click="emit('name-clicked', person)">
        {{ person.name }}
      </q-btn>
    </q-card-section>
  </q-card>
</template>
