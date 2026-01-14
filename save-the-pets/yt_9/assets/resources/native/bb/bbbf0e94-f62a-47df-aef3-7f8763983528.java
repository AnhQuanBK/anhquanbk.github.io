package com.cocos.game.ads.networks;

import android.app.Activity;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;

import androidx.annotation.Nullable;

import com.applovin.mediation.MaxAd;
import com.applovin.mediation.MaxAdListener;
import com.applovin.mediation.MaxAdViewAdListener;
import com.applovin.mediation.MaxError;
import com.applovin.mediation.MaxReward;
import com.applovin.mediation.MaxRewardedAdListener;
import com.applovin.mediation.ads.MaxAdView;
import com.applovin.mediation.ads.MaxInterstitialAd;
import com.applovin.mediation.ads.MaxRewardedAd;
import com.applovin.sdk.AppLovinSdk;
import com.applovin.sdk.AppLovinSdkConfiguration;
import com.cocos.game.ads.AdsPlugin;
import com.cocos.game.ads.IAdsPlugin;

import sun_studio.save_the_pets.R;

public class AppLovinMax implements IAdsPlugin.AdNetwork {
    private static final String TAG = "AppLovinMax";

    protected Activity mActivity;

    protected MaxAdView mBannerAdView;
    protected RelativeLayout mBannerContainer;
    protected MaxInterstitialAd mInterstitialAd;
    protected boolean mIsInterAdNull = true;
    protected MaxRewardedAd mRewardedAd;
    protected boolean mIsRewardedAdNull = true;

    protected IAdsPlugin.AdCallback mCallback;

    protected String mBannerId = "YOUR_AD_UNIT_ID";
    protected String mInterId = "YOUR_AD_UNIT_ID";
    protected String mRewardedId = "YOUR_AD_UNIT_ID";

    protected boolean mIsVideoRewarded = false;

