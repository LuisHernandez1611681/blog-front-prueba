import { createContext, useContext, useEffect, useState } from "react";
import { NetworkStatusProviderProps } from '../interfaces/Interfaces';

const NetworkStatusContext = createContext(true);

export const NetworkStatusProvider = ({children}: NetworkStatusProviderProps) => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    function changeStatus() {
      setStatus(navigator.onLine);
    }
    window.addEventListener('online', changeStatus);
    window.addEventListener('offline', changeStatus);

    return () => {
      window.removeEventListener('online', changeStatus);
      window.removeEventListener('offline', changeStatus);
    }
  }, []);

  return (
    <NetworkStatusContext.Provider value={status}>
      {children}
    </NetworkStatusContext.Provider>
  )
}

export const useNetworkStatus = () => {
  const status = useContext(NetworkStatusContext);
  return status ? "Online" : "Offline";
}