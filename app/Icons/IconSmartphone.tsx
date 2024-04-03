import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function IconSmartphone(props) {
  const { width, height, fill } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 24}
      height={height ? height : 36}
      viewBox="0 0 24 36"
      {...props}
    >
      <Rect x="4" y="2" width="16" height="32" rx="2" fill={fill ? fill : '#000'} />
      <Rect x="6" y="2" width="12" height="1" fill="#FFF" />
      <Path
        d="M19 0H5a2 2 0 00-2 2v32a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2zm-7 34a2 2 0 01-2-2c0-1.1.9-2 2-2s2 .9 2 2-1 .9-2 2z"
        fill="#FFF"
      />
    </Svg>
  );
}

export default IconSmartphone;
