import React, { useEffect, useRef, useState } from 'react';
import Corpo from './corpo';
import Trajetoria from './exp';
import EducationInfo from './edc';
import LandingPageFooter from './footer';

const AnimatedText = () => {
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    const rXP = e.pageX - textRef.current.offsetLeft - textRef.current.offsetWidth / 2;
    const rYP = e.pageY - textRef.current.offsetTop - textRef.current.offsetHeight / 2;

    const textShadow = `
      ${rYP / 10}px ${rXP / 80}px rgba(221, 0, 119, 0.6),
      ${rXP / 70}px ${rYP / 12}px rgba(238, 238, 238, 1)
    `;

    textRef.current.style.textShadow = textShadow;
  };

  useEffect(() => {
    const textElement = textRef.current;

    if (textElement) {
      textElement.addEventListener('mousemove', handleMouseMove);
      return () => {
        textElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" ref={textRef}>
      <p className="font-bold">Desenvolvedora</p>
      <div className="flex justify-center md:justify-start">
        <p className="font-bold">Front-End</p>
        <p>{' />'}</p>
      </div>
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const corpoRef = useRef(null);
  const trajetoriaRef = useRef(null);
  const educationRef = useRef(null);
  const footerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <div className="bg-cinza text-gray-800 min-h-screen font-sans flex flex-col items-center">
        <header className="flex flex-wrap justify-between items-center w-full max-w-6xl p-6">
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
          </head>
          <div className="text-xl font-bold">
            <img 
              src='.\images\fantasminha.png' 
              className="w-14 mb-4 md:mb-0 md:mr-4"
            />
          </div>
          <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {/* Menu Desktop */}
          {!menuOpen && (
            <nav className="hidden md:flex font-semibold text-xl flex-wrap gap-4 md:gap-8">
              <a onClick={() => scrollToSection(corpoRef)} className="text-gray-700 hover:text-pink cursor-pointer">Meus Projetos</a>
              <a onClick={() => scrollToSection(trajetoriaRef)} className="text-gray-700 hover:text-pink cursor-pointer">Trajetória</a>
              <a onClick={() => scrollToSection(educationRef)} className="text-gray-700 hover:text-pink cursor-pointer">Currículo</a>
              <a href="https://wa.me/+5528999528620?text=Ol%C3%A1%2C%20vim%20do%20seu%20site!" target="_blank"
  rel="noopener noreferrer" className="text-branco bg-purple p-1 rounded-xl hover:bg-black cursor-pointer">Trabalhe comigo</a>
            </nav>
          )}
        </header>

        <main className="flex flex-col items-center justify-center w-full max-w-6xl h-[calc(100vh-144px)] p-6 gap-12 md:gap-20 md:flex-row">
          <div className="text-center md:text-left w-full md:w-1/2">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">&lt;Olá!, eu sou</p>
            <AnimatedText />
          </div>

          <div className="flex flex-col items-center w-full md:w-1/3 p-6 border-4 border-pink-400 rounded-2xl text-center shadow-lg card-shadow">
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-pink-400 -mt-20"
              src="./images/per.jpg"
            />
            <h3 className="text-lg sm:text-xl text-purple font-bold mt-4">Karoline Biancardi</h3>
            <p className="text-gray-600 text-sm">Perfil</p>
            <p className="text-gray-500 mt-2">
            Desenvolvedora Front-End apaixonada por criar interfaces digitais envolventes e intuitivas. Com foco em design responsivo e atenção aos detalhes, busco transformar ideias em experiências que encantam e facilitam a interação do usuário. Sempre em busca de inovação e novas tecnologias, meu objetivo é construir soluções que fazem a diferença no mundo digital.            </p>
            <a href="https://www.linkedin.com/in/karoline-biancardi/"
  target="_blank"
  rel="noopener noreferrer" className="text-magenta font-semibold mt-4 hover:underline">Ver meu linkedin ⟶</a>
          </div>
        </main>

        {/* Menu Lateral */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 p-6">
            <button onClick={toggleMenu} className="text-gray-700 float-right">
              X
            </button>
            <nav className="flex flex-col mt-10">
              <a onClick={() => scrollToSection(corpoRef)} className="text-gray-700 hover:text-pink py-2">Meus Projetos</a>
              <a onClick={() => scrollToSection(trajetoriaRef)} className="text-gray-700 hover:text-pink py-2">Trajetória</a>
              <a onClick={() => scrollToSection(educationRef)} className="text-gray-700 hover:text-pink py-2">Currículo</a>
              <a onClick={() => scrollToSection(footerRef)} className="text-branco bg-purple p-1 rounded-xl hover:bg-black py-2">Trabalhe comigo</a>
            </nav>
          </div>
        )}
      </div>

      <div ref={corpoRef}>
        <Corpo />
      </div>
      <div ref={trajetoriaRef}>
        <Trajetoria />
      </div>
      <div ref={educationRef}>
        <EducationInfo />
      </div>
      <div ref={footerRef}>
        <LandingPageFooter />
      </div>
    </>
  );
}

export default App;
