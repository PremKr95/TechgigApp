package com.bridgingapp.prem;

import android.content.Context;
import android.widget.TextView;

import com.bridgingapp.MapActivity;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.views.view.ReactViewGroup;

class CustomMapViewGroup extends ReactViewGroup implements LifecycleEventListener {;

    TextView textView;
    public CustomMapViewGroup(Context context) {
        super(context);
        MapActivity mapActivity = new MapActivity();
    }

    @Override
    public void onHostResume() {

    }

    @Override
    public void onHostPause() {

    }

    @Override
    public void onHostDestroy() {

    }


}
