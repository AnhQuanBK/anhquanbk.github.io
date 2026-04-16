package com.cocos.game.ads.networks;

import android.app.Activity;
import android.util.Log;
import android.widget.RelativeLayout;

import androidx.annotation.Nullable;

import com.cocos.game.ads.AdsPlugin;
import com.cocos.game.ads.IAdsPlugin;
import com.google.android.gms.ads.AdRequest;
import com.ironsource.mediationsdk.ISBannerSize;
import com.ironsource.mediationsdk.IronSource;
import com.ironsource.mediationsdk.IronSourceBannerLayout;
import com.ironsource.mediationsdk.adunit.adapter.utility.AdInfo;
import com.ironsource.mediationsdk.logger.IronSourceError;
import com.ironsource.mediationsdk.model.Placement;
import com.ironsource.mediationsdk.sdk.InitializationListener;
import com.ironsource.mediationsdk.sdk.LevelPlayBannerListener;
import com.ironsource.mediationsdk.sdk.LevelPlayInterstitialListener;
import com.ironsource.mediationsdk.sdk.LevelPlayRewardedVideoListener;
import com.ironsource.mediationsdk.sdk.LevelPlayRewardedVideoManualListener;
import com.unity3d.services.banners.BannerView;

public class IronSourceAdapter implements IAdsPlugin.AdNetwork {
    private static final String TAG = "IronSourceAdapter";

    protected Activity mActivity;
    protected boolean mIsLoadManually = false;

    protected IronSourceBannerLayout mBannerLayout;
    protected RelativeLayout mBannerContainer;

    protected IAdsPlugin.AdCallback mCallback;

    public String mAppKey = "1234567";

    protected String mBannerId = null;
    protected String mInterId = null;
    protected String mRewardedId = null;

    protected boolean mIsVideoRewarded = false;

    public void setUnitAdsId(@Nullable  String appKey, @Nullable String bannerId, @Nullable String interId, @Nullable String rewardedId) {
        if (mAppKey != null) {
            mAppKey = appKey;
        }

        if (bannerId != null) {
            mBannerId = bannerId;
        }
        if (interId != null) {
            mInterId = interId;
        }
        if (rewardedId != null) {
            mRewardedId = rewardedId;
        }
    }

    public void initSDK(Activity activityContext, boolean loadRewardedAdManually, IAdsPlugin.AdNetworkInitCallback listener, IAdsPlugin.AdCallback callback) {
        try {
            this.mActivity = activityContext;
            this.mIsLoadManually = loadRewardedAdManually;
            this.mCallback = callback;

            IronSource.shouldTrackNetworkState(activityContext, true);

            initRewardedAdListener();
            initInterAdListener();
//            initBannerAdListener();
//
//            IronSource.setOfferwallListener(mOfferwallListener);
//            IronSource.setUserId("UserID"); // call this function to setup Offerwall or Reward user in RewardAd
            IronSource.init(activityContext, mAppKey, () -> {
                Log.i(TAG, "Success init ads");
//                IntegrationHelper.validateIntegration(activityContext);
                listener.onSuccess(IronSourceAdapter.this);
            });
        } catch (Exception error) {
            Log.e(TAG, error.toString());
        }
    }

    public void initRewardedAdListener() {
        if (this.mIsLoadManually) {
            this.initRewardedAdListenerManually();
        } else {
            this.initRewardedAdListenerAutomatically();
        }
    }

    public void initInterAdListener() {
        IronSource.setLevelPlayInterstitialListener(new LevelPlayInterstitialListener() {
            // Invoked when the interstitial ad was loaded successfully.
            // AdInfo parameter includes information about the loaded ad
            @Override
            public void onAdReady(AdInfo adInfo) {
                Log.i(TAG, "onAdLoaded");

                mCallback.onFinishLoadInterAd(null);
            }
            // Indicates that the ad failed to be loaded
            @Override
            public void onAdLoadFailed(IronSourceError error) {
                Log.w(TAG, error.toString());

                mCallback.onFinishLoadInterAd(error.getErrorMessage());
            }
            // Invoked when the Interstitial Ad Unit has opened, and user left the application screen.
            // This is the impression indication.
            @Override
            public void onAdOpened(AdInfo adInfo) {}
            // Invoked when the interstitial ad closed and the user went back to the application screen.
            @Override
            public void onAdClosed(AdInfo adInfo) {
                mCallback.onFinishShowInterAd(null);
            }
            // Invoked when the ad failed to show
            @Override
            public void onAdShowFailed(IronSourceError error, AdInfo adInfo) {
                Log.w(TAG, error.toString());

                mCallback.onFinishShowInterAd(error.getErrorMessage());
            }
            // Invoked when end user clicked on the interstitial ad
            @Override
            public void onAdClicked(AdInfo adInfo) {}
            // Invoked before the interstitial ad was opened, and before the InterstitialOnAdOpenedEvent is reported.
            // This callback is not supported by all networks, and we recommend using it only if
            // it's supported by all networks you included in your build.
            @Override
            public void onAdShowSucceeded(AdInfo adInfo){}
        });
    }

