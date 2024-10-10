import React, { useEffect, useState } from "react";
import Header from "../Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useMutation } from "react-query";
import axios from "axios";
import { is } from "date-fns/locale";

// const schema = z.object({
//   firstName: z.string().min(3, { message: "Escribe un nombre válido" }),
//   lastName: z.string().min(3, { message: "Escribe un apellido válido" }),
//   ocupation: z.enum(["Estudiante", "Profesor"], {
//     message: "Tienes que seleccionar una ocupación",
//   }),
//   facultyUAM: z.enum(
//     ["Azcapotzalco", "Lerma", "Cuajimalpa", "Iztapalapa", "Xochimilco"],
//     {
//       message: "Tienes que seleccionar una unidad académica",
//     }
//   ),
// });

// type FormFields = z.infer<typeof schema>;

const EditProfile: React.FC = () => {
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.patch("http://localhost:8080/users", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
  });

  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const editedData = {};
    // Only include fields that have been edited
    Object.keys(dirtyFields).forEach((field) => {
      editedData[field] = data[field];
    });

    console.log(editedData);

    await mutation.mutate(editedData, {
      onSuccess: () => {
        if (localStorage.getItem("isTutor") === "true") {
          navigate("/mis-asesorias");
        } else {
          navigate("/buscar-tutor");
        }
      },
      onError: (error) => {
        if (error.status === 403) {
          setError("root", {
            message: "Los datos que ingresaste son incorrectos",
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
        <Header routes={[]} textButton={[]} />
        <section className="flex flex-col items-center px-20 py-5 w-full text-base max-md:px-5 max-md:max-w-full">
          <h1 className="px-4 pt-5 pb-2 text-2xl font-bold text-center text-zinc-900 max-md:max-w-full">
            Edita los datos de cuenta
          </h1>
          <form
            className="flex flex-col items-center w-full max-w-[480px] mt-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
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
            </div> */}

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

            <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
              <label className="font-medium text-zinc-900 max-md:max-w-full">
                Ocupación
              </label>

              <select
                {...register("ocupation")}
                className="rounded-lg h-10 p-2 bg-slate-100 select-md w-full mt-4"
              >
                <option value="admin" disabled selected>
                  Selecciona una ocupación
                </option>
                <option value="Estudiante">Estudiante</option>
                <option value="Profesor">Profesor</option>
              </select>
              {errors.ocupation && (
                <div className="text-red-500">{errors.ocupation?.message}</div>
              )}
            </div>
            <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
              <label className="font-medium text-zinc-900 max-md:max-w-full">
                Unidad UAM
              </label>

              <select
                {...register("faculty")}
                className="rounded-lg h-10 p-2 bg-slate-100 select-md w-full mt-4"
              >
                <option value="admin" disabled selected>
                  Selecciona una unidad académica
                </option>
                <option value="Azcapotzalco">Azcapotzalco</option>
                <option value="Azcapotzalco">Lerma</option>
                <option value="Azcapotzalco">Cuajimalpa</option>
                <option value="Azcapotzalco">Iztapalapa</option>
                <option value="Cuajimalpa">Xochimilco</option>
              </select>
              {errors.faculty && (
                <div className="text-red-500">{errors.faculty.message}</div>
              )}
            </div>

            <div className="flex flex-col justify-center px-4 py-3 mt-4 max-w-full text-sm font-bold text-center text-slate-50 w-[496px]">
              <Button
                disabled={isSubmitting}
                type="submit"
                className="btn bg-blue-600 text-white rounded-lg w-full mb-4"
              >
                {isSubmitting ? "Cargando..." : "Editar datos"}
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

export default EditProfile;
