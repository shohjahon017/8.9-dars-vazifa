import React from "react";

interface ProgressBarData {
  label: string;
  percentage: number;
}

const data: ProgressBarData[] = [
  { label: "Мақсадга интилувчанлик", percentage: 90 },
  { label: "Эмоционал интеллект", percentage: 95 },
  { label: "Креативлик", percentage: 75 },
  { label: "Ходимларга йуналганлик", percentage: 86 },
];

interface ProgressBarProps {
  label: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage }) => {
  return (
    <div className="ml-16 mt-[42px] items-center  w-[413px]">
      <div className="text-gray-700 text-[16px] pb-2">{label}</div>
      <div className="bg-gray-200 h-4 rounded-full flex">
        <div
          className="bg-[#0956AF] h-full rounded-full"
          style={{ width: `${percentage}%` }}
        />
        <div className="ml-5 text-gray-700">{percentage}%</div>
      </div>
    </div>
  );
};

const ChartProgressBar: React.FC = () => {
  return (
    <div>
      {data.map((item) => (
        <ProgressBar
          key={item.label}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </div>
  );
};

export default ChartProgressBar;
