import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-azul text-white text-center py-4">
            <p>&copy; 2024 Todos os direitos reservados.</p>
            <p>Design por @vitoriazzp</p>
        </footer>
    );
};

const LandingPageFooter = () => {
    return (
        <div className="bg-amarelou">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <img 
                    src='.\images\fantasminha.png' 
                    className="w-32 h-32  mb-4 md:mb-0 md:mr-4"
                />
                <div className="text-center md:text-left">
                    <h2 className="text-2xl text-purple font-semibold mb-2">Karoline Biancardi</h2>
                    <p className="text-gray-700">
                        Desenvolvedora Front-End focada em criar interfaces elegantes e responsivas. 
                        Entusiasta de novas tecnologias e desenvolvimento de experiências digitais.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.linkedin.com/in/karoline-biancardi/"  target="_blank"
  rel="noopener noreferrer" className="mt-1">
                        <img src='.\images\li_linkedin.png'/>

                        </a>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default LandingPageFooter;
