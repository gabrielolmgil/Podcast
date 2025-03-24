


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Mi Podcast</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-purple-600 font-medium">
              Inicio
            </a>
            <a href="#episodios" className="text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300">
              Episodios
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-purple-600 transition-colors dark:text-gray-300">
              Contacto
            </a>
          </nav>
          <button className="md:hidden text-gray-700 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Descubre historias fascinantes en tu podcast favorito
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Un espacio donde exploramos temas interesantes con invitados especiales y conversaciones que te
                inspirarán.
              </p>
              <div className="flex gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Escuchar ahora
                </button>
                <button className="border border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-600 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors">
                  Ver episodios
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square max-w-md mx-auto">

                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">En vivo ahora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Último episodio</h2>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
              </div>
              <div className="md:w-3/4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded">
                    Episodio 1
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">45 min</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  El comienzo de una nueva aventura
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  En este primer episodio, exploramos los orígenes de nuestro podcast y compartimos las historias que
                  nos inspiraron a comenzar este proyecto. Acompáñanos en esta nueva aventura.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Episodios destacados</h2>
            <a href="#episodios" className="text-purple-600 font-medium hover:underline">
              Ver todos
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((episode) => (
              <div
                key={episode}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >

                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded">
                    Episodio {episode}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">30 min</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Título del episodio {episode}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Una breve descripción del contenido de este episodio y los temas que se tratan.
                </p>
                <button className="text-purple-600 font-medium hover:underline flex items-center gap-1">
                <span>Escuchar ahora</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Suscríbete a nuestro boletín</h2>
            <p className="text-purple-100 mb-8">
              Recibe notificaciones cuando publiquemos nuevos episodios y contenido exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Mi Podcast</h3>
              </div>
              <p className="text-sm mb-6">
                Un espacio para compartir historias y conversaciones que inspiran, educan y entretienen.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-lg font-bold text-white mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#episodios" className="hover:text-white transition-colors">
                    Episodios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre nosotros
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-lg font-bold text-white mb-4">Escúchanos en</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Spotify
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Google Podcasts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Mi Podcast. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

