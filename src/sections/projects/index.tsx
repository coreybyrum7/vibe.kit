// import { FaBeer } from '';
import styles from './index.module.scss';
import { Section } from 'src/components'

export interface ProjetProps {
  isVisible: boolean;
}

export const Projects: React.FC<ProjetProps> = (props) => {
  const { isVisible } = props;

  return (
    isVisible &&
    <Section id="projects">
      <div className={styles.Projects}>
        Projects Section
      </div>
    </Section>
  )
}
