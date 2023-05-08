import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/StoreContext";


const About = () => {
  // const { myName } = useProductContext();

  const data = {
    name: "e - कल्याणम्",
  };

  return (
    <>
      {/* {myName} */}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
