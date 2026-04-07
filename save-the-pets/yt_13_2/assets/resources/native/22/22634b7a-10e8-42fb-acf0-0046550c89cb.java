package com.cocos.game.ads.networks;

import android.app.Activity;
import android.util.Log;
import android.widget.RelativeLayout;

import androidx.annotation.Nullable;

import com.cocos.game.ads.AdsPlugin;
import com.cocos.game.ads.IAdsPlugin;
import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;
import com.unity3d.ads.IUnityAdsInitializationListener;
import com.unity3d.ads.IUnityAdsLoadListener;
import com.unity3d.ads.IUnityAdsShowListener;
import com.unity3d.ads.UnityAds;
import com.unity3d.ads.UnityAdsShowOptions;
import com.unity3d.services.banners.BannerErrorInfo;
import com.unity3d.services.banners.BannerView;
import com.unity3d.services.banners.UnityBannerSize;

public class UnityAdsAdapter implements IAdsPlugin.AdNetwork {
    private static final String TAG = "UnityAdsAdapter";

    protected Activity mActivity;

    private String mGameID = "1234567";
    private boolean mTestMode = true;

    protected BannerView mBannerAdView;
    protected RelativeLayout mBannerContainer;

    protected IAdsPlugin.AdCallback mCallback;

    protected String mInterId = "Interstitial_Android";
    protected boolean mIsInterAdNull = true;
    protected String mRewardedId = "Rewarded_Android";
    protected boolean mIsRewardedAdNull = true;
    protected String mBannerId = "Banner_Android";

