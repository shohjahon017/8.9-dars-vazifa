const data = [
  { label: "Топширикларга йуналганлик", percentage: 95 },
  { label: "Фаол ижтимоий муносабатлар", percentage: 75 },
  { label: "Уз устида ишлаш", percentage: 86 },
  { label: "Муаммоли вазиятга йуналганлик", percentage: 86 },
];

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="ml-16 mt-[42px] items-center  w-[413px]">
      <div className=" text-gray-700 text-[16px] pb-2">{label}</div>
      <div className=" bg-gray-200 h-4 rounded-full flex ">
        <div
          className="bg-[#0956AF] h-full rounded-full "
          style={{ width: `${percentage}%` }}
        />{" "}
        <div className="ml-5 text-gray-700">{percentage}%</div>
      </div>{" "}
    </div>
  );
};

const ChartProgressBarRight = () => {
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

export default ChartProgressBarRight;
