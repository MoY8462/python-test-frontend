<script >
import List from '@components/List.vue'
import Edit from '@components/Edit.vue'
import Add from '@components/Add.vue'
import axios from 'axios'

export default {
    name: 'dashboard',
    data(){
        return {
            restaurants: null,
            restaurant: null,
            state: true,
            nuevo: true,
            id: null,
            title: null
        }
    },
    components: {
    List,
    Edit,
    Add
},
    methods: {
        handleList(state, nuevo) {
	        this.state = state
            this.nuevo = nuevo
        },
        handleBack(state, nuevo){
            this.state = state
            this.nuevo = nuevo
        },
        getRestaurant(id) {
            axios.get('http://127.0.0.1:8000/api/restaurant/'+id)
            .then(data => this.restaurant = data.data.restaurants)
            
            console.log(this.restaurant)
        }

    },
    mounted: function() {
        axios.get('http://127.0.0.1:8000/api/restaurant/')
            .then(data => this.restaurants = data.data.restaurants)
    },
    
}

</script>
<template>
    <div class="content_center">
        <List v-if='state && nuevo' 
                :restaurants='restaurants' 
                @change="(state,nuevo) => handleList(state, nuevo)"/>
        <Edit  v-if='!state && nuevo'  :restaurant='restaurant' :id='id'
                @back="(state,nuevo) => handleBack(state, nuevo)"/>
        <Add  v-if='state && !nuevo' 
                @back="(state,nuevo) => handleBack(state, nuevo)"/>
    </div>
</template>

