import { Link } from 'react-router-dom';

export function Contacto() {

    return (
        <section id="sobre-nosotros" class="py-16 bg-zinc-800 text-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold mb-8 border-l-4 border-yellow-600 pl-4">Sobre El Último Frasco</h2>

                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <p class="text-lg text-zinc-300 mb-6">
                            El Último Frasco nació de la pasión por compartir historias y crear conversaciones significativas.
                            Nuestro objetivo es explorar temas profundos y cotidianos desde perspectivas únicas.
                        </p>
                        <p class="text-lg text-zinc-300 mb-6">
                            Cada episodio es una oportunidad para descubrir nuevas ideas, reflexionar sobre la vida
                            y conectar con personas que comparten nuestras inquietudes.
                        </p>
                        <div class="flex gap-4 mt-6">
                            <button class="border border-yellow-500 duration-300 cursor-pointer text-yellow-400 hover:bg-yellow-500/10 px-4 py-2 rounded-md">
                                Conócenos más
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-zinc-700 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-2">Publicación</h3>
                            <p class="text-zinc-300">Nuevos episodios todos los viernes</p>
                        </div>
                        <div class="bg-zinc-700 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-2">Duración</h3>
                            <p class="text-zinc-300">45-60 minutos por episodio</p>
                        </div>
                        <div class="bg-zinc-700 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-2">Plataformas</h3>
                            <p class="text-zinc-300">Disponible en Spotify, Apple Podcasts y más</p>
                        </div>
                        <div class="bg-zinc-700 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-2">Comunidad</h3>
                            <p class="text-zinc-300">Únete a nuestra comunidad en redes sociales</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

