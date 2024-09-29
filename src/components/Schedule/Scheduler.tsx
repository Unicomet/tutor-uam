import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import { useMutation } from "react-query";
import TimePicker from "./TimePicker";
import DatePicker from "./DatePicker";

const schema = z.object({
  date: z.date({ required_error: "Debes seleccionar una fecha" }),
  startTime: z.string({ required_error: "Debes seleccionar una hora" }),
  // .regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:mm format"), // Validate time string in HH:mm
});

type FormFields = z.infer<typeof schema>;

function convertTo24HourFormat(time: string): string {
  const [hours, minutes] = time.match(/(\d+):(\d+)/)?.slice(1) || [];
  const isPM = time.toLowerCase().includes("pm");
  let convertedHours = parseInt(hours, 10);

  if (isPM && convertedHours < 12) {
    convertedHours += 12;
  } else if (!isPM && convertedHours === 12) {
    convertedHours = 0;
  }

  return `${String(convertedHours).padStart(2, "0")}:${minutes}:00`;
}

const Scheduler: React.FC = () => {
  const { tutorId } = useParams();
  console.log(tutorId);

  const {
    setError,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post("http://localhost:8080/tutorships/schedule", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = async (data) => {
    data.startTime = convertTo24HourFormat(data.startTime);
    data.tutorId = parseInt(tutorId);
    console.log(data);

    await mutation.mutate(data, {
      onSuccess: () => {
        navigate("/buscar-tutor");
      },
      onError: (error) => {
        setError("root", {
          message: error.message,
        });
      },
    });
  };

  // // State
  // const [date, setDate] = React.useState<Date | null>(null);
  // const [time, setTime] = React.useState<string | null>(null);

  return (
    <main className="flex flex-col items-center py-5 mx-4 text-base max-w-[960px] text-zinc-900  mt-12 md:mx-auto">
      <header className="text-3xl font-bold  max-md:max-w-full ">
        Selecciona la fecha y hora de tu asesoría
      </header>
      <form
        className="flex flex-col items-center mt-12 w-full md:w-6/12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="mb-4 text-xl font-semibold">Selecciona el día</label>

        <Controller
          name="date"
          control={control}
          defaultValue={undefined}
          render={({ field }) => <DatePicker {...field} />}
        />
        {errors.date && <p className="text-red-500">{errors.date?.message}</p>}
        <label className="my-4 text-xl font-semibold">Selecciona el hora</label>
        <Controller
          name="startTime"
          control={control}
          defaultValue={undefined}
          render={({ field }) => <TimePicker {...field} />}
        />
        {errors.startTime && (
          <p className="text-red-500">{errors.startTime?.message}</p>
        )}
        <Button
          disabled={isSubmitting}
          type="submit"
          className="btn mt-4 bg-blue-600 text-white rounded-lg w-full "
        >
          {isSubmitting ? "Cargando..." : "Continuar"}
        </Button>
      </form>
      {errors.root && <p className="text-red-500">{errors.root?.message}</p>}
    </main>
  );
};

export default Scheduler;
