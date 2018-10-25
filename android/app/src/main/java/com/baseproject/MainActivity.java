package com.baseproject;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;

import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        final View background = new View(this);
        background.setBackgroundColor(getResources().getColor(R.color.colorPrimary));
        setContentView(background);
    }
}