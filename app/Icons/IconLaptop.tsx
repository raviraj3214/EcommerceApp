import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function IconLaptop(props) {
  const { width, height, fill } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 36}
      height={height ? height : 24}
      viewBox="0 0 36 24"
      {...props}
    >
      <Rect x="2" y="2" width="32" height="20" rx="2" fill={fill ? fill : '#000'} />
      <Path
        d="M28 22H8a2 2 0 01-2-2V4a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2zm-20-2h20V6H8z"
        fill="#FFF"
      />
    </Svg>
  );
}

export default IconLaptop;
