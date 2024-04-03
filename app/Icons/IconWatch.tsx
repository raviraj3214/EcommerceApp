import * as React from 'react';
import Svg, { Circle, Path, G } from 'react-native-svg';

function IconWatch(props) {
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
      <G transform="rotate(30 12 12)">
        <Path fill={fill ? fill : '#000'} d="M12 10v-4h1v4h4v1h-4v4h-1v-4h-4v-1h4z" />
        <Circle cx="12" cy="12" r="1" fill={fill ? fill : '#000'} />
      </G>
    </Svg>
  );
}

export default IconWatch;
