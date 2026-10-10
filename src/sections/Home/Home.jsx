import Hero from "../Hero/Hero";
import Bcontent1 from "./Bcontent1";
import Bcontent2 from "./Bcontent2"
import Bcontent3 from "./Bcontent3";
// import BContentdiffen from "./BContentdiffen";
import Bcontentmeals from "./Bcontentmeals";
import Bcontentsidedish from "./Bcontentsidedish";
// import Bcontentcrab from "./Bcontentcrab";
import Bcontentice from "./Bcontentice";
import Footer from "../Footer/Footer";
import Testimonial from "./Testimonial1";

export default function Home({setOrderOpen}) {
  return (
    <>
      <Hero setOrderOpen={setOrderOpen}/>
      <Bcontent1/>
      <Bcontent2/>
      <Bcontent3 />
      {/* <BContentdiffen /> */}
      <Bcontentmeals />
      <Bcontentsidedish />
      {/* <Bcontentcrab /> */}
      <Bcontentice />
      <Testimonial/>
      <Footer />
    </>
  );
}