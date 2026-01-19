package com.cocos.game.ads;

import android.app.Activity;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.cocos.game.ads.networks.AdMobAdapter;
import com.cocos.game.ads.networks.AppLovinMax;
import com.cocos.game.ads.networks.IronSourceAdapter;
import com.cocos.game.ads.networks.UnityAdsAdapter;
import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;

import java.util.ArrayList;

public class AdsPlugin {
    public static final String AD_FAILED = "AD FAILED TO LOAD";
    public static final String SHOW_AD_FAILED = "AD FAILED TO SHOW";
    public static final String AD_SKIPPED = "USER_INPUT";

    private static final String TAG = "AdsPlugin";
    private static AdsPlugin mInstance = null;

    /**
     * Setup AppKey in config.xml
     * Default: will use Admob mock by Google
     */
    protected boolean mAdmobEnable = true;
    protected String mAdmobBannerId = null;
    protected String mAdmobInterId = null;
    protected String mAdmobRewardedId = null;

    /**
     * All is a must
     * Setup AppKey in config.xml
     */
    protected boolean mAppLovinEnable = true;
    protected String mAppLovinBannerId = "1fbb58b2b24c742e";
    protected String mAppLovinInterId = "3413ea082de69fbf";
    protected String mAppLovinRewardedId = "55326426a475d1b6";

    /**
     * AppKey is a must
     * PlacementIds: if null, it will use default name that dashboard create
     */
    protected boolean mIronSourceEnable = true;
    protected String mIronSourceAppKey = "1b0988295";
    protected String mIronSourceBannerId = null;
    protected String mIronSourceInterId = null;
    protected String mIronSourceRewardedId = null;

    /**
     * GaneId is a must
     * PlacementIds: if null, it will use default name that dashboard create
     */
    protected boolean mUnityAdsEnable = true;
    protected String mUnityAdsGameID = "5366619";
    protected String mUnityAdsBannerId = null;
    protected String mUnityAdsInterId = null;
    protected String mUnityAdsRewardedId = null;

    protected int mCurrentBannerNetwork = -1;
    protected int mCurrentInterNetwork = -1;
    protected int mCurrentRewardedNetwork = -1;

    protected ArrayList<IAdsPlugin.AdNetwork> mNetworks = new ArrayList<IAdsPlugin.AdNetwork>();

    protected IAdsPlugin.AdCallback callback = new IAdsPlugin.AdCallback() {
        @Override
        public void onFinishLoadInterAd(@Nullable String result) {
            if (result == null) {
                result = "ok";
            }
            String finalResult = result;

            CocosHelper.runOnGameThread(() -> {
                CocosJavascriptJavaBridge.evalString("window.GameSDK.API_callback('loadAd', 'Interstitial', '" + finalResult + "')");
            });
        }

        @Override
        public void onFinishShowInterAd(@Nullable String result) {
            if (result == null) {
                result = "ok";
            }
            String finalResult = result;

            CocosHelper.runOnGameThread(() -> {
                CocosJavascriptJavaBridge.evalString("window.GameSDK.API_callback('showAd', 'Interstitial', '" + finalResult + "')");
            });
        }

        @Override
        public void onFinishLoadRewardedAd(@Nullable String result) {
            if (result == null) {
                result = "ok";
            }
            String finalResult = result;

            CocosHelper.runOnGameThread(() -> {
                CocosJavascriptJavaBridge.evalString("window.GameSDK.API_callback('loadAd', 'Rewarded', '" + finalResult + "')");
            });
        }

        @Override
        public void onFinishShowRewardedAd(@Nullable String result) {
            if (result == null) {
                result = "ok";
            }
            String finalResult = result;

            CocosHelper.runOnGameThread(() -> {
                CocosJavascriptJavaBridge.evalString("window.GameSDK.API_callback('showAd', 'Rewarded', '" + finalResult + "')");
            });
        }

        @Override
        public void onFinishShowBannerAd(@Nullable String result) {

        }

        @Override
        public void onFinishHideBannerAd(@Nullable String result) {

        }
    };

    public static AdsPlugin getInstance() {
        if (mInstance == null) {
            mInstance = new AdsPlugin();
        }
        return mInstance;
    }

