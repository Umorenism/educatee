import { Content } from "./component/Content";
import { Hero } from "./component/Hero/Hero";
import { Main } from "./component/Main";
import { Navbar } from "./component/Navbar/Navbar";
import { Siderbar } from "./component/Sidebar/Siderbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Siderbar />
      <Main>
        <Content>
          <Hero />
        </Content>
      </Main>
    </div>
  );
};
