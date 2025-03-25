import { Link } from 'react-router-dom';

export function Navbar() {

  return (
<header class="sticky top-0 z-10 bg-zinc-900/80 backdrop-blur-sm border-b text-white border-zinc-800">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <img src="logo.png" class="w-15" />
                <h1 class="text-xl font-bold">El Último Estus</h1>
            </div>
            <nav>
                <ul class="flex gap-6">
                    <li><a href="#inicio" class="hover:text-yellow-500 duration-300 transition-colors">Inicio</a></li>
                    <li><a href="#episodios" class="hover:text-yellow-500 duration-300 transition-colors">Episodios</a></li>
                    <li><a href="#sobre-nosotros" class="hover:text-yellow-500 duration-300 transition-colors">Sobre Nosotros</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
