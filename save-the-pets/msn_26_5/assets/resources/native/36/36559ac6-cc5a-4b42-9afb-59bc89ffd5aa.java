package com.cocos.game.ads;

import androidx.annotation.Nullable;

public interface IAdsPlugin {
    interface AdNetwork {
        void showBannerAd();
        void hideBannerAd();
        void loadInterstitialAd();
        void showInterstitialAd();
        void loadRewardedAd();
        void showRewardedAd();

        void onResume();
        void onPause();
        void onDestroy();
    }

    interface AdNetworkInitCallback {
        void onSuccess(AdNetwork network);
    }

    interface AdCallback {
        void onFinishLoadInterAd(@Nullable  String result);
        void onFinishShowInterAd(@Nullable String result);
        void onFinishLoadRewardedAd(@Nullable String result);
        void onFinishShowRewardedAd(@Nullable String result);
        void onFinishShowBannerAd(@Nullable String result);
        void onFinishHideBannerAd(@Nullable String result);
    }
}
