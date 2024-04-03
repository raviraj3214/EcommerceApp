import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function IconMenWear(props) {
  const { width, height, fill } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M18.5 2H5.5a1.5 1.5 0 00-1.5 1.5v17A1.5 1.5 0 005.5 22h13a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0018.5 2zM12 4.5a2 2 0 11-2 2 2 2 0 012-2zm6 15H6v-14h12z"
        fill={fill ? fill : '#000'}
      />
      <Circle cx="12" cy="19.5" r="2.5" fill={fill ? fill : '#000'} />
    </Svg>
  );
}

export default IconMenWear;
