import {
    PermissionsAndroid
} from 'react-native';


export default  class Permission {

   static checkPermission(permission, OnPermissionGrant, OnPermissionDenied) {

        this.requestToCheckPermission(permission).then(OnPermissionGrant).catch(OnPermissionDenied)
    }

    static checkLocationPermission(OnPermissionGrant ,OnPermissionDenied){
        return this.checkPermission(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,OnPermissionGrant,OnPermissionDenied);
    }
    static checkReadContactPermission(OnPermissionGrant ,OnPermissionDenied){
        return this.checkPermission(PermissionsAndroid.PERMISSIONS.READ_CONTACTS,OnPermissionGrant,OnPermissionDenied);
    }
    static checkReadSMSPermission(OnPermissionGrant ,OnPermissionDenied){
        return this.checkPermission(PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,OnPermissionGrant,OnPermissionDenied);
    }

    static requestToCheckPermission(permission) {
        return new Promise(resolve => {
            PermissionsAndroid.request(permission).then((success) => {
                if (success === PermissionsAndroid.RESULTS.GRANTED) {
                    resolve(permission);
                } else {
                    reject()
                }
            })
        }, (error) => {
            reject()
        })

    }


}
