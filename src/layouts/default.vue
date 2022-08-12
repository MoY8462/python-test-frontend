<script setup>

const token = localStorage.getItem('token')

/**
 * @function
 * @description register authentication handler.
 * @param credentials Email and password. */
const out = (credentials) => {
    localStorage.removeItem('token')
    const token = localStorage.getItem('token')
    location.reload()
}



</script>

<template>
  <div class="screen_full">
    <nav class="bg-yellow-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center">
            <img src="../../burguer.svg" class="mr-3 h-6 sm:h-9" alt="burguer Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Fast Food</span>
        </a>
        
        <div class="hidden w-full md:block md:w-auto dark:text-white" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg c md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-semibold md:border-0 md:bg-yellow-500 dark:text-white ">
           
            
            <li>
              <a href="/register" v-show="!token" class="block py-8 pr-4 pl-3 dark:text-white rounded hover:bg-gray-100 md:border-0  md:p-0  md:dark:hover:text-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">Registrar</a>
            </li>
            <li>
              <a v-on:click="out" v-show="token" class="block py-8 pr-4 pl-3 dark:text-white rounded hover:bg-gray-100 md:border-0  md:p-0  md:dark:hover:text-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">Salir</a>
            </li>
            <li>
              <a href="/login" v-show="!token" class="block py-8 pr-4 pl-3 dark:text-white rounded hover:bg-gray-100 md:border-0  md:p-0  md:dark:hover:text-gray-400 md:dark:hover:bg-transparent">Iniciar sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
  
</template>>
