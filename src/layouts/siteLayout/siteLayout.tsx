import cn from 'classnames';
import { FunctionComponent, ReactNode } from 'react';
import styles from './siteLayout.module.scss';

// Props.
interface SiteLayoutProps {
  children: ReactNode;
}

/**
 * Generic site layout for authenticated pages.
 *
 * @param children - Page to be displayed within the layout.
 *
 * @returns The page wrapped in the layout.
 */
const SiteLayout: FunctionComponent<SiteLayoutProps> = ({ children }): JSX.Element => (
  <div className={cn(['container', styles.main])}>
    <div className={cn(['container', styles.mainContainer])}>
      <div className='row'>
        <main className={cn(['col-12', styles.mainContainerContent])}>
          <div className={cn(['row', styles.mainContainerContentRow])}>{children}</div>
        </main>
      </div>
    </div>
  </div>
);

// Export.
export { SiteLayout };
