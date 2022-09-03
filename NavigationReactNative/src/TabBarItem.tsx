import React from 'react';
import { requireNativeComponent, Image, Platform, StyleSheet } from 'react-native';
import BackButton from './BackButton';
import BackHandlerContext from './BackHandlerContext';
import createBackHandler from './createBackHandler';
import Freeze from './Freeze';

class TabBarItem extends React.Component<any> {
    private backHandler: any;
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
        this.backHandler = createBackHandler();
    }
    handleBack() {
        return this.props.selected && this.backHandler.handleBack();
    }
    render() {
        var {onPress, children, image, systemItem, badge, index, selected, ...props} = this.props;
        image = typeof image === 'string' ? (Platform.OS === 'ios' ? null : {uri: image}) : image;
        return (
            <NVTabBarItem
                {...props}
                badge={badge != null ? '' + badge : undefined}
                image={Image.resolveAssetSource(image)}
                systemItem={systemItem || ''}
                style={styles.tabBarItem}
                onPress={event => {
                    event.stopPropagation();
                    if (onPress)
                        onPress(event);
                }}>
                <BackButton onPress={this.handleBack} />
                <BackHandlerContext.Provider value={this.backHandler}>
                    <Freeze enabled={!selected}>
                        {children}
                    </Freeze>
                </BackHandlerContext.Provider>
            </NVTabBarItem>
        );
    }
};

var NVTabBarItem = global.nativeFabricUIManager ? require('./TabBarItemNativeComponent').default : requireNativeComponent('NVTabBarItem');

const styles = StyleSheet.create({
    tabBarItem: {
        position: 'absolute',
        top: 0, right: 0,
        bottom: 0, left: 0,
    },
});

export default TabBarItem;
