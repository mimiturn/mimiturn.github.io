import About from "@/components/About";
import Award from "@/components/Award";
import Breadcrumb from "@/components/Breadcrumb";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import PetrixLayout from "@/layout/PetrixLayout";
const page = () => {
  return (
    <PetrixLayout>
      <Breadcrumb text={"about me"} />
      <About withoutMarquee={true} />
      <Skills />
      <Award />
      <Experience />
    </PetrixLayout>
  );
};
export default page;
