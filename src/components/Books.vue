<template>
    <h2>Books</h2>
    <form @submit.prevent="addBook">
        <div
            style="display: flex; flex-direction: column; width: 300px; justify-content: space-around; align-items: baseline;">
            <input style="margin-bottom: 10px" v-model="form.nombre" placeholder="Nombre" required />
            <input style="margin-bottom: 10px" v-model="form.genero" placeholder="Género" required />
            <input style="margin-bottom: 10px" v-model.number="form.añoPublicacion" type="number" placeholder="Año"
                required />
            <select style="margin-bottom: 10px" v-model.number="form.author.id" required>
                <option disabled value="0">Selecciona autor</option>
                <option v-for="w in writers" :key="w.id" :value="w.id">{{ w.nombre }}
                    {{ w.apellido }}</option>
            </select>
            <button type="submit">Add Book</button>
        </div>
    </form>
    <ul>
        <li v-for="b in books" :key="b.id">
            "{{ b.nombre }}" por {{ b.author.nombre }} {{ b.author.apellido }}
        </li>
    </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getBooks, createBook, getWriters, Book, Writer } from '../services/api';

const books = ref<Book[]>([]);
const writers = ref<Writer[]>([]);
const form = ref({
    nombre: '', genero: '', añoPublicacion: 0, author: {
        id: 0
    }
});
const fetchWriters = async () => { writers.value = await getWriters(); };
const fetchBooks = async () => { books.value = await getBooks(); };
const addBook = async () => {
    await createBook(form.value);
    form.value = {
        nombre: '', genero: '', añoPublicacion: 0, author: { id: 0 }
    };
    fetchBooks();
};
onMounted(() => { fetchWriters(); fetchBooks(); });
</script>