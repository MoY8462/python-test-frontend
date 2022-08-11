<script setup>
import axios from 'axios'
import { onMounted, toRefs } from 'vue'

const props = defineProps({
    id: Number,
    restaurant: {
        type: Object,
        default: () =>{
            return {
            "name": "",
            "type_res": "",
            "address": "",
            "telephone": ""
            }
        }
    },
})

const { id, title} = toRefs(props)
let {  restaurant, state } = toRefs(props)


const emit = defineEmits(['back'])

const editHandler = (credentials) => {
    let estado = []
    console.log(credentials)
    axios.post('http://127.0.0.1:8000/api/restaurant/',credentials)
        .then(data => estado = data.data)
    location.reload()
}

</script>
<template>
    <div>
        <div class="form">
            <div class="form-content">
                <FormKit
                    type="form"
                    submit-label="Agregar"
                    @submit="editHandler"
                    :incomplete-message="false"
                >
                    <h3>Agregar Nuevo Restaurante</h3>
                    <FormKit
                        type="text"
                        name="name"
                        label="Restaurante"
                        validation="required"
                        :validation-messages="{
                            required: 'El nombre requerido',
                            alphanumeric: 'Sólo números y letras',
                        }"
                        
                    />
                    <FormKit
                        type="text"
                        name="address"
                        label="Dirección"
                        validation="required"
                        :validation-messages="{
                            required: 'Dirección requerida',
                            
                        }"
                    />
                    <FormKit
                        type="text"
                        name="telephone"
                        label="Teléfono de contacto"
                        validation="required|matches:/^[0-9]{10}$/"
                        :validation-messages="{
                            matches: 'Su número a 10 digitos'
                        }"
                    />
                    <FormKit
                        type="select"
                        label="Tipo de establecimiento"
                        name="type_res"
                        validation="required"
                        placeholder="Selecciona una opción"
                        :options="{
                            Comida_rapida: 'Comida rápida',
                            Pizza: 'Pizza',
                            Tacos: 'Tacos',
                            Italiana: 'Comida Italiana',
                        }"
                    />
                </FormKit>
            </div>
            <button class="boton" @click="$emit('back', true,true)">Atrás</button>
        </div>
        
    </div>
</template>