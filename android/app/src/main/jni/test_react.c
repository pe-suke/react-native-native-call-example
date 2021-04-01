#include <jni.h>

jstring Java_com_testapp_module_TestReactModule_getFromCLibraryJNI(JNIEnv* env, jobject thiz) {
  return (*env)->NewStringUTF(env, "I am C");
}