// import { FaBeer } from '';
import styles from './index.module.scss';
import { Section } from 'src/components'

export interface ProjetProps {
  visible: boolean;
}

export const Projects: React.FC<ProjetProps> = (props) => {
  const { visible } = props;

  return (
    visible &&
    <Section id="projects">
      <div className={styles.Projects}>
        Projects Section
      </div>
    </Section>
  )
}
