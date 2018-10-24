package com.baseproject;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.reactcommunity.rnlanguages.RNLanguagesPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.BV.LinearGradient.LinearGradientPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
  @Override
  protected ReactGateway createReactGateway() {
      ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
          @Override
          protected String getJSMainModuleName() {
              return "index";
          }
      };
      return new ReactGateway(this, isDebug(), host);
  }

  @Override
  public boolean isDebug() {
      return BuildConfig.DEBUG;
  }
  
  protected List<ReactPackage> getPackages() {
      // Add additional packages you require here
      // No need to add RnnPackage and MainReactPackage
      return Arrays.<ReactPackage>asList(
          new RNLanguagesPackage(),
          new RNDeviceInfo(),
          new LinearGradientPackage()
      );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
      return getPackages();
  }
}