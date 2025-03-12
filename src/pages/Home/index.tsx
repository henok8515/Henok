import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <h1>Projects</h1>
      <hr />
      <ContentBlock
        direction="left"
        title={AboutContent[0].title}
        content={AboutContent[0].text}
        section={AboutContent[0].section}
        icon="m.png"
        id="about"
      />
      <hr />
      <ContentBlock
        direction="left"
        title={AboutContent[1].title}
        content={AboutContent[1].text}
        section={AboutContent[1].section}
        icon="f.png"
        id="about"
      />
      <h1>Testiomonials</h1>
      <hr />
      <ContentBlock
        direction="right"
        title={MissionContent[0].title}
        content={MissionContent[0].text}
        icon="Abity.png"
        id="mission"
      />
      <hr />
      <ContentBlock
        direction="right"
        title={MissionContent[1].title}
        content={MissionContent[1].text}
        icon="Ermi.png"
        id="mission"
      />{" "}
      <hr />
      <ContentBlock
        direction="right"
        title={MissionContent[2].title}
        content={MissionContent[2].text}
        icon="Nt.png"
        id="mission"
      />
      {/* <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
