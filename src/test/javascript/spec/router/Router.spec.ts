import { describe, it, expect } from 'vitest';
import router from '@/router/router';

describe('Router', () => {
  it('Should redirect to Homepage by default', async () => {
    await router.push('/');
    await router.isReady();

    expect(router.currentRoute.value.fullPath).toEqual('/home');
  });

  it('Should go to Homepage', async () => {
    await router.push('/home');
    await router.isReady();

    expect(router.currentRoute.value.fullPath).toEqual('/home');
  });

  it('Should go to EssentialsVue', async () => {
    await router.push('/essentials');
    await router.isReady();

    expect(router.currentRoute.value.fullPath).toEqual('/essentials');
  });
});
