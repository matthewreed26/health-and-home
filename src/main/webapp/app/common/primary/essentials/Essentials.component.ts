import { Essential } from '@/common/domain/essential/Essential';
import { inject } from 'vue';

export default {
  name: 'EssentialsVue',
  setup() {
    const essentialsList = inject('essentials') as Essential[];
    return {
      essentialsList,
    };
  },
};
