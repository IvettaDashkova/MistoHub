import { About } from './About';
import { HowItWork } from './HowItWork';
import { Building } from './Building';
import { AboutSection } from './AboutProject.styled';

const AboutProject = () => {
  return (
    <AboutSection id="about">
        <About />
        <HowItWork />
        <Building />
    </AboutSection>
  );
};

export default AboutProject;
