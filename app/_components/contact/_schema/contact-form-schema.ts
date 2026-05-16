import { z } from 'zod/v4'

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Informe um nome com pelo menos 2 caracteres.')
    .max(80, 'O nome deve ter no máximo 80 caracteres.'),
  email: z.email('Informe um e-mail valido.').trim(),
  subject: z
    .string()
    .trim()
    .min(3, 'Informe um assunto com pelo menos 3 caracteres.')
    .max(120, 'O assunto deve ter no máximo 120 caracteres.'),
  message: z
    .string()
    .trim()
    .min(10, 'A mensagem deve ter pelo menos 10 caracteres.')
    .max(1000, 'A mensagem deve ter no máximo 1000 caracteres.'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
