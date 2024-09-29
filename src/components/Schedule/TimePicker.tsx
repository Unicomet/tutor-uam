import { Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { onChange } from "@builder.io/react";
import { setDefaultAutoSelectFamily } from "net";

interface TimePickerProps {
  value: string | undefined;
  onChange: (time: string | undefined) => void;
}

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

export default function TimePicker({
  value: selectedTime,
  onChange: setSelectedTime,
}: TimePickerProps) {
  const generateTimeOptions = () => {
    const options = [];
    for (let i = 5; i <= 24; i++) {
      const hour = i > 12 ? i - 12 : i;
      const amPm = i < 12 || i === 24 ? "AM" : "PM";
      options.push(`${hour}:00 ${amPm}`);
      if (hour == 12 && amPm == "AM") {
        continue;
      }
      options.push(`${hour}:30 ${amPm}`);
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div className="w-full max-w-sm mx-auto mb-4">
      <Select onValueChange={setSelectedTime} value={selectedTime}>
        <SelectTrigger className="w-full">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 opacity-50" />
            <SelectValue placeholder="Select a time" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="max-h-[300px] overflow-y-auto">
            <SelectLabel>Mañana</SelectLabel>
            {timeOptions.slice(0, 14).map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
            <SelectLabel>Tarde</SelectLabel>
            {timeOptions.slice(14, 28).map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
            <SelectLabel>Noche</SelectLabel>
            {timeOptions.slice(28).map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedTime && (
        <p className="mt-2 text-sm text-muted-foreground">
          Seleccionaste: {selectedTime}
        </p>
      )}
    </div>
  );
}
