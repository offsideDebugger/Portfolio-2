import { NameBrief } from "./components/nameBrief";
import { Container } from "./components/container";
import { NameDesc } from "./components/nameDesc";
import { Desc } from "./components/desc";
export default function Home() {
  return (
    <Container>
          <div className="flex flex-col md:flex-row mt-8 md:mt-12 gap-4 md:gap-0">
            <div className="flex justify-center md:justify-start">
              <NameBrief />
            </div>
            <div className="flex flex-col md:ml-2 md:left-1 md:mt-8">
              <NameDesc />
            </div>
      </div>
      <div className="flex mt-4">
        <Desc />
      </div>
    </Container>
  );
}
