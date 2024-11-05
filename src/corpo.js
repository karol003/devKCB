import React from 'react';

import backgroundImage from './fantasma.png';

// Dados dos projetos
const corpo = [
  {
    title: "Lista de afazeres com Javascript",
    description:
      "Neste site, é possível criar uma lista de tarefas, marcá-las como concluídas, editá-las e excluí-las.",
    github: "https://github.com/karol003/Lista-de-afazeres",
    projectLink: "https://lista-de-afazeres-six.vercel.app/",
    image: "./images/lista.png"
  },
  {
    title: "Apagador de palavras",
    description:
      "Neste projeto feito em Python, é possível editar um banco de dados quando se deseja excluir uma palavra específica de várias linhas.",
    github: "https://github.com/karol003/apagador-de-palavras-no-bancode-dados",
    projectLink: "https://github.com/karol003/apagador-de-palavras-no-bancode-dados",
    image: "./images/apagador.png"
  },
  {
    title: "Homehelp LandingPage",
    description:
      "Esse foi o projeto no qual trabalhei no meu estágio. Não está perfeito, mas tanto o design quanto a página inteira foram feitos por mim.",
    github: "https://github.com/karol003/Landing-Page-Homehelp",
    projectLink: "https://nexthomehelp.vercel.app/",
    image: "./images/homehelp.png"
  },
];

export default function Corpo() {
  return (
    <div
      className="flex flex-col items-center bg-pink-50 min-h-screen p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Usando a imagem como fundo
        backgroundSize: 'cover', // Faz com que a imagem cubra toda a área
        backgroundPosition: 'center', // Centraliza a imagem
        backgroundRepeat: 'no-repeat', // Não repete a imagem
      }}
    >
      <h1 className="text-4xl font-bold mt-8 mb-4">Meus Projetos</h1>
      <img src="./images/Vector.png" className="mb-4" alt="Vector" />
      <div className="w-24 h-1 bg-pink-900 mb-8 rounded-full"></div>

      <div className="space-y-6 w-full max-w-3xl">
        {/* Iterando sobre cada projeto e exibindo o conteúdo */}
        {corpo.map((project, index) => {
          // Classes específicas para cada projeto
          const projectClasses = `project-${index + 1}`;

          return (
            <div
              key={index}
              className={`flex ${projectClasses} flex-col md:flex-row items-center gap-4 p-4 border-4 border-black bg-minipinki rounded-2xl text-white transition-shadow hover:shadow-lg hover:bg-cinza`}
            >
              <div className="project-image">
                <img src={project.image} alt={`Ícone do projeto ${project.title}`} className="w-40 h-40 border-8 border-background-3 rounded-xl" />
              </div>

              <div className="flex-1 text-justify space-y-2">
                <h2 className="text-xl text-magenta font-semibold">{project.title}</h2>
                <p className="text-lg text-magenta mt-2">{project.description}</p>

                <div className="flex flex-col md:flex-row items-center mt-4 space-x-0 md:space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline-offset-4 flex hover:text-pink items-center mb-2 md:mb-0"
                  >
                    <img src="./images/Github.png" alt="Ícone do Github" className="w-6 h-6 mr-2" />
                    Github
                  </a>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-magenta hover:bg-pink hover:rounded-md flex items-center"
                  >
                    Ver o projeto <span className="ml-1">↗</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
