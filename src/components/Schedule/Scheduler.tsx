import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import TimePicker from "./TimePicker";
import DatePicker from "./DatePicker";
import { getAvailabilityTutors } from "@/api/availabilityTutors";

const schema = z.object({
  date: z.date({ required_error: "Debes seleccionar una fecha" }),
  startTime: z.string({ required_error: "Debes seleccionar una hora" }),
  typeTutorship: z.enum(["En línea", "Presencial"], {
    message: "Debes seleccionar una opción",
  }),
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
    register,
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

  const {
    data: availabilities,
    error: errorAvailabilities,
    isLoading: isLoadingAvailabilities,
    refetch,
  } = useQuery([tutorId], () => getAvailabilityTutors(parseInt(tutorId)));

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = async (data) => {
    data.startTime = convertTo24HourFormat(data.startTime);
    data.tutorId = parseInt(tutorId);
    data.typeTutorship === "Presencial"
      ? (data.isTutorshipInPerson = true)
      : (data.isTutorshipInPerson = false);

    delete data.typeTutorship;

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
        <label className="my-4 text-xl font-semibold">Horario disponible</label>

        {isLoadingAvailabilities ? (
          <div>Cargando...</div>
        ) : errorAvailabilities ? (
          <div>Error: {errorAvailabilities.message}</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Día
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Hora de inicio
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Hora de fin
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {availabilities?.map((availability, index: number) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {availability.day}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {availability.startTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {availability.endTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <label className="my-4 text-xl font-semibold">Selecciona el día</label>

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
        <label className="my-4 text-xl font-semibold">
          Selecciona el tipo de asesoría
        </label>
        <select
          {...register("typeTutorship")}
          className="rounded-lg h-10 p-2 bg-slate-100 select-md w-10/12 my-4"
        >
          <option value="placeholder" disabled selected>
            Selecciona una opción
          </option>
          <option value="En línea">En línea</option>
          <option value="Presencial">Presencial</option>
        </select>
        {errors.typeTutorship && (
          <div className="text-red-500">{errors.typeTutorship?.message}</div>
        )}

        <Button
          disabled={isSubmitting}
          type="submit"
          className="btn mt-12 bg-blue-600 text-white rounded-lg w-full "
        >
          {isSubmitting ? "Cargando..." : "Continuar"}
        </Button>
      </form>
      {errors.root && (
        <p className="text-red-500 mt-12">{errors.root?.message}</p>
      )}
    </main>
  );
};

export default Scheduler;
