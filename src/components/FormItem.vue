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