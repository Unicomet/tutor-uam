import React from "react";

interface FormFieldProps {
  label: string;
  placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col px-4 py-3 max-w-full w-[480px]">
      <label className="font-medium max-md:max-w-full">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="pt-1.5 mt-2 leading-6 rounded-xl bg-slate-200 max-md:max-w-full h-14 w-full px-3"
        aria-label={label}
      />
    </div>
  );
};

export default FormField;
