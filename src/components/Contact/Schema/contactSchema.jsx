import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  cellphone: z.string().regex(/^\(\d{2}\)\s?\d{5}-?\d{4}$/, 'Número de telefone inválido'),
  message: z.string().min(10, 'Mensagem inválida'),
});
