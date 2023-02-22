import { Provide } from '@/appProvide';
import { Essential } from '@/common/domain/essential/Essential';
import { Essentials } from '@/common/domain/essential/Essentials';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialsVue',
  inject: ['appProvide'],
  data(): {
    essentialsList: Essential[];
  } {
    return {
      essentialsList: [],
    };
  },
  async created() {
    const { essentials } = this.appProvide as Provide;
    this.essentialsList = await (essentials as () => Essentials)().list();
  },
});
