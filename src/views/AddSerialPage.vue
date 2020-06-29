<template>
  <div class="about">
	<AddSerial />
  </div>
</template>

<script>
import AddSerial from '@/components/AddSerial.vue'

export default { 
  name: 'AddSerialPage',
  components: {
    AddSerial,
  },
   props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
}
</script>