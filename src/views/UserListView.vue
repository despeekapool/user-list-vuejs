<script lang="ts">
import type { User } from '../models/user.ts'
import UserComponent from '../components/UserItem.vue'

interface DataFunctionTyped {
  users: User[]
  error: null | string
  isLoading: Boolean
}

export default {
  components: {
    User: UserComponent
  },
  data(): DataFunctionTyped {
    return {
      users: [],
      error: null,
      isLoading: false
    }
  },
  async created() {
    this.isLoading = true
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      this.users = await response.json()
    } catch (error) {
      if (error instanceof Error) {
        this.error = error.message
      }
    } finally {
      this.isLoading = false
    }
  }
}
</script>

<template>
  <div class="users">
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <User v-for="(user, index) in users" :key="index" :user="user" />
      <p v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<style>
@media (max-width: 1024px) {
  .users {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
}
</style>
