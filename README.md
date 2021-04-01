# react-native-native-call-example

Here is a example project for learning React Native /w NativeModules

## Prerequisites

* Windows 10
* Already installed below
  * Node.js
  * Yarn
  * Android Studio
* Checked /w Android only (API 26 and 30)

## Refs

* [Android Native Modules](https://reactnative.dev/docs/native-modules-android)
* [Native Modules with JNI&C](https://thebhwgroup.com/blog/react-native-jni)

## Notice

If you use Android Studio to create/edit your Java code for Native Modules, you should stop Metro before building your Java code using gradle.  
I've faced an issue that APK wasn't updated when sending it to AVD or real devices. It comes up an error like this.  

``` bash
Type Error: <YOUR AWSOME FUNCTION> is not a function. (In '<YOUR AWSOME FUNCTION.YOUR METHOD>' is null)
```

