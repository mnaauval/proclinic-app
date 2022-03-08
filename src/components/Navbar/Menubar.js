const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Appointments", href: "#", current: false },
  { name: "Doctors", href: "#", current: false },
  { name: "Deparments", href: "#", current: false },
  { name: "Patients", href: "#", current: false },
  { name: "Payments", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Menubar = () => {
  return (
    <nav className="md:block hidden mt-5">
      <div className="flex justify-start items-baseline space-x-8">
        {navigation.map((item) => (
          <a key={item.name} href={item.path} className={classNames(item.current ? "text-[#336CFB]" : "text-white hover:text-[#336CFB]", "text-sm font-bold cursor-pointer")} aria-current={item.current ? "page" : undefined}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Menubar;
