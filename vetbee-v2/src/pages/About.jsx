
import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const AboutWrapper = styled.div`
  text-align: center;
  padding: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
`;

const AnimatedText = styled.span`
  animation: ${pulseAnimation} 2s linear infinite;
  color: ${(props) => (props.highlighted ? 'green' : 'inherit')};
  display: inline-block; /* Add this line to ensure proper rendering of inline-block elements */
`;

const About = () => {
  return (
    <AboutWrapper>
      <Heading>ABOUT US</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in sem
        vitae lectus aliquam consequat. Sed eu elit justo. Integer euismod
        sagittis ligula, nec vestibulum nulla facilisis eget.{' '}
        <AnimatedText highlighted>Pamatyti HOVER!</AnimatedText>
      </Paragraph>
    </AboutWrapper>
  );
};

export default About;