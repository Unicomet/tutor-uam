import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import TimeScheduler from "./TimeScheduler";
import { Button } from "../ui/button";
import axios from "axios";
import { useMutation } from "react-query";

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
});

type FormFields = z.infer<typeof schema>;

const Scheduler: React.FC = () => {
  let { tutorId } = useParams();
  console.log(tutorId);

  const {
    register,
    setError,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post("http://localhost:8080/schedule/" + tutorId, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await mutation.mutate(data, {
      onSuccess: () => {
        console.log(data);
        navigate("/buscar-tutor");
      },
      onError: (error) => {
        setError("root", {
          message: error.message,
        });
      },
    });
  };

  const subjects = ["Matemáticas", "Ciencia", "Memo", "Memo2", "Español"];

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

export default Scheduler;
