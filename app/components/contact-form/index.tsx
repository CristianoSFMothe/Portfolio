"use client";

import { z } from "zod";
import { SectionTitle } from "../section-title";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { cn } from "@/app/libs/utils";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from 'framer-motion';
import { fadeUpAnimation } from "@/app/libs/animations";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(100, "O nome deve ter no máximo 100 caracteres"),
  email: z.string().email("Por favor, insira um e-mail válido"),
  message: z
    .string()
    .min(1, "A mensagem não pode estar vazia")
    .max(2500, "A mensagem pode ter no máximo 2500 caracteres"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);

      toast.success("Mensagem enviada com sucesso!")

      reset();
    } catch {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente");
    }
  };

  return (
    <section
      id="contact"
      className={cn(
        "py-16 px-6 md:py-[128px] flex",
        "items-center justify-center bg-gray-950",
      )}
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />
        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}

        >
          <div>
            <input
              placeholder="Nome"
              className={cn(
                "w-full h-[56px] bg-gray-800 rounded-lg placeholder:text-gray-400",
                "text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600",
                errors.name ? "ring-2 ring-red-500" : "",
              )}
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1 name-text-error">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <input
              placeholder="E-mail"
              type="email"
              className={cn(
                "w-full h-[56px] bg-gray-800 rounded-lg",
                "placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none",
                "focus:ring-2 focus:ring-emerald-600",
                errors.email ? "ring-2 ring-red-500" : "",
              )}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 email-text-error">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <textarea
              placeholder="Mensagem"
              className={cn(
                "resize-none w-full h-[138px] bg-gray-800 rounded-lg",
                "placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none",
                "focus:ring-2 focus:ring-emerald-600",
                errors.message ? "ring-2 ring-red-500" : "",
              )}
              {...register("message")}
              maxLength={2500}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1 msg-text-error">
                {errors.message.message}
              </span>
            )}
          </div>

          <div className="relative w-max mx-auto mt-6">
            <Button
              className="z-[2] relative shadow-button btn-submit-message"
              disabled={isSubmitting}
            >
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-emerald-600 blur-2xl opacity-20 btn-submit-message" />
          </div>
        </motion.form>
      </div>
    </section>
  );
};
