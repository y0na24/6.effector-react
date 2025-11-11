import { createContext } from "react";
import { useContext, type Context } from "react";

export const useStrictContext = <T>(context: Context<T | null>): T => {
  const value = useContext(context);

  if (value === null) {
    throw new Error("Пустое значение контекста");
  }

  return value;
};

export const createStrictContext = <T>() => createContext<T | null>(null);

export const createDI = <T>() => {
  const injector = createStrictContext<T>();
  const useDI = () => useStrictContext<T>(injector);

  return { Injector: injector.Provider, useDI };
};
