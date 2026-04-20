import { Routes, Route } from 'react-router-dom'
import MenuTreino from './Menu/MenuTreino'
import Rendecondici from './Rendecondici'
import Render from './RenderizandoLista/Render'


export default function GalleryTeino() {
    return (
        <section>
            <h1>Lista de Treinos e Exercicios</h1>
            <MenuTreino />
            <Routes>
                <Route path="/" element={<Rendecondici />} />
                <Route path="/Render" element={<Render />} />
            </Routes>
        </section>
    )
}