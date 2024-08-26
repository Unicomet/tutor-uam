import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import TimeScheduler from "./TimeScheduler";
import FilteredSearch from "./FilteredSearch";
import { Button } from "../ui/button";

const timeSlotSchema = z.object({
  start: z.string(),
  end: z.string(),
});

const dayAvailabilitySchema = z.object({
  enabled: z.boolean(),
  periods: z
    .array(timeSlotSchema)
    .min(0, "Tienes que seleccionar al menos un horario"),
});

const schema = z.object({
  availability: z.record(dayAvailabilitySchema, {
    message: "Tienes que seleccionar al menos un horario",
  }),
  subjects: z
    .array(z.string(), {
      message: "Tienes que seleccionar al menos una materia",
    })
    .min(0, {
      message: "Tienes que seleccionar al menos una materia",
    }),
});

type FormFields = z.infer<typeof schema>;

const RegistrateSubjects: React.FC = () => {
  const {
    register,
    setError,
    handleSubmit,
    watch,
    getValues,
    setValue,
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
        message: "Este correo ya está utilizado por otra",
      });
    }
  };

  const subjects = ["Mamte", "Mecanica", "Memo", "Memo2", "Español", "Ciencia"];

  return (
    <main className="flex flex-col items-center py-5 mx-4 text-base max-w-[960px] text-zinc-900  mt-12 md:mx-auto">
      <header className="text-3xl font-bold  max-md:max-w-full ">
        Registra las materias en las que deseas brindar asesoría
      </header>
      <form
        className="flex flex-col  mt-12 w-full md:w-6/12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="mb-4 text-xl font-semibold">Seleciona materias</label>

        <FilteredSearch
          name="subjects"
          items={subjects}
          placeholder="Selecciona tus materias"
          register={register}
          setValue={setValue}
          errors={errors.subjects}
        />

        <TimeScheduler
          name="availability"
          register={register}
          setValue={setValue}
          errors={errors.availability}
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          className="btn bg-blue-600 text-white rounded-lg w-full "
        >
          {isSubmitting ? "Cargando..." : "Continuar"}
        </Button>
      </form>
      {errors.root && <p>{errors.root?.message}</p>}
    </main>
  );
};

export default RegistrateSubjects;
