import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseButton from '../button.vue';


describe.skip('BaseButton', () => {
  // it have click event
  it('is a Vue instance', () => {
    // Arrage
    const wrapper = mount(BaseButton);

    // Action
    wrapper.trigger('click');
    console.log('wrapper.emitted()',wrapper.emitted());
    // Assert
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  // test props
  it('has props', () => {
    const wrapper = mount(BaseButton, {
      props: {
        title: 'test',
      }
    });
    console.log('wrapper.text()',wrapper.text());
    
    expect(wrapper.text()).toBe('test');
  })
})
