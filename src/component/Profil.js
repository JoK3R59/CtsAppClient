import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import userDelivery from '../../data/DataDelivery';

const Profil = (props) => {

    const data = userDelivery.user1.user

    return (

        <View style = { styles.container }>

            <View>

                <Text>Gérer les informations de mon compte.</Text>
                <View>
                    <View>

                        <Text>Nom</Text>

                        <Text>{data.name}</Text>
                    </View>
                    
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => {}}
                    >

                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    <View>

                        <Text>Prenom</Text>

                        <Text>{data.firstName}</Text>
                    </View>
                    
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => {}}
                    >

                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    <View>

                        <Text>Date de Naissance</Text>

                        <Text>{data.birthdayDate}</Text>
                    </View>
                    
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => {}}
                    >

                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    <View>

                        <Text>Adresse E-mail</Text>

                        <Text>{data.email}</Text>
                    </View>
                    
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => {}}
                    >

                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    <View>

                        <Text>Mot de passe</Text>

                        <Text>{data.password}</Text>
                    </View>
                    
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => {}}
                    >

                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    <View>

                        <Text>Adresse</Text>

                        <Text>{data.address}</Text>
                    </View>
                    
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => {}}
                    >

                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    <View>

                        <Text>Ville</Text>

                        <Text>{data.city}</Text>
                    </View>
                    
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => {}}
                    >

                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    <View>

                        <Text>Code postal</Text>

                        <Text>{data.zipCode}</Text>
                    </View>
                    
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => {}}
                    >

                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    <View>

                        <Text>Numéros de téléphone</Text>

                        <Text>{data.phoneNumber}</Text>
                    </View>
                    
                    <TouchableOpacity
                     style={styles.button}
                     onPress={() => {}}
                    >

                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'grey'
    // }
    button : {
        // alignItems: "center",
        // backgroundColor: "#DDDDDD",
        padding: 10
    }
});

export default Profil;