import clsx from 'clsx';
import styles from './index.module.scss';
import React from 'react';

export interface HeroBannerProps {
    className?: string;
    imageSrc: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = props => {
    const { className, imageSrc, children } = props;
    const videoRef = React.useRef(null);
    return (
        <div className={clsx(
            styles.HeroBanner,
            styles[`HeroBanner__${className}`],
        )}>
            <video 
                src={imageSrc}
            />
            {children}
        </div>
    );
};
