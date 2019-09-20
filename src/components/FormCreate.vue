<template>

  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="300"
        ></v-img>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="title"
          :counter="50"
          :rules="nameRules"
          label="Título"
          required
        ></v-text-field>

        <v-text-field
          v-model="question"
          label="Insira sua pergunta"
          required
        ></v-text-field>

        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="secondary"
          @click="loader = 'loading'"
        >
          Salvar
        </v-btn>

      </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>