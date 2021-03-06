package com.bridgingapp;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.telephony.SmsManager;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;



public class BridgeModule extends ReactContextBaseJavaModule {

    private Callback callback = null;

    public BridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
//        this.reactContext = reactContext;
    }


    @Override
    public String getName() {
        return "BridgeModule";
    }

    @ReactMethod
    public static void testMethod(){
        Log.d("Bridge","Testing Bridge");

    }

    @ReactMethod
    public static void testCallBackMethod(Callback callback){
        Log.d("Bridge","Testing Bridge");
        String token= "Prem";
        callback.invoke(token);
    }

    @ReactMethod
    void navigateToExample() {
        ReactApplicationContext context = getReactApplicationContext();
        Intent intent = new Intent(context, MapActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }


    @ReactMethod
    void navigateToLocation() {
        ReactApplicationContext context = getReactApplicationContext();
        Intent intent = new Intent(context, MapActivitySimulation.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }

    @ReactMethod
    void navigateToPolice() {
        ReactApplicationContext context = getReactApplicationContext();
        Intent intent = new Intent(context, MapActivityForPolice.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }


    private void sendCallback(Integer messageId, String message){
        if (callback != null) {
            callback.invoke(messageId, message);
            callback = null;
        }
    }


    @ReactMethod
    public void send(final Integer messageId, String phoneNumber, String message, final Callback cb ){
        ReactApplicationContext reactContext = getReactApplicationContext();
        try{

            this.callback = cb;
            String SENT = "SMS_SENT";
            String DELIVERED = "SMS_DELIVERED";

            PendingIntent sentPI = PendingIntent.getBroadcast(reactContext, 0,
                    new Intent(SENT), 0);

            PendingIntent deliveredPI = PendingIntent.getBroadcast(reactContext, 0,
                    new Intent(DELIVERED), 0);

            //---when the SMS has been sent---
            reactContext.registerReceiver(new BroadcastReceiver(){
                @Override
                public void onReceive(Context arg0, Intent arg1) {
                    switch (getResultCode())
                    {
                        case Activity.RESULT_OK:
                            sendCallback(messageId, "SMS sent");
                            break;
                        case SmsManager.RESULT_ERROR_GENERIC_FAILURE:
                            sendCallback(messageId, "Generic failure");
                            break;
                        case SmsManager.RESULT_ERROR_NO_SERVICE:
                            sendCallback(messageId, "No service");
                            break;
                        case SmsManager.RESULT_ERROR_NULL_PDU:
                            sendCallback(messageId, "Null PDU");
                            break;
                        case SmsManager.RESULT_ERROR_RADIO_OFF:
                            sendCallback(messageId, "Radio off");
                            break;
                    }
                }
            }, new IntentFilter(SENT));

            //---when the SMS has been delivered---
            reactContext.registerReceiver(new BroadcastReceiver(){
                @Override
                public void onReceive(Context arg0, Intent arg1) {
                    switch (getResultCode())
                    {
                        case Activity.RESULT_OK:
                            System.out.println("SMS delivered");
                            sendCallback(messageId, "SMS delivered");
                            break;
                        case Activity.RESULT_CANCELED:
                            System.out.println("SMS not delivered");
                            sendCallback(messageId, "SMS not delivered");
                            break;
                    }
                }
            }, new IntentFilter(DELIVERED));

            SmsManager sms = SmsManager.getDefault();
            sms.sendTextMessage(phoneNumber, null, message, sentPI, deliveredPI);

        }catch (Exception e) {

            sendCallback(messageId, "Unknown error");
            throw e;

        }

    }
}