    public void setUnitAdsId(String gameId, @Nullable String bannerId, @Nullable String interId, @Nullable String rewardedId) {
        if (gameId != null) {
            mGameID = gameId;
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

    public void initSDK(Activity activityContext, IAdsPlugin.AdNetworkInitCallback listener, IAdsPlugin.AdCallback callback) {
        try {
            this.mActivity = activityContext;
            this.mCallback = callback;

            UnityAds.initialize(activityContext, mGameID, mTestMode, new IUnityAdsInitializationListener() {
                @Override
                public void onInitializationComplete() {
                    Log.i(TAG, "Success init ads");
                    listener.onSuccess(UnityAdsAdapter.this);
                }

                @Override
                public void onInitializationFailed(UnityAds.UnityAdsInitializationError error, String message) {
                    Log.w(TAG, "Unity Ads initialization failed with error: [" + error + "] " + message);
                }
            });
        } catch (Exception error) {
            Log.e(TAG, error.toString());
        }
    }

    public void showBannerAd() {
        try {
            UnityAdsAdapter instance = this;
            Activity activity = instance.mActivity;
            String id = instance.mBannerId;
            BannerView bannerAdView = instance.mBannerAdView;

            if (bannerAdView != null) {
                return;
            }

            BannerView adView = new BannerView(activity, id, new UnityBannerSize(320, 50));
            instance.mBannerAdView = adView;
            // Set the listener for banner lifecycle events:
            BannerView.IListener listener = new BannerView.IListener() {
                @Override
                public void onBannerLoaded(BannerView bannerAdView) {
                    Log.v(TAG, "onBannerLoaded: " + bannerAdView.getPlacementId());
                }

                @Override
                public void onBannerClick(BannerView bannerAdView) {}

                @Override
                public void onBannerFailedToLoad(BannerView bannerAdView, BannerErrorInfo errorInfo) {
                    Log.w(TAG, "Unity Ads failed to load banner for " + bannerAdView.getPlacementId() + " with error: [" + errorInfo.errorCode + "] " + errorInfo.errorMessage);
                }

                @Override
                public void onBannerLeftApplication(BannerView bannerView) {
                    Log.v(TAG, "onBannerLeftApplication: " + bannerView.getPlacementId());
                }
            };
            adView.setListener(listener);

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
                    instance.mBannerContainer.addView(adView, params);
                } catch (Exception error) {
                    Log.e(TAG, error.toString());
                }
            });

            adView.load();
        } catch (Exception error) {
            Log.e(TAG, error.toString());
        }
    }

    public void hideBannerAd() {
        try {
            UnityAdsAdapter instance = this;
            Activity activity = instance.mActivity;
            if (mBannerAdView == null) {
                return;
            }

            activity.runOnUiThread(() -> {
                try {
                    instance.mBannerContainer.removeAllViews();
                    instance.mBannerAdView = null;
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
            UnityAdsAdapter instance = this;
            String id = instance.mInterId;

            if (!instance.mIsInterAdNull) {
                mCallback.onFinishLoadInterAd(null);
                return;
            }

            IUnityAdsLoadListener listener = new IUnityAdsLoadListener() {
                @Override
                public void onUnityAdsAdLoaded(String placementId) {
                    instance.mIsInterAdNull = false;

                    Log.i(TAG, "onAdLoaded");

                    mCallback.onFinishLoadInterAd(null);
                }

                @Override
                public void onUnityAdsFailedToLoad(String placementId, UnityAds.UnityAdsLoadError error, String message) {
                    String errorString = "Unity Ads failed to load ad for " + placementId + " with message: " + message;
                    Log.w(TAG, errorString);
                    mIsInterAdNull = true;

                    mCallback.onFinishLoadInterAd(errorString);
                }
            };
            UnityAds.load(id, listener);
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishLoadInterAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void showInterstitialAd() {
        try {
            UnityAdsAdapter instance = this;
            Activity activity = instance.mActivity;
            String id = instance.mInterId;

            if (instance.mIsInterAdNull) {
                Log.w(TAG, "The interstitial ad wasn't ready yet.");
                mCallback.onFinishShowInterAd(AdsPlugin.SHOW_AD_FAILED);
                return;
            }

            IUnityAdsShowListener listener = new IUnityAdsShowListener() {
                @Override
                public void onUnityAdsShowFailure(String placementId, UnityAds.UnityAdsShowError error, String message) {
                    String errorString = "Unity Ads failed to show ad for " + placementId + " with message: " + message;
                    Log.w(TAG, errorString);
                    instance.mIsInterAdNull = true;

                    mCallback.onFinishShowInterAd(errorString);
                }

                @Override
                public void onUnityAdsShowStart(String placementId) {}

                @Override
                public void onUnityAdsShowClick(String placementId) {}

                @Override
                public void onUnityAdsShowComplete(String placementId, UnityAds.UnityAdsShowCompletionState state) {
                    instance.mIsInterAdNull = true;

                    mCallback.onFinishShowInterAd(null);
                }
            };
            UnityAds.show(activity, id, new UnityAdsShowOptions(), listener);
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishShowInterAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void loadRewardedAd() {
        try {
            UnityAdsAdapter instance = this;
            String id = instance.mRewardedId;

            if (!instance.mIsRewardedAdNull) {
                mCallback.onFinishLoadRewardedAd(null);
                return;
            }

            IUnityAdsLoadListener listener = new IUnityAdsLoadListener() {
                @Override
                public void onUnityAdsAdLoaded(String placementId) {
                    instance.mIsRewardedAdNull = false;

                    Log.i(TAG, "onUnityAdsAdLoaded");

                    mCallback.onFinishLoadRewardedAd(null);
                }

                @Override
                public void onUnityAdsFailedToLoad(String placementId, UnityAds.UnityAdsLoadError error, String message) {
                    String errorString = "Unity Ads failed to load ad for " + placementId + " with message: " + message;
                    Log.w(TAG, errorString);
                    instance.mIsRewardedAdNull = true;

                    mCallback.onFinishLoadRewardedAd(errorString);
                }
            };
            UnityAds.load(id, listener);
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishLoadRewardedAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void showRewardedAd() {
        try {
            UnityAdsAdapter instance = this;
            Activity activity = instance.mActivity;
            String id = instance.mRewardedId;

            if (instance.mIsRewardedAdNull) {
                Log.w(TAG, "The Rewarded ad wasn't ready yet.");
                mCallback.onFinishShowRewardedAd(AdsPlugin.SHOW_AD_FAILED);
                return;
            }

            IUnityAdsShowListener listener = new IUnityAdsShowListener() {
                @Override
                public void onUnityAdsShowFailure(String placementId, UnityAds.UnityAdsShowError error, String message) {
                    String errorString = "Unity Ads failed to show ad for " + placementId + " with message: " + message;
                    Log.w(TAG, errorString);
                    instance.mIsRewardedAdNull = true;

                    mCallback.onFinishShowRewardedAd(errorString);
                }

                @Override
                public void onUnityAdsShowStart(String placementId) {}

                @Override
                public void onUnityAdsShowClick(String placementId) {}

                @Override
                public void onUnityAdsShowComplete(String placementId, UnityAds.UnityAdsShowCompletionState state) {
                    instance.mIsRewardedAdNull = true;

                    if (state.equals(UnityAds.UnityAdsShowCompletionState.COMPLETED)) {
                        // Reward the user for watching the ad to completion
                        mCallback.onFinishShowRewardedAd(null);
                    } else {
                        // Do not reward the user for skipping the ad
                        mCallback.onFinishShowRewardedAd(AdsPlugin.AD_SKIPPED);
                    }
                }
            };
            UnityAds.show(activity, id, new UnityAdsShowOptions(), listener);
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishShowRewardedAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void onResume() {}

    public void onPause() {}

    public void onDestroy() {
        this.hideBannerAd();
        mActivity = null;
    }
}