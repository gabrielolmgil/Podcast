import { Link } from 'react-router-dom';

export function Episodios() {

    return (
        <section id="episodios" class="py-16 bg-zinc-900 text-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold mb-8 border-l-4 border-yellow-600 pl-4">Episodios Recientes</h2>

                <div class="grid gap-6">
                    <div class="bg-zinc-800 rounded-lg overflow-hidden">
                        <div class="p-6">
                            <div class="flex items-start gap-4">
                                <div class="w-24 h-24 flex-shrink-0">
                                    <img src="https://placehold.co/96x96/333/FFF?text=EP1" alt="Episodio 1" class="rounded-md" />
                                </div>
                                <div>
                                    <span class="text-yellow-500 text-sm">Episodio 1</span>
                                    <h3 class="text-xl font-bold mb-2">GTA 6</h3>
                                    <div class="flex items-center gap-2 text-sm text-zinc-500">
                                        <span>2:00</span>
                                        <span>•</span>
                                        <span>25 Marzo 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-zinc-900/50 p-4 border-t border-zinc-700">
                            <audio controls>
                                <source src="podcast1.MP3" type="audio/mpeg" />
                                Tu navegador no soporta el audio.
                            </audio>
                        </div>
                    </div>

                    <div class="bg-zinc-800 rounded-lg overflow-hidden">
                        <div class="p-6">
                            <div class="flex items-start gap-4">
                                <div class="w-24 h-24 flex-shrink-0">
                                    <img src="https://placehold.co/96x96/333/FFF?text=EP2" alt="Episodio 2" class="rounded-md" />
                                </div>
                                <div>
                                    <span class="text-yellow-500 text-sm">Episodio 2</span>
                                    <h3 class="text-xl font-bold mb-2">Nuevo assassins creed</h3>
                                    <div class="flex items-center gap-2 text-sm text-zinc-500">
                                        <span></span>
                                        <span>•</span>
                                        <span>25 Marzo 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-zinc-900/50 p-4 border-t border-zinc-700">
                            <audio controls>
                                <source src="podcast2.MP3" type="audio/mpeg" />
                                Tu navegador no soporta el audio.
                            </audio>
                        </div>
                    </div>
                    <div class="bg-zinc-800 rounded-lg overflow-hidden">
                        <div class="p-6">
                            <div class="flex items-start gap-4">
                                <div class="w-24 h-24 flex-shrink-0">
                                    <img src="https://placehold.co/96x96/333/FFF?text=EP3" alt="Episodio 3" class="rounded-md" />
                                </div>
                                <div>
                                    <span class="text-yellow-500 text-sm">Episodio 3</span>
                                    <h3 class="text-xl font-bold mb-2">Nuevo nintendo switch</h3>
                                    <div class="flex items-center gap-2 text-sm text-zinc-500">
                                        <span>1:39</span>
                                        <span>•</span>
                                        <span>25 Marzo 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-zinc-900/50 p-4 border-t border-zinc-700">
                            <audio controls>
                                <source src="podcast3.MP3" type="audio/mpeg" />
                                Tu navegador no soporta el audio.
                            </audio>
                        </div>
                    </div>
                    <div class="bg-zinc-800 rounded-lg overflow-hidden">
                        <div class="p-6">
                            <div class="flex items-start gap-4">
                                <div class="w-24 h-24 flex-shrink-0">
                                    <img src="https://placehold.co/96x96/333/FFF?text=EP4" alt="Episodio 3" class="rounded-md" />
                                </div>
                                <div>
                                    <span class="text-yellow-500 text-sm">Episodio 3</span>
                                    <h3 class="text-xl font-bold mb-2">Top juegos para nosotros</h3>
                                    <div class="flex items-center gap-2 text-sm text-zinc-500">
                                        <span>1:13</span>
                                        <span>•</span>
                                        <span>25 Marzo 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-zinc-900/50 p-4 border-t border-zinc-700">
                            <audio controls>
                                <source src="podcast4.MP3" type="audio/mpeg" />
                                Tu navegador no soporta el audio.
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

