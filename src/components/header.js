import React from 'react'
import {Text,View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


const HeaderCustom = ({title = 'Header', headerColor= 'green'}) => {
    return (
        <View 
    style={{  
        backgroundColor : 'black', 
        padding : 1, 
        borderRadius : 0,
        marginBottom : 25,
         }}>      
        <Text 
            style={{
            color : 'grey',
            fontSize : 20, 
            marginTop : 15, 
            textAlign : 'center', 
            fontFamily : 'modern',
            
            }}>
    
    Any plan...?
         
    </Text>
    </View> 
    )
}

export default HeaderCustom