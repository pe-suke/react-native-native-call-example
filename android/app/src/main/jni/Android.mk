LOCAL_PATH := $(call my-dir)
include $(CLEAR_VARS)
LOCAL_MODULE := test_react_jni
LOCAL_SRC_FILES := test_react.c
include $(BUILD_SHARED_LIBRARY)