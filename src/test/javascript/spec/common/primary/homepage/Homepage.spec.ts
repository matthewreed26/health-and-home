import { describe, it, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import { HomepageVue } from '@/common/primary/homepage';

let wrapper: VueWrapper;

const wrap = () => {
  wrapper = shallowMount(HomepageVue);
};

describe('HomepageVue', () => {
  it('should exist', () => {
    wrap();

    expect(wrapper.exists()).toBeTruthy();
  });
  it('should have a name', () => {
    wrap();

    expect(wrapper.findComponent({ name: 'HomepageVue' }).exists()).toBeTruthy();
  });
  it('should have an app name', () => {
    wrap();

    expect(wrapper.vm.$data).toEqual({ appName: 'healthAndHome' });
  });
});
