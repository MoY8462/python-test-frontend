<script setup>
import { toRefs } from 'vue'
import axios from 'axios'

const props = defineProps({
  restaurants: Object
})

const emit = defineEmits(['change'])

const { restaurants } = toRefs(props)

const eraser = (id) => {
    axios.delete('http://127.0.0.1:8000/api/restaurant/'+id)
    location.reload()
}

</script>

<template>
    <div >
        <ul class="u_list">
            <h1 class="title">¡Busca aquí a tus restaurantes favoritos!</h1>
            <div class="list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
                <li v-for="restaurant in restaurants" :key="restaurant.id">
                    <div  class="card p-6 hover:drop-shadow-2xl  border-gray-200">
                        <a href="#">
                            <h5 class="name">{{restaurant.name}}</h5>
                        </a>
                        <p>Dirección: {{restaurant.address}}</p>
                        <p>Teléfono: {{restaurant.telephone}}</p>
                        <p><b>Categoría: {{restaurant.type_res}}</b></p>
                        <div class="actions">
                            
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
                                    @click="$emit('change', false, true)">
                                Editar
                            </button>
                            <button  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                    @click="eraser(restaurant.id)">
                                Eliminar
                            </button>
                        </div>
                        
                    </div>
                    
                </li>
            </div>
            <div style="width:100%; display: flex; justify-content: center;">
                <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full" 
                    @click="$emit('change', true, false)"
                    style="width: 350px; margin: 20px 0px 20px;">
                    Agregar
                </button>
            </div>
            
        </ul>
        
    </div>
</template>