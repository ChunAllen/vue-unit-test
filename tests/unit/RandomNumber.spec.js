import { mount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber'

describe('RandomNumber', () => {
  it('should have a default randomNumber to 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  });

  it('should have a randomNumber between 1 and 10 if the button is clicked', async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick

    const randomNumber = parseInt(wrapper.find('span').element.textContent)

    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  });

  it('shouls have a randomNumber between 200 and 300 if the button is clicked', async () => {
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 200,
        max: 300
      }
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick

    const randomNumber = parseInt(wrapper.find('span').element.textContent)

    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  });
});