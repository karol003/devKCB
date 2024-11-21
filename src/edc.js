import React from 'react';

const EducationInfo = () => {

    const handleDownload = () => {
      
        const link = document.createElement('a');
        link.href = '/images/Karoline-Biancardi.pdf';
        link.download = 'Curriculo-Karoline-Biancardi.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex items-center  bg-branco justify-center min-h-screen ">
            <div className="max-w-4xl mx-auto p-6  rounded-lg ">
            <h1 className="text-4xl font-semibold mb-4 text-center">
    Educação
</h1>
<div className="flex justify-center mb-4">
    <img src="./images/Vector.png" alt="Vector" className=""/>
</div>
                <section className="">
                    <div className="bg-gray-100 p-4 rounded-lg mb-2">
                        <h3 className="text-2xl text-purple font-semibold">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
                        <p className="text-xl">FAESA</p>
                        <p>Conclusão prevista para Novembro de 2025</p>
                    </div>
                </section>

                <section>
                    <div className="bg-gray-100 p-4 rounded-lg mb-2">
                        <h3 className="text-xl font-bold text-purple">Inglês</h3>
                        <p className="text-gray-600">intermediário - avançado </p>
                    </div>
                    <div className="flex items-center justify-center mt-14">
                    <button
                        onClick={handleDownload}
                        className="bg-purple text-white w-56 font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-200"
                    >
                        <img src="./images/download.png" alt="Download" className="mr-2" />
                        Baixar Currículo
                    </button>
                </div>
                </section>
            </div>
        </div>
    );
};

export default EducationInfo;
