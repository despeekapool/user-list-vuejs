import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserItemVue from '../UserItem.vue'
import type { User } from '@/models/user'

describe('UserItem', () => {
  it('renders user.name and user.email when passed', () => {
    const user: User = { id: 1, name: 'John', email: 'email', username: 'JohnDoe' }
    const wrapper = mount(UserItemVue, { props: { user } })

    expect(wrapper.find('h2').text()).toContain(user.name)
    expect(wrapper.find('p').text()).toContain(user.email)
    expect(wrapper.text()).not.toContain(user.username)
  })
})
