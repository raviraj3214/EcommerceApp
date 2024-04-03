import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function IconToy(props) {
  const { width, height, fill } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 36}
      height={height ? height : 36}
      viewBox="0 0 36 36"
      {...props}
    >
      <Path
        d="M18 2C9.72 2 3 8.72 3 17c0 6.51 4.39 11.99 10.39 13.64.36.09.73.36.88.71.16.37.09.8-.16 1.14-.25.34-.64.53-1.04.53h-.08c-2.36-.41-4.47-1.4-6.29-2.9C2.13 27.57 0 22.97 0 17 0 7.61 8.61 0 18 0s18 7.61 18 17c0 5.97-2.13 10.57-4.88 13.27-1.82 1.5-3.93 2.49-6.29 2.9h-.08c-.4 0-.79-.19-1.04-.53-.25-.34-.32-.77-.16-1.14.16-.35.52-.62.88-.71C28.61 28.99 33 23.51 33 17c0-8.28-6.72-15-15-15z"
        fill={fill ? fill : '#FFD700'}
      />
      <Path
        d="M11 19c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm6.5-6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm7.5 8h-2v-2h2v2zm0-3h-2V9h2v2z"
        fill="#2E2E2E"
      />
    </Svg>
  );
}

export default IconToy;
