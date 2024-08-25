import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const schema = z.object({
  ocupation: z.enum(["Estudiante", "Profesor"], {
    message: "Tienes que seleccionar una ocupación",
  }),
  facultyUAM: z.enum(
    ["Azcapotzalco", "Lerma", "Cuajimalpa", "Iztapalapa", "Xochimilco"],
    { message: "Tienes que seleccionar una unidad" }
  ),
  roleTutorship: z.enum(["Darlas", "Recibirlas", "Ambas"], {
    message: "Tienes que seleccionar una opción",
  }),
  //TODO: Make that the validation work for two types of schemas: for tutors and just students

  description: z.string().min(20, {
    message: "Tienes que escribir más de 30 caracteres",
  }),
  educationLevel: z.enum(["licenciatura", "maestria", "doctorado"], {
    message: "Tienes que seleccionar una opción",
  }),
  studyField: z.string().min(5, {
    message: "Tienes que escribir tu campo de estudios, más de 5 caracteres",
  }),
});

type FormFields = z.infer<typeof schema>;

const RegistrateTutor: React.FC = () => {
  const {
    register,
    setError,
    handleSubmit,
    watch,
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
      data.roleTutorship === "Recibirlas"
        ? navigate("/buscar-tutor")
        : navigate("/registro-tutor");
    } catch (error) {
      setError("root", {
        message: "Este correo ya está utilizado por otra",
      });
    }
  };
  const roleTutorship = watch("roleTutorship");

  const renderTutorForm = () => {
    if (roleTutorship === "Darlas" || roleTutorship === "Ambas") {
      return (
        <>
          <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
            <label className="font-medium text-zinc-900 max-md:max-w-full">
              Descripción de ti
            </label>

            <textarea
              className="bg-slate-100 rounded p-2 mt-4"
              placeholder="Soy alguien apasionado por la ciencia y la enseñanza"
              {...register("description")}
            ></textarea>

            {errors.description && (
              <div className="text-red-500">{errors.description?.message}</div>
            )}
          </div>
          <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
            <label className="font-medium text-zinc-900 max-md:max-w-full">
              Grado de estudios
            </label>

            <select
              {...register("educationLevel")}
              className="rounded-lg h-10 p-2 bg-slate-100 select-md w-full mt-4"
            >
              <option value="admin" disabled selected>
                Selecciona una opción
              </option>
              <option value="licenciatura">Licenciatura</option>
              <option value="maestria">Maestría</option>
              <option value="doctorado">Doctorado</option>
            </select>

            {errors.educationLevel && (
              <div className="text-red-500">
                {errors.educationLevel?.message}
              </div>
            )}
          </div>
          <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
            <label className="font-medium text-zinc-900 max-md:max-w-full">
              Campo de estudios
            </label>
            <input
              type="text"
              placeholder="Ciencias de la computación"
              className="rounded-lg bg-slate-100 h-10 ps-2 w-full mt-4"
              {...register("studyField")}
            />

            {errors.studyField && (
              <div className="text-red-500">{errors.studyField?.message}</div>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <main className="flex flex-col items-center py-5 text-base max-w-[960px] text-zinc-900 mx-auto mt-12">
      <header className="px-4 text-3xl font-bold text-center max-md:max-w-full ">
        Unéte a la comunidad de tutorías de la UAM
      </header>
      <h2 className="px-4  pb-3 text-center max-md:max-w-full mt-12 font-semiboldbold text-2xl ">
        Cuéntanos sobre ti
      </h2>
      <div className="mt-6">
        <form
          className="flex flex-col items-center w-full max-w-[480px] "
          onSubmit={handleSubmit(onSubmit)}
        >
          <ProfilePhoto />

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
              {...register("facultyUAM")}
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
            {errors.facultyUAM && (
              <div className="text-red-500">{errors.facultyUAM.message}</div>
            )}
          </div>

          <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
            <label className="font-medium text-zinc-900 max-md:max-w-full">
              ¿Quieres dar o recibir tutoría?
            </label>

            <select
              {...register("roleTutorship")}
              className="rounded-lg h-10 p-2 bg-slate-100 select-md w-full mt-4"
            >
              <option value="admin" disabled selected>
                Selecciona una opción
              </option>
              <option value="Darlas">Darlas</option>
              <option value="Recibirlas">Recibirlas</option>
              <option value="Ambas">Ambas</option>
            </select>
            {errors.roleTutorship && (
              <div className="text-red-500">{errors.roleTutorship.message}</div>
            )}
          </div>
          {roleTutorship && renderTutorForm()}

          <div className="flex flex-col justify-center px-4 py-3 mt-4 max-w-full text-sm font-bold text-center text-slate-50 w-[496px]">
            <Button
              disabled={isSubmitting}
              type="submit"
              className="btn bg-blue-600 text-white rounded-lg w-full "
            >
              {isSubmitting ? "Cargando..." : "Continuar"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegistrateTutor;
