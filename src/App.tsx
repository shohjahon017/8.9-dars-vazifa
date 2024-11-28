import { useEffect, useState } from "react";
import Charts from "./components/LineChart";
import axios from "axios";
import Header from "./components/Header";
import Example from "./components/ProgressCircle";
import ChartProgress from "./components/Progress";
import ChartLineProg from "./components/ChartLines";
import ChartBarProg from "./components/ChartBar";
import ChartProgressBarRight from "./components/ChartBarRight";
import ChartRadarProg from "./components/ChartRadar";
import CompetenceChart from "./components/CompetentChart";

interface PersonalInfo {
  firstName: string;
  imageUrl: string;
  lastName: string;
  birthday: string;
  address: string;
  height: string;
  weight: string;
  index: number;
  position: string;
  candidate: string;
}

interface TestData {
  constitution?: number;
  ict?: number;
  history?: number;
  logic?: number;
  thinking?: number;
  categories?: Array<{
    name: string;
    score: number;
  }>;
}

const App: React.FC = () => {
  const [data, setData] = useState<PersonalInfo | null>(null);
  const [testData, setTestData] = useState<TestData | null>(null);

  useEffect(() => {
    axios
      .get("https://trello.vimlc.uz/knowlodge")
      .then((response) => {
        setTestData(response.data);
      })
      .catch((err) => console.error(err));

    axios
      .get("https://trello.vimlc.uz/get-personal-info")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const radarData = {
    labels: [
      "Конституция",
      "АТТ",
      "Ўзбекистон тарихи",
      "Мантиқий тафаккур",
      "Танқидий фикрлаш",
    ],
    datasets: [
      {
        label: "Тест натижалари",
        data: [
          testData?.constitution || 0,
          testData?.ict || 0,
          testData?.history || 0,
          testData?.logic || 0,
          testData?.thinking || 0,
        ],
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1,
      },
    ],
  };
  console.log(radarData);

  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex items-center gap-8 mx-[64px] mt-[35px]">
        {data && (
          <>
            <img src={data.imageUrl} alt="Profile" />
            <div className="flex gap-[247px]">
              <div>
                <div className="mb-[30px]">
                  <h3 className="text-3xl font-bold">
                    {data.firstName} {data.lastName}
                  </h3>
                  <div className="mt-[30px]">
                    <h5 className="text-black">
                      <span className="text-[#495057]">Туғилган сана:</span>{" "}
                      {data.birthday}
                    </h5>
                    <h5 className="text-black">
                      <span className="text-[#495057]">Туғилган жойи:</span>{" "}
                      {data.address}
                    </h5>
                  </div>
                </div>
                <div className="flex gap-3 mt-[38px]">
                  <div>
                    <span className="font-normal">Бойи:</span>
                    <p className="font-bold">{data.height}</p>
                  </div>
                  <div>
                    <span className="font-normal">Вазни:</span>
                    <p className="font-bold">{data.weight}</p>
                  </div>
                  <div>
                    <span className="font-normal">Индекс:</span>
                    <p className="font-bold">{data.index}</p>
                  </div>
                </div>
              </div>
              <div className="font-normal text-[20px]">
                <div className="mb-4">
                  <span className="text-gray-600">Лавозими:</span>
                  <p>{data.position}</p>
                </div>
                <div>
                  <span className="text-gray-600">Номзоди:</span>
                  <p>{data.candidate}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-[10px] ml-16">
          <div className="w-[13px] h-[43px] bg-[#0956AF]"></div>
          <h3 className="text-4xl font-semibold ">Билим тести</h3>
          <div className="h-1 bg-[#DEE2E6] w-[1050px]"></div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {testData?.categories &&
            testData.categories.map((category, index) => (
              <div key={index} className="text-center">
                <h5 className="text-lg font-semibold">{category.name}</h5>
                <div className="relative">
                  <div
                    className="absolute inset-0 flex justify-center items-center text-xl font-bold"
                    style={{ color: category.score < 50 ? "red" : "green" }}
                  >
                    {category.score}%
                  </div>

                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex ml-16 items-center">
        <div className="w-[664px]">
          <Charts />
        </div>
        <div>
          <Example />
        </div>
        <div className="flex flex-col">
          <div className="w-[333px]">
            <ChartLineProg />
          </div>
          <div>
            <ChartProgress />
          </div>
        </div>
        <div className="ml-6">
          <img className="h-[322px]" src="/graph.png" alt="Graph" />
        </div>
      </div>
      <div className="mt-8 flex items-center gap-[10px] ml-16">
        <div className="w-[13px] h-[43px] bg-[#0956AF]"></div>
        <h4 className="font-semibold text-4xl">Шахсий ва касбий хусусиятлар</h4>
        <div className="h-1 bg-[#DEE2E6] w-[706px]"></div>
      </div>
      <div className="flex gap-6 items-center">
        <div>
          <ChartBarProg />
        </div>
        <div className="h-[218px]">
          <ChartRadarProg />
        </div>
        <div>
          <ChartProgressBarRight />
        </div>
      </div>
      <div className="ml-16">
        <div className="flex items-center gap-[10px] mt-20">
          <div className="w-[13px] h-[43px] bg-[#0956AF]"></div>
          <h1 className="text-3xl font-bold mb-4 text-black">
            Психологик диагностика
          </h1>
          <div className="h-1 bg-[#DEE2E6] w-[823px]"></div>
        </div>
        <p className="text-gray-800 text-2xl leading-relaxed gap-6 flex max-w-[1204px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </p>
      </div>
      <div className="ml-16 items-center">
        <div className="flex items-center gap-[10px] mt-20">
          <div className="w-[13px] h-[43px] bg-[#0956AF]"></div>
          <h1 className="text-3xl font-bold mb-4 text-black">
            Компетенцияларнинг намоён булиши
          </h1>
          <div className="h-1 bg-[#DEE2E6] w-[593px]"></div>
        </div>
        <div className="flex mt-8">
          <CompetenceChart />
          <img className="mr-16" src="/qr.png" alt="QR" />
        </div>
        <p className="flex justify-center mb-10">Argos.uz 2024</p>
      </div>
    </div>
  );
};

export default App;
