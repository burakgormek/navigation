#ifdef RCT_NEW_ARCH_ENABLED
#import "NVSearchBarComponentView.h"

#import <react/renderer/components/navigation-react-native/ComponentDescriptors.h>
#import <react/renderer/components/navigation-react-native/EventEmitters.h>
#import <react/renderer/components/navigation-react-native/Props.h>
#import <react/renderer/components/navigation-react-native/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface NVSearchBarComponentView () <RCTNVSearchBarViewProtocol>
@end

@implementation NVSearchBarComponentView

- (instancetype)initWithFrame:(CGRect)frame
{
    if (self = [super initWithFrame:frame]) {
        static const auto defaultProps = std::make_shared<const NVSearchBarProps>();
        _props = defaultProps;
    }
    return self;
}

#pragma mark - RCTComponentViewProtocol

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<NVSearchBarComponentDescriptor>();
}

@end

Class<RCTComponentViewProtocol> NVSearchBarCls(void)
{
  return NVSearchBarComponentView.class;
}
#endif
