// @flow strict-local

import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';
import type {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

type NativeProps = $ReadOnly<{|
  ...ViewProps,
  image: ImageSource,
  gravity: string,
  anchor: string,
  anchorGravity: string,
  size: Int32,
  contentDescription: string,
  testID: string,
  fabColor: ColorValue,
  fabBackgroundColor: ColorValue,
  fabMarginTop?: WithDefault<Int32, 0>,
  fabMarginRight?: WithDefault<Int32, 0>,
  fabMarginBottom?: WithDefault<Int32, 0>,
  fabMarginLeft?: WithDefault<Int32, 0>,
  fabMarginStart?: WithDefault<Int32, 0>,
  fabMarginEnd?: WithDefault<Int32, 0>,
  fabMargin?: WithDefault<Int32, 0>,
  fabElevation?: WithDefault<Int32, 0>,
|}>;

export default (codegenNativeComponent<NativeProps>(
   'NVFloatingActionButton',
): HostComponent<NativeProps>);
