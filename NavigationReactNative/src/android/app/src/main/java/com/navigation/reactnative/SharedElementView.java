package com.navigation.reactnative;

import android.content.Context;
import android.os.Build;
import android.view.View;
import android.view.ViewTreeObserver;
import android.widget.FrameLayout;

import com.facebook.react.uimanager.ThemedReactContext;

public class SharedElementView extends FrameLayout {
    private String name;
    protected String enterTransition;
    protected String exitTransition;
    private SceneView scene;

    public SharedElementView(Context context) {
        super(context);
    }

    public void setName(String name) {
        this.name = name;
        setTransitionName(getChildAt(0), name);
    }

    @Override
    public void addView(View child, int index) {
        super.addView(child, index);
        if (scene != null) {
            if (!scene.sharedElements.contains(child)) {
                setTransitionName(child, name);
                scene.sharedElements.add(child);
            }
        }
    }

    @Override
    public void removeViewAt(int index) {
        View sharedElement = getChildAt(index);
        if (scene != null) {
            if (scene.sharedElements.contains(sharedElement)) {
                setTransitionName(sharedElement, null);
                scene.sharedElements.remove(sharedElement);
            }
            super.removeViewAt(index);
        }
    }

    protected void setTransitionName(View sharedElement, String name) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP && sharedElement != null)
            sharedElement.setTransitionName(name);
    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        scene = ((SceneActivity) ((ThemedReactContext) getContext()).getCurrentActivity()).scene;
        View sharedElement = getChildAt(0);
        if (!scene.sharedElements.contains(sharedElement)) {
            setTransitionName(sharedElement, name);
            scene.sharedElements.add(sharedElement);
        }
        getViewTreeObserver().addOnPreDrawListener(new ViewTreeObserver.OnPreDrawListener() {
            @Override
            public boolean onPreDraw() {
                getViewTreeObserver().removeOnPreDrawListener(this);
                SharedElementTransitioner transitioner = (SharedElementTransitioner) scene.getTag(R.id.sharedElementTransitioner);
                if (transitioner != null)
                    transitioner.load(name, enterTransition);
                return true;
            }
        });
    }
}
