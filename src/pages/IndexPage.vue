<script setup lang="ts">
import Person from 'src/components/Person'
import UserCard from 'src/components/UserCard.vue'

function onNameClicked (person: Person) {
  console.log(person.name)
}

function onCardClicked () {
  console.log('card clicked!')
}
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <UserCard
      :person="{
        name: 'Luke',
        age: 31
      }"
      @name-clicked="onNameClicked"
      @card-clicked="onCardClicked"
    />
  </q-page>
</template>
