<script setup>
const registerHandler =  () => {
    
}
</script>

<template>
    <div class="form">
        <div class="form-content">
            <FormKit
                type="form"
                submit-label="Entrar"
                @submit="registerHandler"
                :incomplete-message="false"
            >
                <h3>Registro</h3>
                <FormKit
                    type="text"
                    name="carrer"
                    label="Nombre de Usuario"
                    validation="required|alphanumeric"
                    :validation-messages="{
                        required: 'El nombre de usuario es requerido',
                        alphanumeric: 'Sólo números y letras',
                    }"
                    placeholder="Ingresar nombre de usuario"
                />
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
            <router-link to="/login">Iniciar sesión</router-link>
        </div>
    </div>
</template>
