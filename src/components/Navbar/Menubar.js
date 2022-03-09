import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Dashboard", path: "/", current: true },
  { name: "Appointments", path: "/appointments", current: false },
  { name: "Doctors", path: "/doctors", current: false },
  { name: "Deparments", path: "/deparments", current: false },
  { name: "Patients", path: "/patients", current: false },
  { name: "Payments", path: "/payments", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Menubar = () => {
  return (
    <nav className="md:block hidden mt-5">
      <div className="flex justify-start items-baseline space-x-8">
        {navigation.map((item) => (
          <NavLink key={item.name} to={item.path} className={classNames(item.current ? "text-[#336CFB]" : "text-white hover:text-[#336CFB]", "text-sm font-bold cursor-pointer")} aria-current={item.current ? "page" : undefined}>
            {" "}
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Menubar;
