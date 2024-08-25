/**
 * This code was generated by Builder.io.
 */
import React from 'react';

const TimePicker: React.FC = () => {
  return (
    <section className="w-full max-w-[960px]">
      <h2 className="px-4 pb-3 text-2xl font-bold text-neutral-900">
        Selecciona una hora
      </h2>
      <div className="flex justify-between px-4 pt-4 w-full max-md:flex-wrap">
        <div className="text-base font-medium text-neutral-900 max-md:max-w-full">
          Duration: 50 min
        </div>
        <div className="flex flex-col flex-1 pt-1.5 pb-3.5 max-md:max-w-full">
          <div className="flex flex-col justify-center items-end px-16 rounded-sm bg-zinc-200 max-md:px-5 max-md:max-w-full">
            <div className="shrink-0 w-px h-1 rounded-sm bg-neutral-900" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimePicker;