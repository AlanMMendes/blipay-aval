import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definindo os estados de cada etapa
interface WizardState {
  currentStep: number;
  maxSteps: number;
  formData: {
    nome: string;
    idade: number;
  };
}

const initialState: WizardState = {
  currentStep: 1,
  maxSteps: 3,
  formData: {
    nome: "",
    idade: 0,
  },
};

const wizardSlice = createSlice({
  name: "wizard",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    setFormData: (
      state,
      action: PayloadAction<{ nome: string; idade: number }>
    ) => {
      state.formData = action.payload;
    },
    resetWizard: () => initialState,
  },
});

export const { nextStep, prevStep, setFormData, resetWizard } =
  wizardSlice.actions;
export default wizardSlice.reducer;
