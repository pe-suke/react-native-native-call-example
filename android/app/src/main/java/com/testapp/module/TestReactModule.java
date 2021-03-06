package com.testapp.module;

import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TestReactModule extends ReactContextBaseJavaModule {

    static {
        System.loadLibrary("test_react_jni");
    }

    public TestReactModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TestReactModule";
    }

    @ReactMethod
    public void getFromCLibrary(Promise promise) {
        try {
            String returnValue = getFromCLibraryJNI();
            Log.i("TestReactModule", "Call getFromCLibrary");
            promise.resolve(returnValue);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    public native String getFromCLibraryJNI();

    @ReactMethod
    public void getFromJava(Promise promise) {
        Log.i("TestReactModule", "Call getFromJava");
        promise.resolve("Call From Java using getFromJava method");
    }

}
