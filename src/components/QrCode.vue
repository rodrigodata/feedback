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

        <v-flex mb-5 xs12>
          <h2 class="headline font-weight-bold mb-3">Seu questionário pode ser respondido usando o link ou o QR-Code abaixo</h2>
        </v-flex>

        <p class="subheading font-weight-regular">
        	http://4fa63b83.ngrok.io/api/v1/form/1
        </p>
				
				<img src="https://api.qrserver.com/v1/create-qr-code/?data=http://4fa63b83.ngrok.io/api/v1/form/1&amp;size=300x300" alt="" title="" />


		    </v-flex>
		  </v-layout>
		</v-container>
</template>