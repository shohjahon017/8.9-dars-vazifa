import axios from "axios";
import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

interface SemiChart {
  label: string;
  percentage: number;
}

const Charts: React.FC = () => {
  const [chartone, setChartone] = useState<SemiChart[]>([]);

  useEffect(() => {
    axios
      .get("https://trello.vimlc.uz/knowlodge")
      .then((data) => {
        setChartone(data.data.semicharts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getFillColor = (percentage: number): string => {
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
              padding: "0px",
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
                data={[
                  {
                    name: item.label,
                    value: item.percentage,
                    fill: getFillColor(item.percentage),
                  },
                ]}
              >
                <RadialBar minAngle={5} dataKey="value" clockWise />
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
