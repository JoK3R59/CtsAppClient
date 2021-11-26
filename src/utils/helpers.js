import { Platform, AsyncStorage } from "react-native";

import * as Google from 'expo-google-app-auth';

export const prefix = Platform.OS === 'ios' ? 'ios' : 'md';

export const config = {
    // expoClientId: `<YOUR_WEB_CLIENT_ID>`,
    iosClientId: `707708837561-vniv4kf4f0omdqkhjkrtddba641hhgjb.apps.googleusercontent.com`,
    androidClientId: `707708837561-r0k1807ccvas5t0efjqbrbt68rt7um5b.apps.googleusercontent.com`,
    iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
    androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
};

export const auth = async () => {
    try {
        // const result = await Google.logInAsync(config)
        // console.log('resultat de la demande Google auth', result)
        const { user, type } = await Google.logInAsync(config)
        if (type === 'success') {
            //stocker l'utilisateur dans la BDD

            //stocker l'utilisateur dans la mémoire interne
            // AsyncStorage.setItem('key', '')
            const { name, photoUrl, email } = user
            await AsyncStorage.setItem('user', JSON.stringify({
                name,
                photoUrl,
                email
            }))
            // naviguer vers l'écran Home
            console.log('Après Connexion, Naviguer vers HomeScreen')
        }
    } catch(e) {
        console.error('error auth', e)
    }
};