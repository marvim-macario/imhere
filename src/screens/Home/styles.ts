import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName:{
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate:{
      color: 'white',
      fontSize: 16, 
    },
    input:{
        flex: 1,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: 'white',
        padding: 16,
        fontSize: 16,
        height: 56,
        marginRight: 12,
        
    },
    button: {
        width:56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 12
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 36,
        marginBottom: 42
    },
    emptyList: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 24
    }
  });