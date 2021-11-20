import styles from './index.module.scss';
import { Section, HeroVideo, Grid, Title, Subtitle } from 'src/components'

export interface WelcomeProps {
  visible: boolean;
}

export const Welcome: React.FC<WelcomeProps> = (props) => {
  const { visible } = props;

  return (
    visible &&
    <Section id="welcome" className="Welcome">
      <h2>Welcome</h2>
    </Section>
  )
}
