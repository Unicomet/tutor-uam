import React from "react";
import Header from "./Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(3),
  firstName: z.string().min(3),
});

type FormFields = z.infer<typeof schema>;

const CreateAccount: React.FC = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
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
                placeholder="Email"
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
                {...register("name")}
                type="password"
                className="p-4 mt-2 rounded-xl bg-slate-200 text-slate-500 max-md:pr-5 max-md:max-w-full"
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>

            <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
              <label className="font-medium text-zinc-900 max-md:max-w-full">
                Apellido Paterno
              </label>
              <input
                {...register("firstName")}
                type="password"
                className="p-4 mt-2 rounded-xl bg-slate-200 text-slate-500 max-md:pr-5 max-md:max-w-full"
              />
              {errors.firstName && (
                <div className="text-red-500">{errors.firstName.message}</div>
              )}
            </div>

            <div className="flex flex-col justify-center px-4 py-3 mt-4 max-w-full text-sm font-bold text-center text-slate-50 w-[496px]">
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn bg-blue-600 text-white rounded-lg w-full"
              >
                {isSubmitting ? "Cargando..." : "Crea cuenta"}
              </button>
            </div>

            {/* <input
              {...register("password")}
              type="password"
              placeholder="Contraseña"
            />
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
            <button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )} */}
          </form>
        </section>
      </div>
    </main>
  );
};

export default CreateAccount;
