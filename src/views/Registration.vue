<template>
  <div class="about">
	<RegistrationForm />
  </div>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm.vue'

export default { 
  name: 'Registration',
  components: {
    RegistrationForm,
  },
   props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
}
</script>