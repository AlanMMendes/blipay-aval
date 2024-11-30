import { FunctionComponent } from "react";
import { Link } from "react-router";
import logo from "../../assets/black-logo.svg";

interface TypeFormProps {}

const TypeForm: FunctionComponent<TypeFormProps> = () => {
  return (
    <div className="flex h-full flex-col lg:flex-row justify-between lg:justify-center items-center">
      <img
        src={logo}
        alt="logo"
        className="w-32 h-auto relative lg:absolute lg:top-0 lg:right-0 my-2 mr-2"
      />
      {/* left/top */}
      <div className="justify-center h-auto lg:h-full lg:w-full items-center flex flex-col gap-4 lg:bg-[#2F1A4B] p-4">
        <h2 className="font-semibold text-2xl text-center lg:text-white h-auto">
          Bem-vindo a Blipay-aval!
        </h2>
        <p className="text-sm text-center lg:text-white h-auto">
          Este é um formulário de teste para avaliar o processo de autorização
          de crédito.
        </p>
      </div>

      {/* right/bottom */}
      <div className="flex flex-col w-64 lg:w-full h-auto justify-center items-center gap-2 py-2">
        <Link
          className="border-2 max-w-64 text-center border-[#2F1A4B] dark:text-black text-black rounded-lg p-3 transition-all duration-200"
          to="/credit-score/person"
        >
          Pessoa Física
        </Link>
        <Link
          className="border-2 max-w-64 text-center border-[#2F1A4B] dark:text-black text-black rounded-lg p-3 transition-all duration-200"
          to="/credit-score/company"
        >
          Pessoa Jurídica
        </Link>
      </div>
    </div>
  );
};

export default TypeForm;
