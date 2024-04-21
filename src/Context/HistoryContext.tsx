import React, { createContext, useState } from 'react';

interface HistoryContextData {
  history: any[];
  addToHistory: (item: any) => void;
}

export const HistoryContext = createContext<HistoryContextData>({
  history: [],
  addToHistory: () => {},
});

export const HistoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<any[]>([]);

  const addToHistory = (item: any) => {
    setHistory(currentHistory => {
      const newHistory = [item, ...currentHistory];
      return newHistory;
    });
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};