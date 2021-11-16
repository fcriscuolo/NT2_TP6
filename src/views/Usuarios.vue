<template>
    <div>
        <div class="container">
        <button class="btn btn-primary mx-1" @click="getAxios()">Get usuarios</button>
        </div>

        <br/>

        <div class="table-responsive-sm">
        <table class="table">
            <thead class="thead-light">
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
            </tr>
            </thead>
            <tr v-for="persona in respuesta" :key="persona.id">
            <td>{{persona.nombre}}</td>
            <td>{{persona.edad}}</td>
            <td>{{persona.email}}</td>
            </tr>
        </table>
        </div>
    </div>
</template>

<script>
const axios = require('axios').default

const JSON_URL = 'https://61645ff7b55edc00175c1f29.mockapi.io/usuarios'



export default {
  name: 'Usuarios',
  data(){
    return {
      respuesta: ""
    }
  },
  methods: {
    async getAxios(){
        const res = await axios.get(JSON_URL)
        this.respuesta = await res['data']
    }
  }
}
</script>