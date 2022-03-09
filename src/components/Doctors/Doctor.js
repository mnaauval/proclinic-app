import PersonIcon from "@mui/icons-material/Person";

const Doctor = () => {
  return (
    <div className="lg:w-3/4 w-full my-0 mx-auto pt-2.5 pb-10 xl:px-0 px-5 mt-6">
      <h1 className="text-[44px] font-bold">Doctor Profile Page</h1>
      <div className="mt-6 grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-10">
        {/* Left */}
        <div className="left">
          <div className="flex items-center">
            <div className="w-32 h-32">
              <img src="http://medic-app-html.type-code.pro/assets/content/doctor-400-7.jpg" alt="Name" className="rounded-full w-full" />
            </div>
            <button className="ml-6 p-2.5 rounded-md mt-7 text-[#336CFB] hover:text-white font-semibold bg-white hover:bg-[#336CFB] border border-[#336CFB] shadow-lg">
              Change photo <PersonIcon />
            </button>
          </div>
          <div className="sm:sm:flex block mt-3.5">
            <label className="block sm:w-1/2 w-full sm:mr-2.5 mr-0">
              <span className="text-gray-800">First name</span>
              <input type="text" className="mt-1 block w-full rounded-full bg-[#EBEBEB] border-transparent focus:bg-white focus:ring-0" placeholder="First name" value={`James`} />
            </label>
            <label className="block sm:w-1/2 w-full sm:ml-2.5 ml-0 sm:mt-0 mt-3.5">
              <span className="text-gray-800">Last name</span>
              <input type="text" className="mt-1 block w-full rounded-full bg-[#EBEBEB] border-transparent focus:bg-white focus:ring-0" placeholder="Last name" value={`Bond`} />
            </label>
          </div>
          <label className="block mt-3.5">
            <span className="text-gray-800">Experience</span>
            <input type="text" className="mt-1 block w-full rounded-full bg-[#EBEBEB] border-transparent focus:bg-white focus:ring-0" placeholder="Experience" value={`10 years`} />
          </label>
          <div className="sm:flex block mt-3.5">
            <label className="block sm:w-1/2 w-full sm:mr-2.5 mr-0">
              <span className="text-gray-800">Speciality</span>
              <input type="text" className="mt-1 block w-full rounded-full bg-[#EBEBEB] border-transparent focus:bg-white focus:ring-0" placeholder="Speciality" value={`Dentis`} />
            </label>
            <label className="block sm:w-1/2 w-full sm:ml-2.5 ml-0 sm:mt-0 mt-3.5">
              <span className="text-gray-800">Gender</span>
              <select className="mt-1 block w-full rounded-full bg-[#EBEBEB] border-transparent focus:bg-white focus:ring-0">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
          <label className="block mt-3.5">
            <span className="text-gray-700">Address</span>
            <textarea className="mt-1 block w-full rounded-xl bg-[#EBEBEB] border-transparent focus:bg-white focus:ring-0" rows="3" placeholder="Address" value={`795 Folsom Ave, Suite 600 San Francisco, CADGE 94107`}></textarea>
          </label>
          <label className="block mt-3.5">
            <span className="text-gray-800">Education</span>
            <input type="text" className="mt-1 block w-full rounded-full bg-[#EBEBEB] border-transparent focus:bg-white focus:ring-0" placeholder="Experience" value={`Doctor University, 2012`} />
          </label>
          <label className="block mt-3.5">
            <span className="text-gray-800">STR ID</span>
            <input type="text" className="mt-1 block w-full rounded-full bg-[#EBEBEB] border-transparent focus:bg-white focus:ring-0" placeholder="Experience" value={`3521100219138943`} />
          </label>
          <button className="w-full p-2.5 rounded-md mt-7 bg-[#B7CE63] hover:bg-[#A5C13D] shadow-lg">Save Changes</button>
        </div>

        {/* Right */}
        <div className="right text-right">Coming Soon</div>
      </div>
    </div>
  );
};

export default Doctor;
