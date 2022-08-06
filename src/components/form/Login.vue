<script setup>
const loginHandler =  () => {
    
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
        <div class="form-footer">
            
        </div>
    </div>
</template>
