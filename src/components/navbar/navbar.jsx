import { Link } from 'react-router-dom';

export function Navbar() {

  return (
<header class="sticky top-0 z-10 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center">
                    <span class="text-white font-bold">EF</span>
                </div>
                <h1 class="text-xl font-bold">El Último Frasco</h1>
            </div>
            <nav>
                <ul class="flex gap-6">
                    <li><a href="#inicio" class="hover:text-purple-400 transition-colors">Inicio</a></li>
                    <li><a href="#episodios" class="hover:text-purple-400 transition-colors">Episodios</a></li>
                    <li><a href="#sobre-nosotros" class="hover:text-purple-400 transition-colors">Sobre Nosotros</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
