import Banner from "@/components/pages/home/Banner";
import Features from "@/components/pages/home/Features";
import Hosting from "@/components/pages/home/Hosting";
import Products from "@/components/pages/home/Products";
import Services from "@/components/pages/home/Services";
import Main from "@/components/site-ui/Main";

const HomePage = () => {
  return (
    <Main>
      <Banner />

      <Products />

      <Hosting />

      <Services />

      <Features />
    </Main>
  );
};

export default HomePage;
