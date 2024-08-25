import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import TimeScheduler from "./TimeScheduler";
import FilteredSearch from "./FilteredSearch";
import { Button } from "../ui/button";

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
      data.roleTutorship === "Recibirlas"
        ? navigate("/buscar-tutor")
        : navigate("/registro-tutor");
    } catch (error) {
      setError("root", {
        message: "Este correo ya está utilizado por otra",
      });
    }
  };

  const subjects = [
    "Mamte",
    "Mecanica",
    "Memo",
    "Memo2",
    "Memo",
    "Memo2",
    "Español",
    "Ciencia",
  ];

  return (
    <main className="flex flex-col items-center py-5 mx-4 text-base max-w-[960px] text-zinc-900  mt-12 md:mx-auto">
      <header className="text-3xl font-bold  max-md:max-w-full ">
        Registra las materias en las que deseas brindar asesoría
      </header>

      <form
        className="flex flex-col items-center mt-12 w-full md:w-6/12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FilteredSearch
          items={subjects}
          placeholder="Selecciona tus materias"
        />

        <TimeScheduler />

        <Button
          disabled={isSubmitting}
          type="submit"
          className="btn bg-blue-600 text-white rounded-lg w-full "
          onClick={() => navigate("/buscar-tutor")}
        >
          {isSubmitting ? "Cargando..." : "Continuar"}
        </Button>
      </form>
      {errors.root && <p>{errors.root?.message}</p>}
    </main>
  );
};

export default RegistrateSubjects;
