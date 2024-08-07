import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import TimeScheduler from "./TimeScheduler";

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
  description: z.string().min(30, {
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

const RegistrateSubjects: React.FC = () => {
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

  return (
    <main className="flex flex-col items-center py-5 mx-4 text-base max-w-[960px] text-zinc-900  mt-12 md:mx-auto">
      <header className="text-3xl font-bold  max-md:max-w-full ">
        Registra las materias en las que deseas brindar asesoría
      </header>

      <form
        className="flex flex-col items-center mt-12 w-full md:w-6/12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="input input-bordered flex items-center gap-2 mb-8 w-full">
          <input
            type="text"
            className="grow"
            placeholder="Seleccionar Materias"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <TimeScheduler />

        <button
          disabled={isSubmitting}
          type="submit"
          className="btn bg-blue-600 text-white rounded-lg w-full "
          onClick={() => navigate("/buscar-tutor")}
        >
          {isSubmitting ? "Cargando..." : "Continuar"}
        </button>
      </form>
    </main>
  );
};

export default RegistrateSubjects;
