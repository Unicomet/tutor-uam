import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
      <label
        htmlFor={label}
        className="font-medium text-zinc-900 max-md:max-w-full"
      >
        {label}
      </label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        className="p-4 mt-2 rounded-xl bg-slate-200 text-slate-500 max-md:pr-5 max-md:max-w-full"
      />
    </div>
  );
};

export default InputField;
