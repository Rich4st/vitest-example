import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import root from '../RootComponent.vue'

describe('shallow mount correct render', () => {
  it('render well', async () => {
    const wrapper = shallowMount(root)
    console.log('wrapper.html()',wrapper.html());
    expect(wrapper.html()).toBe('<fathercomponent></fathercomponent>')
  })
})
