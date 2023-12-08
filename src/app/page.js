import MainAbout from "@/components/mainAbout";
import MainHero from "@/components/mainHero";
import MainService from "@/components/mainService";

export default function Home() {
  return (
    <div>
      <MainHero></MainHero>
      <MainService></MainService>
      <MainAbout></MainAbout>
    </div>
  );
}
