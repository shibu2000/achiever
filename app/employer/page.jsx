"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const EmployerHome = () => {
  const data = [
    {
      year: "2020",
      no_of_post: 4000,
      no_of_application: 2400,
      no_of_hired: 2400,
    },
    {
      year: "2021",
      no_of_post: 3000,
      no_of_application: 1398,
      no_of_hired: 2210,
    },
    {
      year: "2022",
      no_of_post: 2000,
      no_of_application: 5000,
      no_of_hired: 2290,
    },
    {
      year: "2023",
      no_of_post: 2780,
      no_of_application: 3908,
      no_of_hired: 2000,
    },
    {
      year: "2024",
      no_of_post: 1890,
      no_of_application: 4800,
      no_of_hired: 2181,
    },
  ];
  return (
    <div className="container flex flex-col items-center p-5 mx-auto space-y-5">
      <h1 className="w-4/5 text-center font-anton-regular text-3xl _textGold mt-5">
        Records of last 5 years
      </h1>
      <div
        className="w-4/5 flex items-center justify-center p-5"
        style={{ height: "70dvh" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip
              contentStyle={{
                background: "#32364e",
                border: "none",
                borderRadius: "0.5rem",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="no_of_post" stroke="#8884d8" />
            <Line
              type="monotone"
              dataKey="no_of_application"
              stroke="#82ca9d"
            />
            <Line
              type="monotone"
              dataKey="no_of_hired"
              stroke="#d3b18c"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmployerHome;
