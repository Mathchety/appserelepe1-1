import React, { ReactNode } from 'react';

interface ProgressContextData {
  progressValue: number;
  setProgressValue: (value: number) => void;
  setCalorieGoal: (value: number) => void;
}

const ProgressContext = React.createContext<ProgressContextData>({
  progressValue: 0,
  setProgressValue: () => {},
  setCalorieGoal: () => {} // Update the default implementation
});


export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [calorieGoal, setCalorieGoal] = React.useState<number>(5);
  const [progressValue, setProgressValue] = React.useState<number>(0);

  const handleSetCalorieGoal = (value: number) => {
    setCalorieGoal(value);
  };

  const contextValue: ProgressContextData = {
    progressValue,
    setProgressValue,
    setCalorieGoal: handleSetCalorieGoal // Update the implementation to use the value from Metas.tsx
  };

  return (
    <ProgressContext.Provider value={{ progressValue: calorieGoal, setProgressValue: setCalorieGoal, setCalorieGoal }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;