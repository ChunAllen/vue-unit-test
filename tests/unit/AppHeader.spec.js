import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader'

const wrapper = mount(AppHeader)

describe('AppHeader', () => {
  it('should show the logout button if the user is logged in', async () => {
    wrapper.setData({ loggedIn: true })
    await wrapper.vm.$nextTick()

    expect(wrapper.find('button').isVisible()).toBe(true)
  });

  it('should not show the logout buttin if the user is not logged in', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  });

});
