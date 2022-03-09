import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

const Doctor1 = () => {
  return (
    <div className="lg:w-3/4 w-full my-0 mx-auto py-2.5 xl:px-0 px-5 mt-6 flex items-center justify-center">
      <div className="w-1/2 rounded-lg py-10 border border-[#8F8F90] ">
        <div className="flex items-center flex-col justify-center">
          <div className=" w-40 h-40">
            <img src="http://medic-app-html.type-code.pro/assets/content/doctor-400-7.jpg" alt="Name" className="w-full rounded-full" />
          </div>
          <h3 className="text-2xl mt-2.5">Dr. James</h3>
          <p className="text-[#8F8F90] mt-1">Dentist</p>
          <div className="flex items-center mt-5">
            <WorkOutlineIcon />
            <p className="ml-1">10 years</p>
          </div>
        </div>
        <hr className="bg-[#8F8F90] border my-2 w-full" />
        <div className="px-20">
          <div className="mt-5">
            <div className="flex items-center">
              <SchoolOutlinedIcon />
              <h4 className="ml-2.5 text-xl">Education</h4>
            </div>
            <p className="text-[#8F8F90] ml-9 mt-1.5">NYC University</p>
          </div>
          <div className="mt-5">
            <div className="flex items-center">
              <HomeWorkOutlinedIcon />
              <h4 className="ml-2.5 text-xl">Visit</h4>
            </div>
            <p className="text-[#8F8F90] ml-9 mt-1.5">NYC Avenue</p>
          </div>
          <div className="mt-5">
            <div className="flex items-center">
              <BadgeOutlinedIcon />
              <h4 className="ml-2.5 text-xl">STR</h4>
            </div>
            <p className="text-[#8F8F90] ml-9 mt-1.5">123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor1;
