package com.cocos.game.ads.networks;

import android.app.Activity;
import android.util.Log;
import android.view.View;
import android.widget.RelativeLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.cocos.game.ads.AdsPlugin;
import com.cocos.game.ads.IAdsPlugin;
import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.OnUserEarnedRewardListener;
import com.google.android.gms.ads.RequestConfiguration;
import com.google.android.gms.ads.initialization.InitializationStatus;
import com.google.android.gms.ads.initialization.OnInitializationCompleteListener;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;
import com.google.android.gms.ads.rewarded.RewardItem;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;

import java.util.Arrays;
import java.util.List;

public class AdMobAdapter implements IAdsPlugin.AdNetwork {
    private static final String TAG = "AdMobAdapter";

    protected Activity mActivity;
    protected AdView mBannerAdView;
    protected RelativeLayout mBannerContainer;
    protected InterstitialAd mInterstitialAd;
    protected RewardedAd mRewardedAd;

    protected IAdsPlugin.AdCallback mCallback;

    protected String mBannerId = "ca-app-pub-3940256099942544/6300978111";
    protected String mInterId = "ca-app-pub-3940256099942544/1033173712";
    protected String mRewardedId = "ca-app-pub-3940256099942544/5224354917";

    protected boolean mIsVideoRewarded = false;

