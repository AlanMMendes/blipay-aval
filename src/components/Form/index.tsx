import { useState } from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../../features/wizardSlice";
import { AppDispatch } from "../../store/store";
import CustomInput from "../CustomInput";

interface FormData {
  nome: string;
  cpf: string;
  rendaMensal: string;
  idade: string;
  cidade: string;
  razaoSocial: string;
  cnpj: string;
  faturamentoMensal: string;
}

const CreditForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<any>({
    nome: "",
    cpf: "",
    rendaMensal: "",
    idade: "",
    cidade: "",
    razaoSocial: "",
    cnpj: "",
    faturamentoMensal: "",
  });

  const [errors, setErrors] = useState({
    nome: "",
    cpf: "",
    rendaMensal: "",
    idade: "",
    cidade: "",
    razaoSocial: "",
    cnpj: "",
    faturamentoMensal: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    const newErrors: any = {};

    if (formData.nome.length < 8) {
      newErrors.nome = "Nome deve ter no mínimo 8 caracteres";
    }

    if (formData.cpf.length < 11) {
      newErrors.cpf = "CPF deve ter no mínimo 11 caracteres";
    }

    if (formData.rendaMensal <= 0) {
      newErrors.rendaMensal = "Renda mensal deve ser maior que 0";
    }

    if (formData.idade < 18) {
      newErrors.idade = "Idade deve ser maior ou igual a 18";
    }

    if (!formData.cidade) {
      newErrors.cidade = "Cidade não pode ser vazia";
    }

    if (formData.razaoSocial.length < 8) {
      newErrors.razaoSocial = "Razão social deve ter no mínimo 8 caracteres";
    }

    if (formData.cnpj.length < 14) {
      newErrors.cnpj = "CNPJ deve ter no mínimo 14 caracteres";
    }

    if (formData.faturamentoMensal < 500) {
      newErrors.faturamentoMensal =
        "Faturamento mensal deve ser maior ou igual a 500";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(nextStep());
      console.log("Formulário enviado com sucesso!");
    } else {
      console.log("Erro no formulário. Corrija os campos.");
    }
  };

  return (
    <div className="flex h-auto justify-center items-center flex-col gap-4  w-full max-w-[480px] rounded-lg ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 h-auto rounded-lg p-4 justify-center items-center"
      >
        <h1 className="text-lg text-gray-800">Insira as suas informações</h1>
        <div className="flex flex-col gap-4">
          <label className="text-gray-500 text-sm">Seu nome</label>
          <CustomInput
            type="text"
            name="nome"
            placeholder={errors.nome || "Nome"}
            errorName={errors.nome}
            value={formData.nome}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-gray-500 text-sm">CPF</label>
          <CustomInput
            type="text"
            name="cpf"
            placeholder={errors.cpf || "CPF"}
            errorName={errors.cpf}
            value={formData.cpf}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-gray-500 text-sm">Renda Mensal</label>
          <CustomInput
            type="number"
            name="rendaMensal"
            placeholder={errors.rendaMensal || "Renda Mensal"}
            value={formData.rendaMensal}
            errorName={errors.rendaMensal}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-gray-500 text-sm">Sua idade</label>
          <CustomInput
            type="number"
            name="idade"
            placeholder={errors.idade || "Idade"}
            value={formData.idade}
            errorName={errors.idade}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-gray-500 text-sm">Cidade</label>
          <CustomInput
            type="text"
            placeholder={errors.cidade || "Cidade"}
            name="cidade"
            value={formData.cidade}
            errorName={errors.cidade}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-gray-500 text-sm">Razão Social</label>
          <CustomInput
            type="text"
            placeholder={errors.razaoSocial || "Razão Social"}
            name="razaoSocial"
            value={formData.razaoSocial}
            errorName={errors.razaoSocial}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-gray-500 text-sm">CNPJ</label>
          <CustomInput
            type="text"
            placeholder={errors.cnpj || "CNPJ"}
            name="cnpj"
            value={formData.cnpj}
            errorName={errors.cnpj}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-gray-500 text-sm">
            Seu faturamento mensal
          </label>
          <CustomInput
            type="number"
            placeholder={errors.faturamentoMensal || "Faturamento Mensal"}
            name="faturamentoMensal"
            value={formData.faturamentoMensal}
            errorName={errors.faturamentoMensal}
            onChange={handleChange}
          />
        </div>

        <button
          className="border-2 max-w-64 flex justify-center items-center max-h-12 border-[#2F1A4B] dark:text-black text-black rounded-full p-3 transition-all duration-200"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CreditForm;