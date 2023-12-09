import MainAbout from "@/components/mainAbout";
import MainHero from "@/components/mainHero";
import MainService from "@/components/mainService";
import MainTagline from "@/components/mainTagline";
import MainTeam from "@/components/mainTeam";
import MainTestimoni from "@/components/mainTestimoni";

export default function Home() {
  return (
    <div>
      <MainAbout></MainAbout>
      <MainTeam></MainTeam>
      <MainTagline></MainTagline>
      <MainTestimoni></MainTestimoni>
    </div>
  );
}
