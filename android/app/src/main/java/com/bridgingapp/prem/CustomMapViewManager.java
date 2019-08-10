package com.bridgingapp.prem;

import android.net.Uri;
import android.widget.TextView;
import android.widget.VideoView;

import com.bridgingapp.MapActivity;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class CustomMapViewManager extends SimpleViewManager<TextView> {



    @Override
    public String getName() {
        return "RCTNativeView";
    }


    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
        TextView videoView = new TextView(reactContext);
        return videoView;

    }


    @ReactProp(name="url")
    public void setVideoPath(TextView textView, String urlPath) {
        Uri uri = Uri.parse(urlPath);
//        videoView.setVideoURI(uri);
//        videoView.start();
        textView.setText("PREM PREM PREM ");
    }

//    @Nonnull
//    @Override
//    public String getName() {
//        return "RCTNativeView";
//    }
//
//    @Nonnull
//    @Override
//    protected VideoView createViewInstance(@Nonnull ThemedReactContext reactContext) {
//        VideoView videoView = new VideoView(reactContext);
//        return videoView;
//    }
//
//    @ReactProp(name="url")
//    public void setVideoPath(VideoView videoView, String urlPath) {
//        Uri uri = Uri.parse(urlPath);
//        videoView.setVideoURI(uri);
//        videoView.start();
//    }
//
//
//    @ReactProp(name = "marker")
//    public void setMarker(CustomMapViewGroup view, @Nullable String adspot) {
////        VmaxSdk.setLogLevel(VmaxSdk.LogLevel.DEBUG);
////        view.setAdspotId(adspot);
//    }

//    @Nonnull
//    @Override
//    protected CustomMapViewGroup createViewInstance(@Nonnull ThemedReactContext reactContext) {
//        return new CustomMapViewGroup(reactContext);    }
}
