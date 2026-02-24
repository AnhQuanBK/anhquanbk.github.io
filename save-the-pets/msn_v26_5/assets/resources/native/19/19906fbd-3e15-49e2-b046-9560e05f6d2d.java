package sun_studio.save_the_pets;

import android.app.Application;
import android.util.Log;

import com.adjust.sdk.Adjust;
import com.adjust.sdk.AdjustConfig;

public class GlobalApplication extends Application {
    private String mAdjustAppToken = "{YourAppToken}";
    private String mAdjustEnvironment = AdjustConfig.ENVIRONMENT_SANDBOX;

    @Override
    public void onCreate() {
        super.onCreate();

//        initAdjustSDK();
    }

    private void initAdjustSDK() {
        String appToken = mAdjustAppToken;
        String environment = mAdjustEnvironment;
        AdjustConfig config = new AdjustConfig(this, appToken, environment);
        Adjust.onCreate(config);
    }
}