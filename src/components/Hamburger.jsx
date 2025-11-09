import { useState } from "react";

function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* hidden checkbox */}
      <input
        type="checkbox"
         id="menu-toggle"
        checked={open}
        onChange={() => setOpen(!open)}
        className="hidden"
      />

      {/* Hamburger Button */}
      <label
        htmlFor="menu-toggle"
        className={`
          flex justify-center  items-center cursor-pointer
          w-[104px] h-[104px] rounded-[10px] bg-green-500
          absolute
        `}
      >
        <span
          className={`
            relative flex items-center justify-center 
            w-[26px] h-[3px] rounded bg-black transition-all duration-200
            ${open ? "bg-transparent" : ""}
          `}
        >
          <span
            className={`
              absolute w-[26px] h-[3px] rounded bg-black transition-all duration-200
              ${open ? "rotate-40 top-0" : "-top-[7px]"}
            `}
          ></span>

          <span
            className={`
              absolute w-[26px] h-[3px] rounded bg-black transition-all duration-200
              ${open ? "-rotate-40 " : "top-[7px]"}
            `}
          ></span>
        </span>
      </label>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute mt-[110px] left-0 bg-gray-100 p-3 rounded-lg w-[10vw] shadow">
          <a className="block px-3 py-2 hover:bg-gray-300 rounded" href="/">Home</a>
          <a className="block px-3 py-2 hover:bg-gray-300 rounded" href="/login">Login</a>
          <a className="block px-3 py-2 hover:bg-gray-300 rounded" href="/signup">Signup</a>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
