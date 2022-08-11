<script setup>
import axios from 'axios'
import router from '@router/index.router'

/**
 * @function
 * @description Login authentication handler.
 * @param credentials Email and password. */

const loginHandler = async (credentials) => {
    const token = await axios.post('http://127.0.0.1:8000/api/user/', credentials)
                    .then(({data}) => data.token)
                    .catch(err => console.log(err)) 
    console.log(token)
    if(token){
        localStorage.setItem('token', token)
        router.push('/')
    }
    
    
}
</script>

<template>
    <div class="form">
        <div class="form-content">
            <FormKit
                type="form"
                submit-label="Entrar"
                @submit="loginHandler"
                :incomplete-message="false"
            >
                <h3>Inicio de sesión</h3>
                <FormKit
                    type="email"
                    name="email"
                    label="Correo electrónico"
                    placeholder="Ingrese correo electrónico"
                    validation="required|email"
                    :validation-messages="{
                        required: 'El correo electrónico es requerido',
                        email: 'El correo electrónico no es válido',
                    }"
                />
                <FormKit
                    type="password"
                    name="password"
                    label="Contraseña"
                    placeholder="Ingrese contraseña"
                    validation="required"
                    :validation-messages="{
                        required: 'La contraseña es requerida',
                    }"
                />
            </FormKit>
        </div>
        <div class="form-footer underline">
            <router-link  to="/">Inicio</router-link>
            <router-link to="/register">Registrar</router-link>
        </div>
    </div>
</template>
