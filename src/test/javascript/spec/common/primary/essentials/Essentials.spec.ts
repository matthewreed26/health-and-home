import { describe, it, expect } from 'vitest';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import { EssentialsVue } from '@/common/primary/essentials';
import { ComponentPublicInstance } from 'vue';
import { appProvide } from '@/appProvide';

type TestWrapper<T> = VueWrapper<ComponentPublicInstance & T>;
let wrapper: TestWrapper<Partial<typeof EssentialsVue>>;

const wrap = () => {
  wrapper = shallowMount(EssentialsVue, {
    global: {
      provide: {
        appProvide: appProvide(),
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
  // it('should list Essentials', async () => {
  //   wrap();

  //   if (wrapper.vm.setup) {
  //     const { essentialsList } = await wrapper.vm.setup();
  //     expect(essentialsList).toEqual<Essential[]>([
  //       {
  //         type: 'Conditioner',
  //       },
  //       { type: 'Mouthwash' },
  //     ]);
  //   }
  // });
  it('should list Essentials', async () => {
    wrap();
    expect(await wrapper.vm.$data).toEqual({
      essentialsList: [
        {
          type: 'Conditioner',
        },
        { type: 'Mouthwash' },
      ],
    });
  });
});
