<template>
    <h2>Writers</h2>
    <form @submit.prevent="addWriter">
        <div style="display: flex; flex-direction: column; width: 300px; justify-content: space-around; align-items: baseline;">
            <input style="margin-bottom: 10px" v-model="form.nombre" placeholder="Nombre" required />
            <input style="margin-bottom: 10px" v-model="form.apellido" placeholder="Apellido" required />
            <input style="margin-bottom: 10px" v-model="form.nacionalidad" placeholder="Nacionalidad" required />
            <input style="margin-bottom: 10px" v-model.number="form.edad" type="number" placeholder="Edad" required />
            <button type="submit">Add Writer</button>
        </div>
    </form>
    <ul>
        <li v-for="w in writers" :key="w.id">
            {{ w.nombre }} {{ w.apellido }} ({{ w.nacionalidad }}, {{ w.edad }}
            años)
        </li>
    </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getWriters, createWriter, Writer } from '../services/api';
const writers = ref<Writer[]>([]);
const form = ref({ nombre: '', apellido: '', nacionalidad: '', edad: 0 });
const fetchWriters = async () => { writers.value = await getWriters(); };
const addWriter = async () => {
    await createWriter(form.value);
    form.value = { nombre: '', apellido: '', nacionalidad: '', edad: 0 };
    fetchWriters();
};
onMounted(fetchWriters);
</script>