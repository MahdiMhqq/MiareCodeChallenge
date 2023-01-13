import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

import icons from "utils/icons";

interface IBasicDropdown {
  title: string;
  activeItem: string;
  items: string[];
  onChange: (clickedItem: string, index: number) => void;
  customClass?: string;
}
const BasicDropdown: React.FunctionComponent<IBasicDropdown> = ({
  title,
  activeItem,
  items,
  onChange,
  customClass = "",
}) => {
  return (
    <div className={`flex items-center gap-x-3 ${customClass}`}>
      <div className="font-bold text-sm tablet:text-base">{title}</div>
      <Listbox
        value={activeItem}
        onChange={(value) => onChange(value, items.indexOf(value))}
      >
        <div className="relative">
          <Listbox.Button className="w-[24ch] text-sm overflow-hidden flex items-center cursor-pointer rounded-lg bg-white text-right shadow-md focus:outline-none focus-visible:border-info focus-visible:ring-2 focus-visible:ring-info focus-visible:ring-opacity-75">
            {({ open }) => (
              <>
                <span className="block truncate px-3 font-bold grow text-sm tablet:text-base">
                  {activeItem}
                </span>
                <div className="aspect-square flex items-center justify-center w-8 h-8 border-r border-gray bg-info">
                  {icons.chevronDown(
                    `w-6 h-6 transition ${open ? "rotate-180" : ""}`,
                    "fill-white"
                  )}
                </div>
              </>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((item) => (
                <Listbox.Option
                  key={item}
                  className={({ active, selected }) =>
                    `relative select-none py-2 px-4 text-sm cursor-pointer ${
                      active
                        ? "bg-info bg-opacity-20 text-black"
                        : "text-tblack"
                    } ${
                      selected
                        ? "bg-info bg-opacity-10 text-black"
                        : "text-tblack"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-info"></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default BasicDropdown;
