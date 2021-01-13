import styles from './index.module.scss';
import { Section, Title } from 'src/components'
import { ToDoList } from 'src/components/sandbox'

export interface SandboxProps {
  visible: boolean;
}

export const Sandbox: React.FC<SandboxProps> = (props) => {
  const { visible } = props;
  
  return (
    visible &&
    <Section id="Sandbox">
      <div className={styles.Projects}>
        <Title 
          size={5}
          spacing={4}
          weight="400"
        >
          Sandbox
        </Title>
        <div className={styles.Projects_project}>
          <ToDoList />
        </div>
      </div>
    </Section>
  )
}
