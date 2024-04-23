import React from 'react';

interface ProgressContextData {
  progressValue: number;
  setProgressValue: (value: number) => void;
}

const ProgressContext = React.createContext<ProgressContextData>({
  progressValue: 0,
  setProgressValue: () => {},
});

export default ProgressContext;