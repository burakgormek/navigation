/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "Scene.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  self.bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation moduleProvider:nil launchOptions:launchOptions];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:self.bridge moduleName:@"iosTabs" initialProperties:nil];
  
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];

  UIViewController *viewControllerOne = [[Scene alloc] init: @0 tab: @0 appKey: @"iosTabs"];
  viewControllerOne.title = @"Scene";
  viewControllerOne.tabBarItem = [[UITabBarItem alloc] initWithTabBarSystemItem:UITabBarSystemItemSearch tag:0];
  UINavigationController *navigationControllerOne = [[UINavigationController alloc] initWithRootViewController:viewControllerOne];

  UIViewController *viewControllerTwo = [[Scene alloc] init: @0 tab: @1 appKey: @"iosTabs"];
  viewControllerTwo.title = @"Scene";
  viewControllerTwo.tabBarItem = [[UITabBarItem alloc] initWithTabBarSystemItem:UITabBarSystemItemTopRated tag:1];
  UINavigationController *navigationControllerTwo = [[UINavigationController alloc] initWithRootViewController:viewControllerTwo];

  UITabBarController *tabBarController = [[UITabBarController alloc] init];
  [tabBarController setViewControllers:@[navigationControllerOne, navigationControllerTwo]];
  self.window.rootViewController = tabBarController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
