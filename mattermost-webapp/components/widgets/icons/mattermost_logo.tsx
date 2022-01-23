// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {CSSProperties} from 'react';
import {useIntl} from 'react-intl';

export default function MattermostLogo(props: React.HTMLAttributes<HTMLSpanElement>) {
    const {formatMessage} = useIntl();
    return (
        <span {...props}>
            <svg
                version='1.1'
                x='0px'
                y='0px'
                viewBox='0 0 500 500'
                enableBackground='new 0 0 500 500'
                role='img'
                aria-label={formatMessage({id: 'generic_icons.mattermost', defaultMessage: 'Mattermost Logo'})}
            >
            <path d='M439.66,184.63l-2.26-2.26C421.57-42.95,74.16-44.9,59.67,185.08,1.58,195.47,18.19,304.81,70.53,314.46c35.9,97.41,51.83,186.61,177.1,170.15,120.54,21.84,150.11-112.25,158.56-126.72,3.08-4.29,16.83-38.3,21.71-43.43C481.48,306.64,499.28,195.52,439.66,184.63Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='9'/><path d='M400.08,87.46c-6.55-10.23-13.8-20.07-22.58-28.53-18.13-17.48-43.11-24.54-65.85-34.06a3.92,3.92,0,0,1-2.59-.44c-3.09-1.62-6.75-2.1-10-3.44a62.55,62.55,0,0,0-11-3.55c-1.92-.42-3.85-.76-5.79-1.08a609.83,609.83,0,0,0-100.22,4.57,3.42,3.42,0,0,1-2.68,2.23c-11.7,2.52-22,8.07-31.79,14.8a3.82,3.82,0,0,1-1.72,2c-4.7,2.8-9.33,5.8-13.88,8.95a3.81,3.81,0,0,1-1.85,3.1c-4.93,3.17-10.2,6-14.55,10-4.51,4.1-7.08,9.36-10,14.6C99.79,87,89,94.52,85.21,106c65.43,39,257.18,35,323.73-4.75C406.36,96.46,403,92,400.08,87.46Z' transform='translate(-18.56 -8.49)' fill='#c6c6c6'/><path d='M437.4,182.37C421.57-42.95,74.16-44.9,59.67,185.08' transform='translate(-18.56 -8.49)' fill='none' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='9'/><path d='M110.33,278.72q-29.4-20.81-29.4-51.12,0-26.23,14.48-26.23,7.68,0,29.4,11.3v63.79c13.54,8.37,28,5.42,41.62,5.88V227.6a66,66,0,0,1,9.95,1.36v52q9.5-1.35,19.91-7.69.89-6.32.9-36.64,30.3,13.13,34.38,15.38C218.24,303.36,148.33,308.66,110.33,278.72Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='9'/><path d='M198.1,393.17H180.45l-1.81-1.81V370.55c6.82-6.2,12.91-6,19.46.46Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='6'/><path d='M218,414c-4.84,8.9-11.73,9-19.45.45V393.62H218Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='6'/><path d='M237.9,371v22.16H219.81C214,379,221.09,355.3,237.9,371Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='6'/><path d='M257.36,415.79c-6.6,8.13-16.93,4.91-19.46-3.62V393.62h19.46Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='6'/><path d='M277.26,393.17H259.62c-4.93-14.07-1.11-35.16,17.64-24Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='6'/><path d='M297.17,415.79c-6.21,7.81-17.9,5.36-19.46-3.62V393.62h19.46Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='6'/><path d='M318.43,393.17H299c-4.14-8.25-1.76-28.81,9-27.14,3.24-.13,10.81,4.07,10.41,8.14Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='6'/><path d='M292.19,287.32Q267.31,274.21,265.05,252c8-7.86,17.4-9.07,33.47-14q-.47,12.68.45,37.09,13.57,7.25,17.2,7.24h24.88V223.08q9.49-4.07,10.4-4.52V281q14.93-4.51,20.36-7.69V210.87c33.32-10.74,41.66-18.57,43.88,15.83C415.67,282.31,338.3,314.47,292.19,287.32Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='9'/><path d='M256.48,182.73c.39-.13.43-.88.35-1.66a2.24,2.24,0,0,0-2.3-2,53.08,53.08,0,0,1-5.31,0c-.08-6.06-.9-10.54-3.74-8.62.47.36.3,3.87,0,8.4-5.17-.2-9.78.28-7.74,3.94h7.52c-.5,9.56-.73,20.73,3.47,17.89-.77-.6.21-9.74.42-17.89C249.19,182.73,254.76,183.27,256.48,182.73Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='3'/><path d='M402.43,309.12c4.16-2.17.05-8.45-3.38-9.84a.78.78,0,0,0-1,.51c-1.06,3.69-2,10.1,2.61,9.82.3,0,.59.22.82,0a.54.54,0,0,1,.33-.13C402.06,309.5,402.19,309.25,402.43,309.12Z' transform='translate(-18.56 -8.49)' fill='#fff' stroke='#1d1d1b' stroke-miterlimit='10' stroke-width='2' fill-rule='evenodd'/>
            </svg>
        </span>
    );
}

const style: CSSProperties = {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
};
