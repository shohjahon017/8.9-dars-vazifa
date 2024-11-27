const data = [
  { label: "Photoshop", value: 90 },
  { label: "Premiere", value: 80 },
  { label: "Illustrator", value: 85 },
  { label: "InDesign", value: 75 },
  { label: "After Effects", value: 70 },
];

const maxValue = 100;

const RadarChart = () => {
  const radius = 100;
  const angle = (2 * Math.PI) / data.length;

  return (
    <div className="flex justify-center items-center">
      <svg width="300" height="300">
        <g transform="translate(150, 150)">
          {data.map((_, index) => {
            const x = radius * Math.cos(angle * index - Math.PI / 2);
            const y = radius * Math.sin(angle * index - Math.PI / 2);
            return (
              <line
                key={index}
                x1={0}
                y1={0}
                x2={x}
                y2={y}
                stroke="#00f"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            );
          })}
          {/* Outer polygon */}
          <polygon
            points={data
              .map((item, index) => {
                const x = radius * Math.cos(angle * index - Math.PI / 2);
                const y = radius * Math.sin(angle * index - Math.PI / 2);
                return `${x},${y}`;
              })
              .join(" ")}
            fill="rgba(200, 200, 200, 0.5)"
            stroke="none"
          />
          {/* Inner values */}
          <polygon
            points={data
              .map((item, index) => {
                const x =
                  ((radius * item.value) / maxValue) *
                  Math.cos(angle * index - Math.PI / 2);
                const y =
                  ((radius * item.value) / maxValue) *
                  Math.sin(angle * index - Math.PI / 2);
                return `${x},${y}`;
              })
              .join(" ")}
            fill="none"
            stroke="none"
          />
          {/* Labels */}
          {data.map((item, index) => {
            const x = (radius + 10) * Math.cos(angle * index - Math.PI / 2);
            const y = (radius + 10) * Math.sin(angle * index - Math.PI / 2);
            return (
              <text
                key={item.label}
                x={x}
                y={y}
                textAnchor="middle"
                fontSize="12"
                fill="black"
              >
                {item.label}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

const ChartRadar = () => {
  return (
    <div className="p-4">
      <RadarChart />
    </div>
  );
};

export default ChartRadar;
