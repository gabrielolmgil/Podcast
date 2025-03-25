import { Link } from 'react-router-dom';

export function Header() {

    return (
        <section id="inicio" class="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800">
            <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                <div class="md:w-1/2">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">Bienvenidos a <span class="text-purple-500">El Último Frasco</span></h2>
                    <p class="text-xl text-zinc-300 mb-6">
                        Un podcast donde exploramos conversaciones profundas, historias fascinantes y temas que te harán pensar.
                    </p>
                    <button class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Escuchar ahora
                    </button>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <div class="relative w-64 h-64 md:w-80 md:h-80">
                        <img src="logo.png" alt="El Último Frasco Podcast Cover" class="rounded-lg shadow-2xl"/>
                            <div class="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
