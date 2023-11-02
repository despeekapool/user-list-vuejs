<template>
  <div class="user">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { User } from '../models/user.ts'

export default defineComponent({
  props: {
    user: {
      type: Object as () => User,
      required: true
    }
  }
})
</script>
