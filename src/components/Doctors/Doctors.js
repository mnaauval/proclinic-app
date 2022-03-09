import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { NavLink } from "react-router-dom";

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Doctors = () => {
  return (
    <div className="lg:w-3/4 w-full my-0 mx-auto pt-2.5 pb-10 xl:px-0 px-5 mt-6 ">
      <h1 className="text-[44px] font-bold">Doctors</h1>
      <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-8 gap-12 text-center h-max">
        {test.map((item) => (
          <div className="rounded-xl shadow-lg h-max pb-5">
            <div>
              <img src="http://medic-app-html.type-code.pro/assets/content/doctor-400-7.jpg" alt="Name" className="rounded-t-lg w-full" />
            </div>
            <h3 className="text-2xl font-semibold mt-5 mb-2.5">Dr. James</h3>
            <p className="text-[#8F8F90] mb-5">Dentist</p>
            <div className="mb-5 flex items-center justify-center">
              <WorkOutlineIcon />
              <p className="ml-1">10 years</p>
            </div>
            <p className="text-[#8F8F90] mb-2.5">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
            <div className="flex items-center justify-center bg-gray-100 mb-5 py-2.5">
              <AccessTimeOutlinedIcon />
              <p className="text-[#8F8F90] ml-1">Mon - Sun, 07:00 - 12:00</p>
            </div>
            <NavLink to="/doctors/:profile">
              <button className="bg-[#336CFB] text-white rounded-md p-2.5 font-semibold ">View Profile</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
