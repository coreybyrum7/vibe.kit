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
    <Section id="sandbox" className="Sandbox">
      <h2>Sandbox</h2>
    </Section>
  )
}
