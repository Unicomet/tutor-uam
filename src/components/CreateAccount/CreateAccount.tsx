import React from "react";
import Header from "./Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useMutation } from "react-query";
import axios from "axios";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Usa un correo institucional de la UAM válido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
  firstName: z.string().min(3, { message: "Escribe un nombre válido" }),
  lastName: z.string().min(3, { message: "Escribe un apellido válido" }),
});

type FormFields = z.infer<typeof schema>;

const CreateAccount: React.FC = () => {
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post("http://localhost:8080/auth/register", data);
    },
  });

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
    await mutation.mutate(data, {
      onSuccess: (response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/comunidad-formulario");
      },
      onError: (error) => {
        if (error.status === 403) {
          setError("root", {
            message: "El correo ya ha sido utilizado",
          });
        } else {
          setError("root", {
            message: error.message,
          });
        }
      },
    });
  };

  return (
    <main className="flex flex-col justify-center">
      <div className="flex flex-col w-full bg-white max-md:max-w-full">
        <Header />
        <section className="flex flex-col items-center px-20 py-5 w-full text-base max-md:px-5 max-md:max-w-full">
          <h1 className="px-4 pt-5 pb-2 text-2xl font-bold text-center text-zinc-900 max-md:max-w-full">
            Crear una cuenta
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

            <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
              <label className="font-medium text-zinc-900 max-md:max-w-full">
                Nombre
              </label>
              <input
                {...register("firstName")}
                type="text"
                placeholder="nombre"
                className="p-4 mt-2 rounded-xl bg-slate-200 text-slate-500 max-md:pr-5 max-md:max-w-full"
              />
              {errors.firstName && (
                <div className="text-red-500">{errors.firstName.message}</div>
              )}
            </div>

            <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
              <label className="font-medium text-zinc-900 max-md:max-w-full">
                Apellido Paterno
              </label>
              <input
                {...register("lastName")}
                type="text"
                placeholder="apellido paterno"
                className="p-4 mt-2 rounded-xl bg-slate-200 text-slate-500 max-md:pr-5 max-md:max-w-full"
              />
              {errors.lastName && (
                <div className="text-red-500">{errors.lastName.message}</div>
              )}
            </div>

            <div className="flex flex-col justify-center px-4 py-3 mt-4 max-w-full text-sm font-bold text-center text-slate-50 w-[496px]">
              <Button
                disabled={isSubmitting}
                type="submit"
                className="btn bg-blue-600 text-white rounded-lg w-full mb-4"
              >
                {isSubmitting ? "Cargando..." : "Crea cuenta"}
              </Button>
              {errors.root && (
                <div className="text-red-500">{errors.root.message}</div>
              )}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default CreateAccount;
