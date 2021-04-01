/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useEffect, useState} from 'react';
 import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    useColorScheme,
    View,
    NativeModules, TouchableHighlight
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';


 const { TestReactModule } = NativeModules;

const callLibrary = async () => {
     console.log(TestReactModule);
     const retFromJava = await TestReactModule.getFromJava();
     console.log(retFromJava);

    const retFromC = await TestReactModule.getFromCLibrary();
    console.log(retFromC);
 }

 const ReturnFromJava: React.FC = () => {

     const ret = callLibrary();

     return (
         <TouchableOpacity onPress={callLibrary}>
             <Text>Press Here</Text>
         </TouchableOpacity>
     );
 }


 const App = () => {
    return (
        <ReturnFromJava />
    );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
