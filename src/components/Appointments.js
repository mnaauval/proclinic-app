import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const people = [
  {
    name: "Liam",
    email: "liam@example.com",
    date: "10 Feb 2018",
    visit: "9:15 - 9:45",
    number: "0126595743",
    doctor: "Dr. Benjamin",
    injury: "mumpus",
  },
  {
    name: "Emma",
    email: "enma@example.com",
    date: "5 Dec 2018",
    visit: "9:00 - 9:30",
    number: "0126595743",
    doctor: "Dr. Noah",
    injury: "flu",
  },
];
const header = ["Name", "Email", "Date", "Visit", "Number", "Doctor", "Injury / Condition", "Action"];

const Appointments = () => {
  return (
    <div className="lg:w-3/4 w-full my-0 mx-auto py-2.5 xl:px-0 px-5 mt-6 overflow-x-auto ">
      <h1 className="text-[44px] font-bold">Appointments</h1>
      <table className="mt-8 mx-1.5">
        <thead className="bg-[#E8E8E8] ">
          <tr>
            {header.map((item) => (
              <th key={item} scope="col" className="px-6 py-3 text-left text-gray-900 text-sm">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-[#F9F9F9] ">
          {people.map((person) => (
            <tr key={person.email} className="border-y-2 border-white">
              <td className="whitespace-nowrap py-3.5 px-6">
                <span className="text-sm font-medium text-gray-900">{person.name}</span>
              </td>
              <td className="whitespace-nowrap py-3.5 px-6">
                <div className="flex items-center">
                  <span className="text-lg font-medium text-[#336CFB] mr-1.5">@</span>
                  <span className="text-sm font-medium text-[#336CFB]">{person.email}</span>
                </div>
              </td>
              <td className="whitespace-nowrap py-3.5 px-6">
                <span className="text-sm font-medium text-gray-900">{person.date}</span>
              </td>
              <td className="whitespace-nowrap py-3.5 px-6">
                <span className="text-sm font-medium text-gray-900">{person.visit}</span>
              </td>
              <td className="whitespace-nowrap py-3.5 px-6">
                <div className="flex items-center">
                  <PhoneIphoneIcon className="text-[#336CFB] mr-1.5" />
                  <span className="text-sm font-medium text-[#336CFB]">{person.number}</span>
                </div>
              </td>
              <td className="whitespace-nowrap py-3.5 px-6">
                <span className="text-sm font-medium text-gray-900">{person.doctor}</span>
              </td>
              <td className="whitespace-nowrap py-3.5 px-6">
                <span className="text-sm font-medium text-gray-900">{person.injury}</span>
              </td>
              <td className="whitespace-nowrap py-3.5 px-6">
                <div className="flex items-center">
                  <button className="w-9 h-9 rounded-full bg-[#64B5F6] hover:bg-[#349EF3] mx-1 drop-shadow-xl text-center">
                    <EditOutlinedIcon className="text-gray-900 " />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-[#ED5564] hover:bg-[#E8273A] mx-1 drop-shadow-xl text-center">
                    <DeleteOutlineOutlinedIcon className="text-white" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
