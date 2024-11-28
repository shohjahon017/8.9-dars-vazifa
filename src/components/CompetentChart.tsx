const competencies = [
  { percentage: 85, label: "Стратегик фикрлаш", color: "#28A264" },
  { percentage: 75, label: "Натижага йуналганлик", color: "#28A264" },
  { percentage: 33, label: "Узгаришларни бошкариш", color: "red" },
  { percentage: 100, label: "Лидерлик", color: "#0956AF" },
  { percentage: 98, label: "Уз-узини ривожлантириш", color: "#28A264" },
  { percentage: 45, label: "Коммуника-тивлик", color: "#F8B324" },
];

const CompetenceChart = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="flex flex-wrap justify-around w-full mb-6">
        {competencies.map((competence, index) => (
          <div key={index} className="flex flex-col items-center mb-4 w-1/3">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center border-4 mb-1`}
              style={{
                borderColor: competence.color,
                backgroundColor: `${competence.color}20`,
              }}
            >
              <span className="text-lg font-bold">
                {competence.percentage}%
              </span>
            </div>
            <span className="text-lg">{competence.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetenceChart;
