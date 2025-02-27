import Step from "./Step";
import { StepType } from "../../types/StepType";

export const Steps = ({ steps }: { steps: StepType[] }) => {
  return <>{steps && steps.map((obj) => <Step step={obj} />)}</>;
};

export default Steps;
