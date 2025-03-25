import { Link } from 'react-router-dom';

export function Episodios() {

    return (
        <section id="episodios" class="py-16 bg-zinc-900">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-4">Episodios Recientes</h2>
            
            <div class="grid gap-6">
                <div class="bg-zinc-800 rounded-lg overflow-hidden">
                    <div class="p-6">
                        <div class="flex items-start gap-4">
                            <div class="w-24 h-24 flex-shrink-0">
                                <img src="https://placehold.co/96x96/333/FFF?text=EP1" alt="Episodio 1" class="rounded-md"/>
                            </div>
                            <div>
                                <span class="text-purple-400 text-sm">Episodio 1</span>
                                <h3 class="text-xl font-bold mb-2">El comienzo de todo</h3>
                                <p class="text-zinc-400 text-sm mb-3">
                                    En este episodio inaugural, hablamos sobre los orígenes del podcast y lo que nos inspiró a crearlo.
                                </p>
                                <div class="flex items-center gap-2 text-sm text-zinc-500">
                                    <span>45 min</span>
                                    <span>•</span>
                                    <span>15 Marzo 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-900/50 p-4 border-t border-zinc-700">
                        <div class="flex items-center gap-4">
                            <button class="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="19 20 9 12 19 4 19 20"></polygon>
                                    <line x1="5" y1="19" x2="5" y2="5"></line>
                                </svg>
                            </button>
                            <button class="bg-purple-600 hover:bg-purple-700 rounded-full h-10 w-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </button>
                            <button class="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="5 4 15 12 5 20 5 4"></polygon>
                                    <line x1="19" y1="5" x2="19" y2="19"></line>
                                </svg>
                            </button>
                            <div class="flex-1 px-2">
                                <input type="range" min="0" max="100" value="33" class="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"/>
                            </div>
                            <span class="text-sm text-zinc-400">14:25 / 45:00</span>
                            <button class="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="bg-zinc-800 rounded-lg overflow-hidden">
                    <div class="p-6">
                        <div class="flex items-start gap-4">
                            <div class="w-24 h-24 flex-shrink-0">
                                <img src="https://placehold.co/96x96/333/FFF?text=EP2" alt="Episodio 2" class="rounded-md"/>
                            </div>
                            <div>
                                <span class="text-purple-400 text-sm">Episodio 2</span>
                                <h3 class="text-xl font-bold mb-2">Conversaciones profundas</h3>
                                <p class="text-zinc-400 text-sm mb-3">
                                    Exploramos temas filosóficos y reflexionamos sobre el significado de la vida moderna.
                                </p>
                                <div class="flex items-center gap-2 text-sm text-zinc-500">
                                    <span>52 min</span>
                                    <span>•</span>
                                    <span>22 Marzo 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-900/50 p-4 border-t border-zinc-700">
                        <div class="flex items-center gap-4">
                            <button class="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="19 20 9 12 19 4 19 20"></polygon>
                                    <line x1="5" y1="19" x2="5" y2="5"></line>
                                </svg>
                            </button>
                            <button class="bg-purple-600 hover:bg-purple-700 rounded-full h-10 w-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </button>
                            <button class="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="5 4 15 12 5 20 5 4"></polygon>
                                    <line x1="19" y1="5" x2="19" y2="19"></line>
                                </svg>
                            </button>
                            <div class="flex-1 px-2">
                                <input type="range" min="0" max="100" value="0" class="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"/>
                            </div>
                            <span class="text-sm text-zinc-400">0:00 / 52:00</span>
                            <button class="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-zinc-800 rounded-lg overflow-hidden">
                    <div class="p-6">
                        <div class="flex items-start gap-4">
                            <div class="w-24 h-24 flex-shrink-0">
                                <img src="https://placehold.co/96x96/333/FFF?text=EP3" alt="Episodio 3" class="rounded-md"/>
                            </div>
                            <div>
                                <span class="text-purple-400 text-sm">Episodio 3</span>
                                <h3 class="text-xl font-bold mb-2">Entrevista especial</h3>
                                <p class="text-zinc-400 text-sm mb-3">
                                    Tenemos un invitado especial que comparte su experiencia y conocimientos con nuestra audiencia.
                                </p>
                                <div class="flex items-center gap-2 text-sm text-zinc-500">
                                    <span>65 min</span>
                                    <span>•</span>
                                    <span>29 Marzo 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-zinc-900/50 p-4 border-t border-zinc-700">
                        <div class="flex items-center gap-4">
                            <button class="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="19 20 9 12 19 4 19 20"></polygon>
                                    <line x1="5" y1="19" x2="5" y2="5"></line>
                                </svg>
                            </button>
                            <button class="bg-purple-600 hover:bg-purple-700 rounded-full h-10 w-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </button>
                            <button class="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="5 4 15 12 5 20 5 4"></polygon>
                                    <line x1="19" y1="5" x2="19" y2="19"></line>
                                </svg>
                            </button>
                            <div class="flex-1 px-2">
                                <input type="range" min="0" max="100" value="0" class="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"/>
                            </div>
                            <span class="text-sm text-zinc-400">0:00 / 65:00</span>
                            <button class="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

