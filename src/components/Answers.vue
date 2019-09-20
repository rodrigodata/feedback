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

          <p class="font-weight-bold mb-1">
          <h2>Essa reunião agregou valor a nossas vidas?</h2>

          Resposta: "Agregou pois graças a ela pude expor minhas ideias de projetos pessoais", "Rodrigo"
          </p>


          <p class="font-weight-bold mb-3">
          <h2>Qual projeto foi o mais Legal de todos?</h2>
 
          Resposta: "Agregou pois graças a ela pude expor minhas ideias de projetos pessoais", "Rodrigo"
          </p>


          <p class="font-weight-bold mb-3">
          <h2>Considerariam participar novamente do hackday? Por que?</h2>

          Resposta: "Sim, pois tem uma comida muito show.", "Eden"
          </p>

        </v-form>

          </v-container>

        </v-flex>
      </v-layout>
    </v-container>
</template>

