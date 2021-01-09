import clsx from 'clsx';
import styles from './index.module.scss';
import React from 'react';

export interface HeroVideoProps {
    className?: string;
    videoSrc: string;
    isLooping: boolean;
    autoPlay: boolean;
}

export const HeroVideo: React.FC<HeroVideoProps> = props => {
    const { className, videoSrc, isLooping, autoPlay, children } = props;
    const videoRef = React.useRef(null);
    return (
        <div className={clsx(
            styles.HeroVideo,
            styles[`HeroVideo__${className}`],
        )}>
            <video 
                loop={isLooping}
                src={videoSrc}
                autoPlay={autoPlay}
                muted={true}
                playsInline={true}
            />
            {children}
        </div>
    );
};
