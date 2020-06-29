<template>
  <div class="about">
	<Serials />
  </div>
</template>

<script>
import Serials from '@/components/Serials.vue'

export default {
  name: 'SerialPage',
  components: {
    Serials
  },
   props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
}
</script>