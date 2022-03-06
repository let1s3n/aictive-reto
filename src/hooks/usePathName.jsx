import { useEffect } from "react";
import { useLocation } from 'react-router-dom'

const usePathname = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location])
  return location.pathname;
}
export default usePathname;