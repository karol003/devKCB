import React from 'react';

export default function Trajetoria() {
  return (
    <div className="h-full bg-azul-gradient flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-2xl px-4 py-8  text-center text-white">
        <h2 className="text-4xl font-semibold relative bottom-36 ">Trajetória</h2>
        <div className="mt-2 mb-10 w-24 mx-auto relative bottom-36 border-t-2 border-white border-dotted"></div>

        {/* Card 1 */}
        <div className="bg-white w-full hover:scale-105 relative bottom-20 text-left text-black rounded-lg p-10 mb-8 card-shadoww border-4 border-green ">
          <div className="absolute top-[-12px] left-4">
            <span className="text-pink text-3xl">&#9670;</span>
          </div>
          <h3 className="text-xl font-bold text-purple">Desenvolvedora Front-End</h3>
          <p className="text-sm font-semibold">Grunber</p>
          <p className="text-sm">Novembro de 2024 - Atualmente</p>
          <p className="mt-2 text-sm">
          Melhoria de projetos na parte de front-end,criação de landings pages e
funcionalidades, atuando e modificando arquivos envolvendo react.js, typescript, Javascript e
tailwind, criando interfaces funcionais e responsivas e fazendo requerimento de API’s. 
          </p>
          <div className="absolute top-4 right-4 text-pink-600 text-lg">&#10040;</div>
        </div>

        <div className="bg-white w-full hover:scale-105 relative bottom-20 text-left text-black rounded-lg p-10 mb-8 card-shadoww border-4 border-green ">
          <div className="absolute top-[-12px] left-4">
            <span className="text-pink text-3xl">&#9670;</span>
          </div>
          <h3 className="text-xl font-bold text-purple">Desenvolvedora Front-End</h3>
          <p className="text-sm font-semibold">Haand Solutions</p>
          <p className="text-sm">Mar de 2024 - Atualmente</p>
          <p className="mt-2 text-sm">
            Melhoria de projetos na parte de front-end, atuando e modificando arquivos envolvendo React.js, TS, JS e Tailwind,
            criando interfaces funcionais e responsivas e também fazendo requerimento de APIs.
          </p>
          <div className="absolute top-4 right-4 text-pink-600 text-lg">&#10040;</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white hover:scale-105 border-2 border-green bottom-20 text-left text-black rounded-lg p-6 mb-8 relative shadow-md">
          <div className="absolute top-[-12px] left-4">
            <span className="text-black text-3xl">&#9671;</span>
          </div>
          <h3 className="text-lg font-bold">Estagiária de Front-End</h3>
          <p className="text-sm font-semibold">HomeHelp</p>
          <p className="text-sm">Out de 2023 - Fev de 2024</p>
          <p className="mt-2 text-sm">
            Responsável pela identidade visual da marca, criação e documentação de telas do aplicativo, e pela revisão do desenvolvimento
            mobile. Atuação em um time enxuto, cuidando de todas as demandas visuais e de documentação da marca.
          </p>
          <div className="absolute left-4 text-black text-lg">&#9670;</div>
        </div>
      </div>
      
    </div>
  );
}
