import Main from "../components/Layout/Main";
import AboutHero from "../components/About/AboutHero";
import AboutSubscribe from "../components/About/AboutSubscribe";
import AboutTeam from "../components/About/AboutTeam";

const About = () => {
    return (
        <Main title="About - PluggedIn" className="container">
            <AboutHero />
            <AboutTeam />
            <AboutSubscribe />
        </Main>
    );
};

export default About;
