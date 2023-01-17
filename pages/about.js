import Main from "../components/Layout/Main";
import AboutHero from "./AboutHero";
import AboutSubscribeSection from "./AboutSubscribeSection";
import AboutTeam from "./AboutTeam";


const About = () => {
    return <Main title="About - PluggedIn">

        <AboutHero />
        <AboutTeam />
        <AboutSubscribeSection/>
        
    </Main>;
};

export default About;
