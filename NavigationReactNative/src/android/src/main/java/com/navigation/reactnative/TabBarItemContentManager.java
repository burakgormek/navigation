package com.navigation.reactnative;

import android.view.View;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

public class TabBarItemContentManager extends ViewGroupManager<TabBarItemContentView> {
    @NonNull
    @Override
    public String getName() {
        return "NVTabBarItemContent";
    }

    @NonNull
    @Override
    protected TabBarItemContentView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new TabBarItemContentView(reactContext);
    }

    @Override
    public int getChildCount(TabBarItemContentView parent) {
        return 1;
    }

    @Override
    public View getChildAt(TabBarItemContentView parent, int index) {
        return parent.content;
    }

    @Override
    public void addView(TabBarItemContentView parent, View child, int index) {
        parent.content = child;
    }

    @Override
    public void removeViewAt(TabBarItemContentView parent, int index) {
        parent.content = null;
    }
}
