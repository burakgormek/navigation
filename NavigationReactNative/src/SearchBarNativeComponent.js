// @flow strict-local

import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';
import type {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

type NativeProps = $ReadOnly<{|
  ...ViewProps,
  obscureBackground: boolean,
  hideNavigationBar: boolean,
  hideWhenScrolling: boolean,
  autoCapitalize: string,
  placeholder: string,
  text: string,
  mostRecentEventCount: Int32,
  barTintColor: ColorValue,
  scopeButton: string,
  scopeButtons: $ReadOnlyArray<string>,
  onChangeText: DirectEventHandler<$ReadOnly<{|
    text: string,
    eventCount: Int32,
  |}>>,
  onChangeScopeButton?: DirectEventHandler<$ReadOnly<{|
    scopeButton: Int32,
    eventCount: Int32,
  |}>>,
|}>;

export default (codegenNativeComponent<NativeProps>(
   'NVSearchBar',
): HostComponent<NativeProps>);
