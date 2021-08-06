import { useMediaQuery } from "react-responsive";
import HomeDesktop from "./Screens/HomeDesktop";

function Home() {
  //Responsive rules
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      {isDesktopOrLaptop ? (
        <HomeDesktop />
      ) : isBigScreen ? (
        "Big screen"
      ) : isTabletOrMobile ? (
        "Table/mobile"
      ) : (
        "Other screen"
      )}
    </div>
  );
}

export default Home;
