import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRegisterStore = defineStore('register', () => {
  const name = ref<string>('');
  const email = ref<string>('');

  const saveRegister: (nameForm: string, emailForm: string) => void = (nameForm: string, emailForm: string) => {
    name.value = nameForm;
    email.value = emailForm;
  }

  return { name, email, saveRegister };
});
