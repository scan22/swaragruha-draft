package com.react_native;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import org.devio.rn.splashscreen.SplashScreen;
public class MainActivity extends ReactActivity {
  protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "react_native";
    }

    /**
     * Returns the instance of the {@link ReactActivityDelegate}.
     * We use {@link DefaultReactActivityDelegate} which allows you to enable
     * New Architecture with a single boolean flag {@code fabricEnabled}.
     */
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new DefaultReactActivityDelegate(
                this,
                getMainComponentName(),
                DefaultNewArchitectureEntryPoint.getFabricEnabled()
        );
    }
}
