"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

type TimePeriod = {
  start: string;
  end: string;
};

type DayAvailability = {
  enabled: boolean;
  periods: TimePeriod[];
};

type Availability = {
  [key: string]: DayAvailability;
};

const days: string[] = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
const timeSlots: string[] = Array.from({ length: 48 }, (_, i) => {
  const hour = Math.floor(i / 2);
  const minute = i % 2 === 0 ? "00" : "30";
  return `${hour.toString().padStart(2, "0")}:${minute}`;
});

interface TimeSchedulerProps {
  name: Path<FieldValues>;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  errors: any;
}

export default function TimeScheduler({
  name,
  register,
  setValue,
  errors,
}: TimeSchedulerProps) {
  const [availability, setAvailability] = useState<Availability>(
    days.reduce(
      (acc, day) => ({
        ...acc,
        [day]: { enabled: false, periods: [{ start: "09:00", end: "17:00" }] },
      }),
      {} as Availability
    )
  );

  const toggleDay = (day: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        enabled: !prev[day].enabled,
        periods: prev[day].enabled ? [] : [{ start: "09:00", end: "17:00" }],
      },
    }));
    setValue(name, availability);
  };

  const updateTime = (
    day: string,
    periodIndex: number,
    type: "start" | "end",
    value: string
  ) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        periods: prev[day].periods.map((period, index) =>
          index === periodIndex ? { ...period, [type]: value } : period
        ),
      },
    }));
  };

  const addPeriod = (day: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        periods: [...prev[day].periods, { start: "09:00", end: "17:00" }],
      },
    }));
  };

  const removePeriod = (day: string, periodIndex: number) => {
    setAvailability((prev) => {
      const updatedPeriods = prev[day].periods.filter(
        (_, index) => index !== periodIndex
      );

      return {
        ...prev,
        [day]: {
          ...prev[day],
          periods: updatedPeriods,
          enabled: updatedPeriods.length > 0, // Disable the day if there are no periods
        },
      };
    });
  };

  return (
    <>
      <Card className="w-full max-w-3xl mb-4">
        <CardHeader>
          <CardTitle>Configura tu Disponibilidad</CardTitle>
        </CardHeader>
        <CardContent>
          {days.map((day) => (
            <div key={day} className="mb-6">
              <div className="flex items-center space-x-4 mb-2">
                <Switch
                  {...register(name)}
                  id={`${day}-toggle`}
                  checked={availability[day].enabled}
                  onCheckedChange={() => {
                    toggleDay(day);
                  }}
                />
                <Label
                  htmlFor={`${day}-toggle`}
                  className="text-lg font-semibold"
                >
                  {day}
                </Label>
              </div>
              {availability[day].enabled && (
                <div className="ml-14 space-y-2">
                  {availability[day].periods.map((period, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Select
                        value={period.start}
                        onValueChange={(value) =>
                          updateTime(day, index, "start", value)
                        }
                      >
                        <SelectTrigger className="w-[120px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span>a</span>
                      <Select
                        value={period.end}
                        onValueChange={(value) =>
                          updateTime(day, index, "end", value)
                        }
                      >
                        <SelectTrigger className="w-[120px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removePeriod(day, index)}
                        className="h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">
                          Eliminar periodo de tiempo
                        </span>
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addPeriod(day)}
                    className="mt-2"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Añadir Periodo de Tiempo
                  </Button>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
      {errors && <p className="text-red-500 mb-8">{errors?.message}</p>}
    </>
  );
}
