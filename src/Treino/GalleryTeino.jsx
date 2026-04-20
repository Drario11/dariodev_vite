import { Routes, Route } from 'react-router-dom'
import MenuTreino from './Menu/MenuTreino'
import Rendecondici from './Rendecondici'
import Render from './RenderizandoLista/Render'
import Mostar from './ComponentsPuros/Mostar'



export default function GalleryTeino() {
    return (
        <section>
            <MenuTreino />
            <Routes>
                <Route path="/" element={<Rendecondici />} />
                <Route path="/Render" element={<Render />} />
                <Route path="/Mostar" element={<Mostar />} />
            </Routes>
        </section>
    )
}