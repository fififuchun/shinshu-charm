import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// SidebarContext の型を定義
interface SidebarContextType {
  open: boolean; // open は boolean 型
  setOpen: Dispatch<SetStateAction<boolean>>; // setOpen は Dispatch<SetStateAction<boolean>> 型
}

// createContext の型を明確に指定
const SidebarContext = createContext<SidebarContextType>({
  open: false, // デフォルトの open の値
  setOpen: () => {}, // setOpen のデフォルト値（空の関数）
});

interface SidebarProviderProps {
  children: ReactNode; // children プロパティの型を ReactNode として指定
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [open, setOpen] = useState<boolean>(false); // useState の型を明示的に指定

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => useContext(SidebarContext);
