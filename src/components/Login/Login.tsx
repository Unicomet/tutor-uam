import React from "react";
import Header from "./Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Usa un correo institucional de la UAM válido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

type FormFields = z.infer<typeof schema>;

const Login: React.FC = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/buscar-tutor");
    } catch (error) {
      setError("root", {
        message: "Tu correo y contraseña no son válidas",
      });
    }
  };

  return (
    <main className="flex flex-col justify-center">
      <div className="flex flex-col w-full bg-white max-md:max-w-full">
        <Header />
        <section className="flex flex-col items-center px-20 py-5 w-full text-base max-md:px-5 max-md:max-w-full">
          <h1 className="px-4 pt-5 pb-2 text-2xl font-bold text-center text-zinc-900 max-md:max-w-full">
            Iniciar sesión
          </h1>
          <form
            className="flex flex-col items-center w-full max-w-[480px] mt-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
              <label className="font-medium text-zinc-900 max-md:max-w-full">
                Correo Electrónico
              </label>
              <input
                {...register("email")}
                type="text"
                placeholder="correo institucional"
                className="p-4 mt-2 rounded-xl bg-slate-200 text-slate-500 max-md:pr-5 max-md:max-w-full"
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
            <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
              <label className="font-medium text-zinc-900 max-md:max-w-full">
                Contraseña
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="contraseña"
                className="p-4 mt-2 rounded-xl bg-slate-200 text-slate-500 max-md:pr-5 max-md:max-w-full"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </div>

            <div className="flex flex-col justify-center px-4 py-3 mt-4 max-w-full text-sm font-bold text-center text-slate-50 w-[496px]">
              <Button
                disabled={isSubmitting}
                type="submit"
                className="btn bg-blue-600 text-white rounded-lg w-full"
              >
                {isSubmitting ? "Cargando..." : "Iniciar sesión"}
              </Button>
            </div>
            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )}
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;
