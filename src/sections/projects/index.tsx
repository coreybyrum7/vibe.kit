// import { FaBeer } from '';
import styles from './index.module.scss';
import { Section, Title } from 'src/components'

export interface ProjectProps {
  visible: boolean;
}

export const Projects: React.FC<ProjectProps> = (props) => {
  const { visible } = props;

  return (
    visible &&
    <Section id="projects">
      <div className={styles.Projects}>
        <Title 
          size={5}
        >
          Projects Section
        </Title>
      </div>
    </Section>
  )
}
