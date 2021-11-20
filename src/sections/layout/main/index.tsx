import styles from './index.module.scss';

import { Grid, Col } from 'src/components';
import { SideNav, Body } from 'src/sections';

export const Main = ({ setActiveSection, activeSection }) => {

  return (
    <div className={styles.Main}>
      <Grid>
        <Col
          mobileCols={0}
          tabletCols={2}
          desktopCols={2}
        >
          <SideNav setActiveSection={setActiveSection} />
        </Col>
        <Col
          mobileCols={4}
          tabletCols={4}
          desktopCols={10}
        >
          <Body activeSection={activeSection} />
        </Col>
      </Grid>
    </div> 
  )
}
