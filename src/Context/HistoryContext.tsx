import React, { createContext, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface HistoryContextData {
  history: any[];
  addToHistory: (item: any) => void;
  removeFromHistory: (id: string) => void; // Adicionado
  setHistory: React.Dispatch<React.SetStateAction<any[]>>; // Modificado
}

export const HistoryContext = createContext<HistoryContextData>({
  history: [],
  addToHistory: () => { },
  removeFromHistory: () => { }, // Adicionado
  setHistory: () => { },
});

export const HistoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<any[]>([]);

  const addToHistory = (item: any) => {
    setHistory(currentHistory => {
      const newItem = {...item, timestamp: new Date() };
      const newHistory = [newItem,...currentHistory];
      return newHistory;
    });
  };

  const removeFromHistory = (id: string) => {
    setHistory(currentHistory => currentHistory.filter(item => item.id!== id));
  };
  
  return (
    <HistoryContext.Provider value={{ history, addToHistory, removeFromHistory, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};