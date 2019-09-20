<template>
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

        <v-flex mb-4>
          <h1>
            Reunião para expor os projetos do hackday
          </h1>

        </v-flex>
        <v-container>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

      <p class="font-weight-bold mb-3">
      Essa reunião agregou valor a nossas vidas?
      </p>

        <v-text-field
          v-model="question"
          required
        ></v-text-field>

        <p class="font-weight-bold mb-3">
        Qual projeto foi o mais Legal de todos?
        </p>

          <v-text-field
            v-model="question"
            required
          ></v-text-field>

          <p class="font-weight-bold mb-3">
          Considerariam participar novamente do hackday? Por que?
          </p>

            <v-text-field
              v-model="question"
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

          </v-container>

        </v-flex>
      </v-layout>
    </v-container>
</template>

