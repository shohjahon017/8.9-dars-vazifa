import styled from "styled-components";

interface ProgressBarProps {
  progress: number;
}

const ProgressContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBar = styled.div<ProgressBarProps>`
  height: 30px;
  width: ${(props) => props.progress}%;
  background-color: #4caf50;
  text-align: center;
  line-height: 30px;
  color: white;
`;

const ProgressText = styled.div`
  font-size: 24px;
  margin: 10px 0;
  text-align: center;
`;

interface ProgressComponentProps {
  progress: number;
}

const ProgressComponent: React.FC<ProgressComponentProps> = ({ progress }) => {
  return (
    <div>
      <ProgressText>{progress}%</ProgressText>
      <ProgressContainer>
        <ProgressBar progress={progress}>{progress}%</ProgressBar>
      </ProgressContainer>
      <ProgressText>Умумий натижа</ProgressText>
    </div>
  );
};

const ChartProgress: React.FC = () => {
  return <ProgressComponent progress={78} />;
};

export default ChartProgress;
