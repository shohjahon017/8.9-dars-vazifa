import axios from "axios";
import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const Charts = () => {
  const [chartone, setchartone] = useState([]);

  useEffect(() => {
    axios
      .get("https://trello.vimlc.uz/knowlodge")
      .then((data) => {
        setchartone(data.data.semicharts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getFillColor = (percentage) => {
    if (percentage >= 100) {
      return "blue";
    } else if (percentage >= 80) {
      return "#4caf50";
    } else if (percentage >= 60) {
      return "green";
    } else if (percentage >= 40) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="flex flex-wrap" style={{ marginBottom: "50px" }}>
      {chartone.length > 0 &&
        chartone.map((item, index) => (
          <div
            key={index}
            style={{
              width: "30%",
              height: 198,
              textAlign: "center",
              marginTop: "50px",
              padding: "-0px",
            }}
          >
            <ResponsiveContainer className="mx-auto">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="100%"
                startAngle={180}
                endAngle={0}
                // barSize={10}
                data={[
                  {
                    name: item.label,
                    value: item.percentage,
                    fill: getFillColor(item.percentage),
                  },
                ]}
              >
                <RadialBar minAngle={15} dataKey="value" clockWise />
              </RadialBarChart>
            </ResponsiveContainer>
            <p style={{ marginTop: "-120px" }}>
              {item.percentage}% <br /> {item.label}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Charts;
