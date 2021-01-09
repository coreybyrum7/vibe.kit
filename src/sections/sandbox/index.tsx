import styles from './index.module.scss';
import { Section } from 'src/components'

export interface SandboxProps {
  isVisible: boolean;
}

export const Sandbox: React.FC<SandboxProps> = (props) => {
  const { isVisible } = props;
  
  return (
    isVisible &&
    <Section className={styles.Sandbox} id="Sandbox">
      Sandbox section
    </Section>
  )
}
