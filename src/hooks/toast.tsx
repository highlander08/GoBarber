import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';
/** definir o formato do estado */
export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, description, title }: Omit<ToastMessage, 'id'>) => {
      /** criando um id unico */
      const id = uuid();
      /** variavel toast contendo as proprieades id até description */
      const toast = {
        id,
        description,
        title,
        type,
      };
      /** copiando os toast, e adiciona o novo no final */
      setMessages((state) => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    /** retorna todas as mensagens que ja tenho armazenada no estado menos a que tem o id que foi passado como parametro para o useCalback */
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast hust be used within a ToastProvider');
  }
  return context;
}

export { ToastProvider, useToast };