    public void setUnitAdsId(@Nullable String bannerId, @Nullable String interId, @Nullable String rewardedId) {
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

            OnInitializationCompleteListener initListener = (@NonNull InitializationStatus initializationStatus) -> {
                Log.i(TAG, "Success init ads");
                listener.onSuccess(AdMobAdapter.this);
            };

            MobileAds.initialize(activityContext, initListener);
        } catch (Exception error) {
            Log.e(TAG, error.toString());
        }
    }

    public void showBannerAd() {
        try {
            AdMobAdapter instance = this;
            Activity activity = instance.mActivity;
            String id = instance.mBannerId;
            AdView bannerAdView = instance.mBannerAdView;

            if (bannerAdView != null) {
                return;
            }

            // create ads
            AdView adView = new AdView(activity);
            adView.setAdSize(AdSize.BANNER);
            adView.setAdUnitId(id);
            instance.mBannerAdView = adView;

            // Place the ad view.
            RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
            params.addRule(RelativeLayout.CENTER_HORIZONTAL);
            params.addRule(RelativeLayout.ALIGN_PARENT_BOTTOM);

            if (instance.mBannerContainer == null) {
                RelativeLayout container = new RelativeLayout(activity);
                RelativeLayout.LayoutParams containerParams = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.MATCH_PARENT);
                instance.mBannerContainer = container;

                Runnable runnable = () -> {
                    try {
                        activity.addContentView(container, containerParams);
                    } catch (Exception error) {
                        Log.e(TAG, error.toString());
                    }
                };
                activity.runOnUiThread(runnable);
            }

            activity.runOnUiThread(() -> {
                try {
                    instance.mBannerContainer.addView(adView, params);

                    AdRequest adRequest = new AdRequest.Builder().build();
                    adView.loadAd(adRequest);
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
            RelativeLayout bannerContainer = this.mBannerContainer;
            if (mBannerAdView == null) {
                return;
            }

            // Make sure to operate on the UI thread
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
            AdMobAdapter instance = this;
            Activity activity = instance.mActivity;
            String id = instance.mInterId;
            InterstitialAd interAd = instance.mInterstitialAd;

            if (interAd != null) {
                mCallback.onFinishLoadInterAd(null);
                return;
            }

            AdRequest adRequest = new AdRequest.Builder().build();
            InterstitialAdLoadCallback callback = new InterstitialAdLoadCallback() {
                @Override
                public void onAdLoaded(@NonNull InterstitialAd interstitialAd) {
                    // The mInterstitialAd reference will be null until
                    // an ad is loaded.
                    mInterstitialAd = interstitialAd;
                    Log.i(TAG, "onAdLoaded");

                    mCallback.onFinishLoadInterAd(null);
                }

                @Override
                public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                    // Handle the error
                    Log.w(TAG, loadAdError.toString());
                    mInterstitialAd = null;

                    mCallback.onFinishLoadInterAd(loadAdError.getDomain() + " " + loadAdError.getMessage());
                }
            };
            Runnable run = () -> {
                try {
                    InterstitialAd.load(activity, id, adRequest, callback);
                } catch (Exception error) {
                    Log.e(TAG, error.toString());
                    mCallback.onFinishLoadInterAd(AdsPlugin.getErrorMessage(error));
                }
            };
            activity.runOnUiThread(run);
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishLoadInterAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void showInterstitialAd() {
        try {
            AdMobAdapter instance = this;
            Activity activity = instance.mActivity;
            InterstitialAd ad = instance.mInterstitialAd;

            if (ad == null) {
                Log.i(TAG, "The interstitial ad wasn't ready yet.");
                mCallback.onFinishShowInterAd(AdsPlugin.SHOW_AD_FAILED);
                return;
            }

            FullScreenContentCallback callback = new FullScreenContentCallback(){
                @Override
                public void onAdClicked() {
                    // Called when a click is recorded for an ad.
                    Log.i(TAG, "Ad was clicked.");
                }

                @Override
                public void onAdDismissedFullScreenContent() {
                    // Called when ad is dismissed.
                    // Set the ad reference to null so you don't show the ad a second time.
                    Log.i(TAG, "Ad dismissed fullscreen content.");
                    mInterstitialAd = null;

                    mCallback.onFinishShowInterAd(null);
                }

                @Override
                public void onAdFailedToShowFullScreenContent(AdError adError) {
                    // Called when ad fails to show.
                    Log.w(TAG, "Ad failed to show fullscreen content.");
                    mInterstitialAd = null;

                    mCallback.onFinishShowInterAd(adError.getDomain() + " " + adError.getMessage());
                }

                @Override
                public void onAdImpression() {
                    // Called when an impression is recorded for an ad.
                    Log.i(TAG, "Ad recorded an impression.");
                }

                @Override
                public void onAdShowedFullScreenContent() {
                    // Called when ad is shown.
                    Log.i(TAG, "Ad showed fullscreen content.");
                }
            };
            ad.setFullScreenContentCallback(callback);

            activity.runOnUiThread(() -> {
                try {
                    ad.show(activity);
                } catch (Exception error) {
                    Log.e(TAG, error.toString());
                    mCallback.onFinishShowInterAd(AdsPlugin.getErrorMessage(error));
                }
            });
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishShowInterAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void loadRewardedAd() {
        try {
            AdMobAdapter instance = this;
            Activity activity = instance.mActivity;
            String id = instance.mRewardedId;
            RewardedAd ad = instance.mRewardedAd;

            if (ad != null) {
                mCallback.onFinishLoadRewardedAd(null);
                return;
            }

            AdRequest adRequest = new AdRequest.Builder().build();
            RewardedAdLoadCallback callback = new RewardedAdLoadCallback() {
                @Override
                public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                    // Handle the error.
                    Log.w(TAG, loadAdError.toString());
                    mRewardedAd = null;

                    mCallback.onFinishLoadRewardedAd(loadAdError.getDomain() + " " + loadAdError.getMessage());
                }

                @Override
                public void onAdLoaded(@NonNull RewardedAd ad) {
                    mRewardedAd = ad;
                    Log.i(TAG, "Ad was loaded.");

                    mCallback.onFinishLoadRewardedAd(null);
                }
            };
            activity.runOnUiThread(() -> {
                try {
                    RewardedAd.load(activity, id, adRequest, callback);
                } catch (Exception error) {
                    Log.e(TAG, error.toString());
                    String message = error.getMessage();
                    mCallback.onFinishLoadRewardedAd(AdsPlugin.getErrorMessage(error));
                }
            });
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishLoadRewardedAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void showRewardedAd() {
        try {
            AdMobAdapter instance = this;
            Activity activity = instance.mActivity;
            RewardedAd rewardedAd = instance.mRewardedAd;

            if (rewardedAd == null) {
                Log.i(TAG, "The rewarded ad wasn't ready yet.");
                mCallback.onFinishShowRewardedAd(AdsPlugin.SHOW_AD_FAILED);
                return;
            }

            mIsVideoRewarded = false;

            FullScreenContentCallback callback = new FullScreenContentCallback() {
                @Override
                public void onAdClicked() {
                    // Called when a click is recorded for an ad.
                    Log.i(TAG, "Ad was clicked.");
                }

                @Override
                public void onAdDismissedFullScreenContent() {
                    // Called when ad is dismissed.
                    // Set the ad reference to null so you don't show the ad a second time.
                    Log.i(TAG, "Ad dismissed fullscreen content.");
                    mRewardedAd = null;

                    if (mIsVideoRewarded) {
                        mCallback.onFinishShowRewardedAd(null);
                    } else {
                        mCallback.onFinishShowRewardedAd(AdsPlugin.AD_SKIPPED);
                    }
                }

                @Override
                public void onAdFailedToShowFullScreenContent(AdError adError) {
                    // Called when ad fails to show.
                    Log.w(TAG, "Ad failed to show fullscreen content.");
                    mRewardedAd = null;

                    mCallback.onFinishShowRewardedAd(adError.getDomain() + " " + adError.getMessage());
                }

                @Override
                public void onAdImpression() {
                    // Called when an impression is recorded for an ad.
                    Log.i(TAG, "Ad recorded an impression.");
                }

                @Override
                public void onAdShowedFullScreenContent() {
                    // Called when ad is shown.
                    Log.i(TAG, "Ad showed fullscreen content.");
                }
            };
            rewardedAd.setFullScreenContentCallback(callback);

            Runnable run = () -> {
                try {
                    rewardedAd.show(activity, (@NonNull RewardItem rewardItem) -> {
                        // Handle the reward.
                        int rewardAmount = rewardItem.getAmount();
                        String rewardType = rewardItem.getType();
                        Log.i(TAG, String.format("The user earned the reward %2d %s.", rewardAmount, rewardType));

                        mIsVideoRewarded = true;
                    });
                } catch (Exception error) {
                    Log.e(TAG, error.toString());
                    mCallback.onFinishShowRewardedAd(AdsPlugin.getErrorMessage(error));
                }
            };
            activity.runOnUiThread(run);
        } catch (Exception error) {
            Log.e(TAG, error.toString());
            mCallback.onFinishShowRewardedAd(AdsPlugin.getErrorMessage(error));
        }
    }

    public void onResume() {
        if (mBannerAdView != null) {
            mBannerAdView.resume();
        }
    }

    public void onPause() {
        if (mBannerAdView != null) {
            mBannerAdView.pause();
        }
    }

    public void onDestroy() {
        this.hideBannerAd();
        mActivity = null;
    }
}
