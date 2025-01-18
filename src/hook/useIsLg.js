import { useMediaQuery } from "react-responsive";

const useIsLgScreen = () => useMediaQuery({ query: "(min-width: 1024px)" });

export default useIsLgScreen;