    public void initBannerAdListener() {
        IronSourceAdapter instance = this;
        Activity activity = instance.mActivity;

        IronSourceBannerLayout banner = IronSource.createBanner(activity, ISBannerSize.BANNER);
        instance.mBannerLayout = banner;

        // Place the ad view.
        RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
        params.addRule(RelativeLayout.CENTER_HORIZONTAL);
        params.addRule(RelativeLayout.ALIGN_PARENT_BOTTOM);

        if (instance.mBannerContainer == null) {
            RelativeLayout container = new RelativeLayout(activity);
            RelativeLayout.LayoutParams containerParams = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.MATCH_PARENT);
            instance.mBannerContainer = container;
            activity.runOnUiThread(() -> {
                try {
                    activity.addContentView(container, containerParams);
                } catch (Exception error) {
                    Log.e(TAG, error.toString());
                }
            });
        }
        activity.runOnUiThread(() -> {
            try {
                instance.mBannerContainer.addView(banner, params);
            } catch (Exception error) {
                Log.e(TAG, error.toString());
            }
        });

        LevelPlayBannerListener listener = new LevelPlayBannerListener() {
            // Invoked each time a banner was loaded. Either on refresh, or manual load.
            //  AdInfo parameter includes information about the loaded ad
            @Override
            public void onAdLoaded(AdInfo adInfo) {}
            // Invoked when the banner loading process has failed.
            //  This callback will be sent both for manual load and refreshed banner failures.
            @Override
            public void onAdLoadFailed(IronSourceError error) {
                Log.w(TAG, error.toString());
            }
            // Invoked when end user clicks on the banner ad
            @Override
            public void onAdClicked(AdInfo adInfo) {}
            // Notifies the presentation of a full screen content following user click
            @Override
            public void onAdScreenPresented(AdInfo adInfo) {}
            // Notifies the presented screen has been dismissed
            @Override
            public void onAdScreenDismissed(AdInfo adInfo) {
                Log.i(TAG, "Banner hid");
            }
            //Invoked when the user left the app
            @Override
            public void onAdLeftApplication(AdInfo adInfo) {}

        };
        banner.setLevelPlayBannerListener(listener);
    }

    public void initRewardedAdListenerManually() {
        IronSource.setLevelPlayRewardedVideoManualListener(new LevelPlayRewardedVideoManualListener() {
            // Indicates that the Rewarded video ad was loaded successfully.
            // AdInfo parameter includes information about the loaded ad
            @Override
            public void onAdReady(AdInfo adInfo) {
                Log.i(TAG, "onAdLoaded");

                mCallback.onFinishLoadRewardedAd(null);
            }
            // Invoked when the rewarded video failed to load
            @Override
            public void onAdLoadFailed(IronSourceError error){
                Log.w(TAG, error.toString());

                mCallback.onFinishLoadRewardedAd(error.getErrorMessage());
            }
            // The Rewarded Video ad view has opened. Your activity will loose focus
            @Override
            public void onAdOpened(AdInfo adInfo){}
            // The Rewarded Video ad view is about to be closed. Your activity will regain its focus
            @Override
            public void onAdClosed(AdInfo adInfo){
                mCallback.onFinishShowRewardedAd(null);
            }
            // The user completed to watch the video, and should be rewarded.
            // The placement parameter will include the reward data.
            // When using server-to-server callbacks, you may ignore this event and wait for the ironSource server callback
            @Override
            public void onAdRewarded(Placement placement, AdInfo adInfo){
                String rewardName = placement.getRewardName();
                int rewardAmount = placement.getRewardAmount();

                Log.i(TAG, String.format("The user earned the reward %2d %s.", rewardAmount, rewardName));
            }
            // The rewarded video ad was failed to show
            @Override
            public void onAdShowFailed(IronSourceError error, AdInfo adInfo){
                Log.w(TAG, error.toString());

                mCallback.onFinishShowRewardedAd(error.getErrorMessage());
            }
            // Invoked when the video ad was clicked.
            // This callback is not supported by all networks, and we recommend using it
            // only if it's supported by all networks you included in your build
            @Override
            public void onAdClicked(Placement placement, AdInfo adInfo){}
        });
    }

    public void showBannerAd() {
        try {
            if(mBannerLayout != null) {
                return;
            }

            initBannerAdListener();

            IronSource.loadBanner(mBannerLayout, mBannerId);
        } catch (Exception error) {
            Log.e(TAG, error.toString());
        }
    }

    public void hideBannerAd() {
        try {
            if (mBannerLayout == null) {
                return;
            }

            mActivity.runOnUiThread(() -> {
                try {
                    mBannerContainer.removeAllViews();
                    IronSource.destroyBanner(mBannerLayout);
                    mBannerLayout = null;
                } catch (Exception error) {
                    Log.e(TAG, error.toString());
                }
            });
        } catch (Exception error) {
            Log.e(TAG, error.toString());
        }
    }

    public void loadInterstitialAd() {
        try {
            boolean available = IronSource.isInterstitialReady();
            if (available) {
                mCallback.onFinishLoadInterAd(null);
                return;
            }

            IronSource.loadInterstitial();
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishLoadInterAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void showInterstitialAd() {
        try {
            boolean available = IronSource.isInterstitialReady();
            if (!available) {
                mCallback.onFinishShowInterAd(AdsPlugin.SHOW_AD_FAILED);
                return;
            }

            IronSourceAdapter instance = this;
            String id = instance.mInterId;

            IronSource.showInterstitial(id);
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishShowInterAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void initRewardedAdListenerAutomatically() {
        IronSource.setLevelPlayRewardedVideoListener(new LevelPlayRewardedVideoListener() {
            // Indicates that there's an available ad.
            // The adInfo object includes information about the ad that was loaded successfully
            // Use this callback instead of onRewardedVideoAvailabilityChanged(true)
            @Override
            public void onAdAvailable(AdInfo adInfo) {
                Log.i(TAG, "onAdAvailable");
            }
            // Indicates that no ads are available to be displayed
            // Use this callback instead of onRewardedVideoAvailabilityChanged(false)
            @Override
            public void onAdUnavailable() {}
            // The Rewarded Video ad view has opened. Your activity will loose focus
            @Override
            public void onAdOpened(AdInfo adInfo) {}
            // The Rewarded Video ad view is about to be closed. Your activity will regain its focus
            @Override
            public void onAdClosed(AdInfo adInfo) {
                if (mIsVideoRewarded) {
                    mCallback.onFinishShowRewardedAd(null);
                } else {
                    mCallback.onFinishShowRewardedAd(AdsPlugin.AD_SKIPPED);
                }
            }
            // The user completed to watch the video, and should be rewarded.
            // The placement parameter will include the reward data.
            // When using server-to-server callbacks, you may ignore this event and wait for the ironSource server callback
            @Override
            public void onAdRewarded(Placement placement, AdInfo adInfo) {
                String rewardName = placement.getRewardName();
                int rewardAmount = placement.getRewardAmount();

                Log.i(TAG, String.format("The user earned the reward %2d %s.", rewardAmount, rewardName));

                mIsVideoRewarded = true;
            }
            // The rewarded video ad was failed to show
            @Override
            public void onAdShowFailed(IronSourceError error, AdInfo adInfo) {
                Log.w(TAG, error.toString());

                mCallback.onFinishShowRewardedAd(error.getErrorMessage());
            }
            // Invoked when the video ad was clicked.
            // This callback is not supported by all networks, and we recommend using it
            // only if it's supported by all networks you included in your build
            @Override
            public void onAdClicked(Placement placement, AdInfo adInfo) {}
        });
    }

    public void loadRewardedAd() {
        try {
            if (!this.mIsLoadManually) {
                mCallback.onFinishLoadRewardedAd(null);

                return;
            }

            boolean available = IronSource.isRewardedVideoAvailable();
            if (available) {
                mCallback.onFinishLoadRewardedAd(null);
                return;
            }

            IronSource.loadRewardedVideo();
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishLoadRewardedAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void showRewardedAd() {
        try {
            boolean available = IronSource.isRewardedVideoAvailable();
            if (!available) {
                mCallback.onFinishShowRewardedAd(AdsPlugin.SHOW_AD_FAILED);
                return;
            }

            IronSourceAdapter instance = this;
            String id = instance.mRewardedId;

            mIsVideoRewarded = false;

            IronSource.showRewardedVideo(id);
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishShowRewardedAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void onResume() {
        IronSource.onResume(mActivity);
    }

    public void onPause() {
        IronSource.onPause(mActivity);
    }

    public void onDestroy() {
        this.hideBannerAd();
        mActivity = null;
    }
}
