import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface GlobalContextProps {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;

  showRoleModal: boolean;
  setShowRoleModal: React.Dispatch<React.SetStateAction<boolean>>;

  userRole: string;
  setUserRole: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [showRoleModal, setShowRoleModal] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ sidebar, setSidebar, showRoleModal, setShowRoleModal, userRole, setUserRole }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