    public void init(Activity activityContext) {
        try {
            IAdsPlugin.AdNetworkInitCallback listener = (IAdsPlugin.AdNetwork network) -> {
                mNetworks.add(network);
            };

            if (mAdmobEnable) {
                AdMobAdapter mAdMobNetwork = new AdMobAdapter();
                mAdMobNetwork.setUnitAdsId(mAdmobBannerId, mAdmobInterId, mAdmobRewardedId);
                mAdMobNetwork.initSDK(activityContext, listener, mInstance.callback);
            }

            if (mAppLovinEnable) {
                AppLovinMax mAppLovinNetwork = new AppLovinMax();
                mAppLovinNetwork.setUnitAdsId(mAppLovinBannerId, mAppLovinInterId, mAppLovinRewardedId);
                mAppLovinNetwork.initSDK(activityContext, listener, mInstance.callback);
            }

            if (mIronSourceEnable) {
                IronSourceAdapter mIronSourceNetwork = new IronSourceAdapter();
                mIronSourceNetwork.setUnitAdsId(mIronSourceAppKey, mIronSourceBannerId, mIronSourceInterId, mIronSourceRewardedId);
                mIronSourceNetwork.initSDK(activityContext, true, listener, mInstance.callback);
            }

            if (mUnityAdsEnable) {
                UnityAdsAdapter mUnityAdsNetwork = new UnityAdsAdapter();
                mUnityAdsNetwork.setUnitAdsId(mUnityAdsGameID, mUnityAdsBannerId, mUnityAdsInterId, mUnityAdsRewardedId);
                mUnityAdsNetwork.initSDK(activityContext, listener, mInstance.callback);
            }
        } catch (Exception e) {
            Log.d(TAG, e.toString());
        }
    }

    protected IAdsPlugin.AdNetwork getAdNetwork(int index) {
        try {
            return mNetworks.get(index);
        } catch (Exception e) {
            return null;
        }
    }

    protected void changeBannerNetwork() {
        mCurrentBannerNetwork++;
        if (mCurrentBannerNetwork >= mNetworks.size()) {
            mCurrentBannerNetwork = 0;
        }
    }

    protected void changeInterNetwork() {
        mCurrentInterNetwork++;
        if (mCurrentInterNetwork >= mNetworks.size()) {
            mCurrentInterNetwork = 0;
        }
    }

    protected void changeRewardedNetwork() {
        mCurrentRewardedNetwork++;
        if (mCurrentRewardedNetwork >= mNetworks.size()) {
            mCurrentRewardedNetwork = 0;
        }
    }

    public static void showBannerAd() {
        int preIdx = mInstance.mCurrentBannerNetwork;
        IAdsPlugin.AdNetwork preNetwork = mInstance.getAdNetwork(preIdx);

        mInstance.changeBannerNetwork();
        int currentIdx = mInstance.mCurrentBannerNetwork;
        IAdsPlugin.AdNetwork curNetwork = mInstance.getAdNetwork(currentIdx);

        if (preNetwork != null && preNetwork != curNetwork) {
            preNetwork.hideBannerAd();
        }
        if (curNetwork != null) {
            curNetwork.showBannerAd();
        }
    }

    public static void hideBannerAd() {
        int currentIdx = mInstance.mCurrentBannerNetwork;
        IAdsPlugin.AdNetwork preNetwork = mInstance.getAdNetwork(currentIdx);
        if (preNetwork != null) {
            preNetwork.hideBannerAd();
        }
    }

    public static void loadInterstitialAd() {
        mInstance.changeInterNetwork();
        int currentIdx = mInstance.mCurrentInterNetwork;
        IAdsPlugin.AdNetwork curNetwork = mInstance.getAdNetwork(currentIdx);
        if (curNetwork != null) {
            curNetwork.loadInterstitialAd();
        } else {
            mInstance.callback.onFinishLoadInterAd("No network found");
        }
    }

    public static void showInterstitialAd() {
        int currentIdx = mInstance.mCurrentInterNetwork;
        IAdsPlugin.AdNetwork curNetwork = mInstance.getAdNetwork(currentIdx);
        if (curNetwork != null) {
            curNetwork.showInterstitialAd();
        } else {
            mInstance.callback.onFinishShowInterAd("No network found");
        }
    }

    public static void loadRewardedAd() {
        mInstance.changeRewardedNetwork();
        int currentIdx = mInstance.mCurrentRewardedNetwork;
        IAdsPlugin.AdNetwork curNetwork = mInstance.getAdNetwork(currentIdx);
        if (curNetwork != null) {
            curNetwork.loadRewardedAd();
        } else {
            mInstance.callback.onFinishLoadRewardedAd("No network found");
        }
    }

    public static void showRewardedAd() {
        int currentIdx = mInstance.mCurrentRewardedNetwork;
        IAdsPlugin.AdNetwork curNetwork = mInstance.getAdNetwork(currentIdx);
        if (curNetwork != null) {
            curNetwork.showRewardedAd();
        } else {
            mInstance.callback.onFinishShowRewardedAd("No network found");
        }
    }

    public void onResume() {
        for (IAdsPlugin.AdNetwork network : mNetworks) {
            network.onResume();
        }
    }

    public void onPause() {
        for (IAdsPlugin.AdNetwork network: mNetworks) {
            network.onPause();
        }
    }

    public void onDestroy() {
        for (IAdsPlugin.AdNetwork network: mNetworks) {
            network.onDestroy();
        }
        mNetworks.clear();
        mInstance = null;
    }

    public static @NonNull String getErrorMessage(Exception error) {
        String message = error.getMessage();
        if (message == null) {
            message = AD_FAILED;
        }

        return message;
    }
}
