'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/app/_components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/_components/ui/form'
import { Input } from '@/app/_components/ui/input'
import { cn } from '@/app/_lib/utils'

import {
  contactFormSchema,
  type ContactFormValues,
} from '../_schema/contact-form-schema'

const defaultValues: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const fieldClassName =
  'h-auto rounded-lg border-white/10 bg-surface-container/50 px-4 py-3 text-sm text-on-surface shadow-none'

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    // Temporary cast for the resolver typings shipped with @hookform/resolvers 5.2.2 + zod 4.4.3.
    resolver: zodResolver(contactFormSchema as never),
    defaultValues,
  })

  const handleSubmit = (values: ContactFormValues) => {
    console.log('contact-form-submit', values)

    toast.success('Mensagem enviada com sucesso.', {
      description:
        'Integração em andamento. Os dados foram registrados no console.',
    })

    form.reset(defaultValues)
  }

  return (
    <Form {...form}>
      <form
        className='space-y-6'
        data-qa='contact-form'
        noValidate
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-jetbrains text-on-surface-variant text-sm'>
                Nome
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='Seu nome'
                  className={fieldClassName}
                  autoComplete='name'
                  data-qa='contact-form-name'
                  {...field}
                />
              </FormControl>
              <FormMessage className='font-inter text-sm' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-jetbrains text-on-surface-variant text-sm'>
                E-mail
              </FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='seu@email.com'
                  className={fieldClassName}
                  autoComplete='email'
                  data-qa='contact-form-email'
                  {...field}
                />
              </FormControl>
              <FormMessage className='font-inter text-sm' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-jetbrains text-on-surface-variant text-sm'>
                Assunto
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='Assunto da mensagem'
                  className={fieldClassName}
                  data-qa='contact-form-subject'
                  {...field}
                />
              </FormControl>
              <FormMessage className='font-inter text-sm' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-jetbrains text-on-surface-variant text-sm'>
                Mensagem
              </FormLabel>
              <FormControl>
                <textarea
                  placeholder='Escreva sua mensagem aqui...'
                  rows={4}
                  className={cn(
                    fieldClassName,
                    'min-h-30 w-full resize-none transition-[color,box-shadow]',
                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none',
                    'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
                  )}
                  data-qa='contact-form-message'
                  {...field}
                />
              </FormControl>
              <FormMessage className='font-inter text-sm' />
            </FormItem>
          )}
        />

        <Button
          data-qa='contact-form-submit'
          className='from-primary-container to-secondary-container font-jetbrains h-auto w-full rounded-lg bg-linear-to-r px-8 py-4 text-sm font-bold text-white shadow-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,112,243,0.4)]'
          type='submit'
        >
          Enviar Mensagem
          <Send aria-hidden='true' size={20} />
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm
