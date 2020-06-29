<template>
  <div class="about">
	<LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default { 
  name: 'Login',
  components: {
    LoginForm,
  },
   props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
}
</script>