    public void setUnitAdsId(@Nullable  String bannerId, @Nullable String interId, @Nullable String rewardedId) {
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

            AppLovinSdk.getInstance(activityContext).setMediationProvider("max");
            AppLovinSdk.initializeSdk(activityContext, (final AppLovinSdkConfiguration configuration) -> {
                // AppLovin SDK is initialized, start loading ads
                Log.i(TAG, "Success init ads");
                listener.onSuccess(AppLovinMax.this);
            });
        } catch (Exception error) {
            Log.e(TAG, error.toString());
        }
    }

    public void showBannerAd() {
        try {
            AppLovinMax instance = this;
            Activity activity = instance.mActivity;
            String id = instance.mBannerId;
            MaxAdView bannerAdView = instance.mBannerAdView;

            if (bannerAdView != null) {
                return;
            }

            MaxAdView adView = new MaxAdView(id, activity);
            instance.mBannerAdView = adView;
            MaxAdViewAdListener listener = new MaxAdViewAdListener() {
                @Override
                public void onAdExpanded(MaxAd maxAd) {}

                @Override
                public void onAdCollapsed(MaxAd maxAd) {}

                @Override
                public void onAdLoaded(MaxAd maxAd) {}

                @Override
                public void onAdDisplayed(MaxAd maxAd) {}

                @Override
                public void onAdHidden(MaxAd maxAd) {}

                @Override
                public void onAdClicked(MaxAd maxAd) {}

                @Override
                public void onAdLoadFailed(String s, MaxError maxError) {}

                @Override
                public void onAdDisplayFailed(MaxAd maxAd, MaxError maxError) {}
            };
            adView.setListener(listener);

            // Stretch to the width of the screen for banners to be fully functional
            int width = ViewGroup.LayoutParams.MATCH_PARENT;

            // Banner height on phones and tablets is 50 and 90, respectively
            int heightPx = activity.getResources().getDimensionPixelSize( R.dimen.appLovinBannerHeight );

            // Set background or background color for banners to be fully functional
            adView.setBackgroundColor( 0xFFFFFF );

            // Place the ad view.
            RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(width, heightPx);
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

                    adView.loadAd();
                } catch (Exception error) {
                    Log.e(TAG, error.toString());
                }
            });
        } catch (Exception error) {
            Log.e(TAG, error.toString());
        }
    }

    public void hideBannerAd() {
        try {
            Activity activity = this.mActivity;
            if (mBannerAdView == null) {
                return;
            }

            activity.runOnUiThread(() -> {
                try {
                    mBannerContainer.removeAllViews();
                    mBannerAdView.destroy();
                    mBannerAdView = null;
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
            AppLovinMax instance = this;
            Activity activity = instance.mActivity;
            String id = instance.mInterId;

            if (!instance.mIsInterAdNull) {
                mCallback.onFinishLoadInterAd(null);
                return;
            }

            MaxInterstitialAd interstitialAd = new MaxInterstitialAd( id, activity );
            this.mInterstitialAd = interstitialAd;
            MaxAdListener listener = new MaxAdListener() {
                @Override
                public void onAdLoaded(MaxAd maxAd) {
                    mIsInterAdNull = false;

                    Log.i(TAG, "onAdLoaded");

                    mCallback.onFinishLoadInterAd(null);
                }

                @Override
                public void onAdDisplayed(MaxAd maxAd) {}

                @Override
                public void onAdHidden(MaxAd maxAd) {
                    mIsInterAdNull = true;

                    mCallback.onFinishShowInterAd(null);
                }

                @Override
                public void onAdClicked(MaxAd maxAd) {}

                @Override
                public void onAdLoadFailed(String s, MaxError maxError) {
                    // Handle the error
                    Log.w(TAG, maxError.toString());
                    mIsInterAdNull = true;

                    mCallback.onFinishLoadInterAd(s + " " + maxError.getMessage());
                }

                @Override
                public void onAdDisplayFailed(MaxAd maxAd, MaxError maxError) {
                    // Handle the error
                    Log.w(TAG, maxError.toString());
                    mIsInterAdNull = true;

                    mCallback.onFinishShowInterAd(maxError.getMessage());
                }
            };
            interstitialAd.setListener(listener);

            // Load the first ad
            interstitialAd.loadAd();
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishLoadInterAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void showInterstitialAd() {
        try {
            AppLovinMax instance = this;
            MaxInterstitialAd ad = instance.mInterstitialAd;

            if (ad == null || !ad.isReady()) {
                Log.w(TAG, "The interstitial ad wasn't ready yet.");
                mCallback.onFinishShowInterAd(AdsPlugin.SHOW_AD_FAILED);
                return;
            }

            ad.showAd();
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishShowInterAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void loadRewardedAd() {
        try {
            AppLovinMax instance = this;
            Activity activity = instance.mActivity;
            String id = instance.mRewardedId;

            if (!instance.mIsRewardedAdNull) {
                mCallback.onFinishLoadRewardedAd(null);
                return;
            }

            MaxRewardedAd rewardedAd = MaxRewardedAd.getInstance( id, activity );
            this.mRewardedAd = rewardedAd;
            MaxRewardedAdListener listener = new MaxRewardedAdListener() {
                @Override
                public void onUserRewarded(MaxAd maxAd, MaxReward maxReward) {
                    // Handle the reward.
                    int rewardAmount = maxReward.getAmount();
                    String rewardType = maxReward.getLabel();
                    Log.i(TAG, String.format("The user earned the reward %2d %s.", rewardAmount, rewardType));

                    mIsVideoRewarded = true;
                }

                @Override
                public void onRewardedVideoStarted(MaxAd maxAd) {}

                @Override
                public void onRewardedVideoCompleted(MaxAd maxAd) {}

                @Override
                public void onAdLoaded(MaxAd maxAd) {
                    mIsRewardedAdNull = false;

                    Log.i(TAG, "onAdLoaded");

                    mCallback.onFinishLoadRewardedAd(null);
                }

                @Override
                public void onAdDisplayed(MaxAd maxAd) {}

                @Override
                public void onAdHidden(MaxAd maxAd) {
                    // Handle the error
                    mIsRewardedAdNull = true;

                    if (mIsVideoRewarded) {
                        mCallback.onFinishShowRewardedAd(null);
                    } else {
                        mCallback.onFinishShowRewardedAd(AdsPlugin.AD_SKIPPED);
                    }
                }

                @Override
                public void onAdClicked(MaxAd maxAd) {}

                @Override
                public void onAdLoadFailed(String s, MaxError maxError) {
                    // Handle the error
                    Log.w(TAG, maxError.toString());
                    mIsRewardedAdNull = true;

                    mCallback.onFinishLoadRewardedAd(s + " " + maxError.getMessage());
                }

                @Override
                public void onAdDisplayFailed(MaxAd maxAd, MaxError maxError) {
                    // Handle the error
                    Log.w(TAG, maxError.toString());
                    mIsRewardedAdNull = true;

                    mCallback.onFinishShowRewardedAd(maxError.getMessage());
                }
            };
            rewardedAd.setListener(listener);

            rewardedAd.loadAd();
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishLoadRewardedAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void showRewardedAd() {
        try {
            AppLovinMax instance = this;
            MaxRewardedAd ad = instance.mRewardedAd;

            if (ad == null || !ad.isReady()) {
                Log.w(TAG, "The Rewarded ad wasn't ready yet.");
                mCallback.onFinishShowRewardedAd(AdsPlugin.SHOW_AD_FAILED);
                return;
            }

            mIsVideoRewarded = false;

            ad.showAd();
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
