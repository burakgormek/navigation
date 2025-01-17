#ifdef RCT_NEW_ARCH_ENABLED
#import "NVCollapsingBarComponentView.h"

#import <react/renderer/components/navigation-react-native/ComponentDescriptors.h>
#import <react/renderer/components/navigation-react-native/EventEmitters.h>
#import <react/renderer/components/navigation-react-native/Props.h>
#import <react/renderer/components/navigation-react-native/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface NVCollapsingBarComponentView () <RCTNVCollapsingBarViewProtocol>
@end

@implementation NVCollapsingBarComponentView

- (instancetype)initWithFrame:(CGRect)frame
{
    if (self = [super initWithFrame:frame]) {
    }
    return self;
}

#pragma mark - RCTComponentViewProtocol

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<NVCollapsingBarComponentDescriptor>();
}

@end

Class<RCTComponentViewProtocol> NVCollapsingBarCls(void)
{
  return NVCollapsingBarComponentView.class;
}

#endif
