import styles from './index.module.scss';
import { Section } from 'src/components'

export interface SandboxProps {
  visible: boolean;
}

export const Sandbox: React.FC<SandboxProps> = (props) => {
  const { visible } = props;
  
  return (
    visible &&
    <Section className={styles.Sandbox} id="Sandbox">
      Sandbox section
    </Section>
  )
}
