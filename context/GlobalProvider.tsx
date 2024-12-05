import { getCurrentUser } from "@/lib/appwrite/users.collection";
import { handleError } from "@/utils/handleError";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type User = {
  email: string;
  username: string;
  password: string;
};

type GlobalContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  user: User | null;
  setUser: (value: User | null) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const GlobalContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
  isLoading: true,
  setIsLoading: () => {},
} as GlobalContextType);

export const useGlobalContext = () => useContext(GlobalContext);

/**
 * Should wrap every screen in our application
 */
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await getCurrentUser();

        console.log("result", result);

        if (!result) {
          setIsLoggedIn(false);
          setUser(null);
        }

        setIsLoggedIn(true);
        setUser(result);
      } catch (error) {
        handleError(error);
      } finally {
        () => {
          setIsLoading(false);
        };
      }
    };

    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
