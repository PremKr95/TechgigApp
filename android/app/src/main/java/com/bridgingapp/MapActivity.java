package com.bridgingapp;

//import android.support.v7.app.AppCompatActivity;
//import android.os.Bundle;
//import android.view.Menu;
//import android.view.MenuItem;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.FragmentActivity;
import android.support.v4.content.ContextCompat;
import android.view.Menu;
import android.widget.Toast;

import com.facebook.react.uimanager.ThemedReactContext;
import com.here.android.mpa.common.GeoCoordinate;
import com.here.android.mpa.common.Image;
import com.here.android.mpa.common.OnEngineInitListener;
import com.here.android.mpa.common.ViewObject;
import com.here.android.mpa.mapping.Map;
import com.here.android.mpa.mapping.MapGesture;
import com.here.android.mpa.mapping.MapMarker;
import com.here.android.mpa.mapping.MapObject;
import com.here.android.mpa.mapping.SupportMapFragment;

public class MapActivity extends FragmentActivity {

    MapMarker m;
    // permissions request code
    private final static int REQUEST_CODE_ASK_PERMISSIONS = 1;

    /**
     * Permissions that need to be explicitly requested from end user.
     */
    private static final String[] REQUIRED_SDK_PERMISSIONS = new String[] {
            Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.WRITE_EXTERNAL_STORAGE };

    // map embedded in the map fragment
    private Map map = null;

    // map fragment embedded in this activity
    private SupportMapFragment mapFragment = null;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        checkPermissions();
    }

    private SupportMapFragment getMapFragment() {
        return (SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.mapfragment);
    }

    private void initialize() {
        setContentView(R.layout.activity_map);

        // Search for the map fragment to finish setup by calling init().
        mapFragment = getMapFragment();

        // Set up disk cache path for the map service for this application
        boolean success = com.here.android.mpa.common.MapSettings.setIsolatedDiskCacheRootPath(
                getApplicationContext().getExternalFilesDir(null) + File.separator + ".here-maps",
                "com.here.android.tutorial.MapService");

        if (!success) {
            Toast.makeText(getApplicationContext(), "Unable to set isolated disk cache path.", Toast.LENGTH_LONG);
        } else {
            mapFragment.init(new OnEngineInitListener() {
                @Override
                public void onEngineInitializationCompleted(OnEngineInitListener.Error error) {
                    if (error == OnEngineInitListener.Error.NONE) {
                        // retrieve a reference of the map from the map fragment
                        map = mapFragment.getMap();
                        // Set the map center to the Vancouver region (no animation)
                        map.setCenter(new GeoCoordinate(19.124376, 73.008951, 10),
                                Map.Animation.NONE);
                        // Set the zoom level to the average between min and max
                        map.setZoomLevel(15.0);
                        List<GeoCoordinate> markerCoOrdinates = getDummyMarkerCoOrdinates();
                        for(GeoCoordinate gc : markerCoOrdinates){
                            MapMarker mm = new MapMarker();
                            mm.setCoordinate(gc);
                            map.addMapObject(mm);
                        }

                        MapGesture.OnGestureListener listener =
                                new MapGesture.OnGestureListener.OnGestureListenerAdapter() {
                                    @Override
                                    public boolean onMapObjectsSelected(List<ViewObject> objects) {
                                        for (ViewObject viewObj : objects) {
                                            if (viewObj.getBaseType() == ViewObject.Type.USER_OBJECT) {
                                                if (((MapObject)viewObj).getType() == MapObject.Type.MARKER) {
                                                    // At this point we have the originally added
                                                    // map marker, so we can do something with it
                                                    // (like change the visibility, or more
                                                    // marker-specific actions)
                                                    Toast.makeText(getApplicationContext(), "you have clicked a map Marker!", Toast.LENGTH_SHORT).show();

                                                    if(m!=null)
                                                        map.removeMapObject(m);

                                                    m = new MapMarker();
                                                    Image imageRed = new Image();
                                                    try {
                                                        imageRed.setImageResource(R.drawable.marker_red);
                                                    } catch (IOException e) {
                                                        e.printStackTrace();
                                                    }
                                                    m.setCoordinate(((MapMarker) objects.get(0)).getCoordinate());
                                                    m.setIcon(imageRed);
                                                    m.setTitle("Mahape Road");
                                                    m.setDescription("Heavy Traffic from two hours");

                                                    map.addMapObject(m);


                                                    //((MapMarker) objects.get(0)).getCoordinate()  will give the coordinate
                                                }
                                            }
                                        }
                                        // return false to allow the map to handle this callback also
                                        return false;
                                    }
                                };

                        mapFragment.getMapGesture().addOnGestureListener(listener, 1, false);

                    } else {
                        System.out.println("ERROR: Cannot initialize Map Fragment");
                    }
                }
            });
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_map, menu);
        return true;
    }


    /**
     * Checks the dynamically controlled permissions and requests missing permissions from end user.
     */
    protected void checkPermissions() {
        final List<String> missingPermissions = new ArrayList<String>();
        // check all required dynamic permissions
        for (final String permission : REQUIRED_SDK_PERMISSIONS) {
            final int result = ContextCompat.checkSelfPermission(this, permission);
            if (result != PackageManager.PERMISSION_GRANTED) {
                missingPermissions.add(permission);
            }
        }
        if (!missingPermissions.isEmpty()) {
            // request all missing permissions
            final String[] permissions = missingPermissions
                    .toArray(new String[missingPermissions.size()]);
            ActivityCompat.requestPermissions(this, permissions, REQUEST_CODE_ASK_PERMISSIONS);
        } else {
            final int[] grantResults = new int[REQUIRED_SDK_PERMISSIONS.length];
            Arrays.fill(grantResults, PackageManager.PERMISSION_GRANTED);
            onRequestPermissionsResult(REQUEST_CODE_ASK_PERMISSIONS, REQUIRED_SDK_PERMISSIONS,
                    grantResults);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String permissions[],
                                           @NonNull int[] grantResults) {
        switch (requestCode) {
            case REQUEST_CODE_ASK_PERMISSIONS:
                for (int index = permissions.length - 1; index >= 0; --index) {
                    if (grantResults[index] != PackageManager.PERMISSION_GRANTED) {
                        // exit the app if one permission is not granted
                        Toast.makeText(this, "Required permission '" + permissions[index]
                                + "' not granted, exiting", Toast.LENGTH_LONG).show();
                        finish();
                        return;
                    }
                }
                // all permissions were granted
                initialize();
                break;
        }
    }

    private List<GeoCoordinate> getDummyMarkerCoOrdinates () {
        List<GeoCoordinate> markersList = new ArrayList<GeoCoordinate>();
        for(int i=0; i<10; i++){
            double lat = 19.124376 + i*(0.01);
            markersList.add(new GeoCoordinate(19.124376 + i*(0.001), 73.008951 + i*(0.001), 0));
        }
        return markersList;
    }
}