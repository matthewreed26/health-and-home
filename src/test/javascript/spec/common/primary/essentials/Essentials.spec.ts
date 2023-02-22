import { describe, it, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import { EssentialsVue } from '@/common/primary/essentials';
import EssentialsInMemory from '@/common/secondary/essentials/EssentialsInMemory';
import { Essential } from '@/common/domain/essential/Essential';
import { ComponentPublicInstance } from 'vue';

type TestWrapper<T> = VueWrapper<ComponentPublicInstance & T>;
let wrapper: TestWrapper<Partial<typeof EssentialsVue>>;

const wrap = () => {
  wrapper = shallowMount(EssentialsVue, {
    global: {
      provide: {
        essentials: () => new EssentialsInMemory(),
      },
    },
  });
};

describe('EssentialsVue', () => {
  it('should exist', () => {
    wrap();

    expect(wrapper.exists()).toBeTruthy();
  });
  it('should have a name', () => {
    wrap();

    expect(wrapper.findComponent({ name: 'EssentialsVue' }).exists()).toBeTruthy();
  });
  it('should list Essentials', () => {
    wrap();

    if (wrapper.vm.setup) {
      const { essentialsList } = wrapper.vm.setup();
      expect(essentialsList).toEqual<Essential[]>([
        {
          type: 'Conditioner',
        },
        { type: 'Mouthwash' },
      ]);
    }
  });
});
