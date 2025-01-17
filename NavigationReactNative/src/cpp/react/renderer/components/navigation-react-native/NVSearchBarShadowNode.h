#pragma once

#include "NVSearchBarState.h"
#include <react/renderer/components/navigation-react-native/EventEmitters.h>
#include <react/renderer/components/navigation-react-native/Props.h>
#include <react/renderer/components/view/ConcreteViewShadowNode.h>

namespace facebook {
namespace react {

extern const char NVSearchBarComponentName[];

class NVSearchBarShadowNode final : public ConcreteViewShadowNode<
                                          NVSearchBarComponentName,
                                          NVSearchBarProps,
                                          NVSearchBarEventEmitter,
                                          NVSearchBarState> {
 public:
  using ConcreteViewShadowNode::ConcreteViewShadowNode;

  static ShadowNodeTraits BaseTraits() {
    auto traits = ConcreteViewShadowNode::BaseTraits();
    traits.set(ShadowNodeTraits::Trait::RootNodeKind);
    return traits;
  }
};

} // namespace react
} // namespace facebook