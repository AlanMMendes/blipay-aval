import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep, setFormData } from "../../features/wizardSlice";
import { AppDispatch } from "../../store/store";
import CreditForm from "../Form";

const WizardForm: React.FC = () => {
  const { currentStep, formData } = useSelector((state: any) => state.wizard);
  const dispatch = useDispatch<AppDispatch>();

  const [nome, setNome] = useState(formData.nome);
  const [idade, setIdade] = useState(formData.idade);

  const handleNext = () => {
    if (currentStep === 1) {
      dispatch(setFormData({ nome, idade }));
    }
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="w-full h-auto flex justify-center items-center flex-col">
            <CreditForm />
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Passo 2: Confirmar Dados</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
          </div>
        );
      case 3:
        return <h2>Passo 3: Concluído!</h2>;
      default:
        return <h2>Passo Desconhecido</h2>;
    }
  };

  const renderProgressCircles = () => {
    const totalSteps = 3;
    const circles = [];

    for (let i = 1; i <= totalSteps; i++) {
      const isActive = i === currentStep;
      const isCompleted = i < currentStep;

      circles.push(
        <div
          key={i}
          className={`w-4 h-4 rounded-full flex justify-center items-center text-white font-bold ${
            isActive
              ? "bg-green-500 scale-110"
              : isCompleted
              ? "bg-gray-300"
              : "bg-gray-500"
          } transition-all`}
        ></div>
      );
    }

    return <div className="flex justify-center gap-2">{circles} </div>;
  };

  return (
    <div className="h-full w-full flex flex-col gap-2">
      {currentStep === 1 && (
        <div className="bg-[#2F1A4B] w-full h-auto py-3 flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-sans font-extralight  text-white">
            Cadastro
          </h1>
        </div>
      )}
      {currentStep === 2 && (
        <div className="bg-[#2F1A4B] w-full h-auto py-3 flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-sans font-extralight  text-white">
            Confirme os dados
          </h1>
        </div>
      )}
      {currentStep === 3 && (
        <div className="bg-[#2F1A4B] w-full h-auto py-3 flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-sans font-extralight  text-white">
            Resultado
          </h1>
        </div>
      )}
      <div className="flex justify-center relative items-center h-auto">
        {renderProgressCircles()}
      </div>

      {renderStep()}
      <div className="justify-center h-auto items-center flex flex-row gap-4">
        {currentStep > 1 && (
          <button
            className="border-2 max-w-64 max-h-12 border-[#2F1A4B] dark:text-black text-black rounded-full p-3 transition-all duration-200"
            onClick={handlePrev}
          >
            Voltar
          </button>
        )}
        {currentStep < 3 && currentStep !== 1 && (
          <button
            className="border-2 max-w-64 max-h-12 border-[#2F1A4B] dark:text-black text-black rounded-full p-3 transition-all duration-200"
            onClick={handleNext}
          >
            Próximo
          </button>
        )}
        {currentStep === 3 && (
          <button
            className="border-2 max-w-64 max-h-12 border-[#2F1A4B] dark:text-black text-black rounded-full p-3 transition-all duration-200"
            onClick={() => alert("Processo concluído!")}
          >
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
};

export default WizardForm;
