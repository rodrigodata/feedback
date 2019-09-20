<template>
  <v-app>
    <v-content>
      <Answers/>
    </v-content>
  </v-app>
</template>

<script>
import Answers from './components/Answers';

export default {
  name: 'App',
  components: {
    Answers,
  },
  data: () => ({
    //
  }),
};
</script>

