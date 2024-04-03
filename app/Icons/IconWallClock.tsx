import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function IconWallClock(props) {
  const { width, height, fill } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Circle cx="12" cy="12" r="11" fill="none" stroke={fill ? fill : '#000'} strokeWidth="2" />
      <Path
        fill={fill ? fill : '#000'}
        d="M12 6v6l4.25 2.5-1.5 2.598L10.5 14V6h1.5z"
      />
      <Path
        fill={fill ? fill : '#000'}
        d="M12 6v6l-4.25 2.5 1.5 2.598L13.5 14V6h-1.5z"
      />
    </Svg>
  );
}

export default IconWallClock;
