import { NameBrief } from "./components/nameBrief";
import { Container } from "./components/container";
import { NameDesc } from "./components/nameDesc";
import { Desc } from "./components/desc";
export default function Home() {
  return (
    <Container>
          <div className="flex mt-12">
            <div >
              <NameBrief />
            </div>
            <div className="flex flex-col ml-2 left-1 mt-8">
              <NameDesc />
            </div>
      </div>
      <div className="flex mt-4">
        <Desc />
      </div>
    </Container>
  );
}
