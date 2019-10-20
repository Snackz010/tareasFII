import React from 'react';

import {
    View,
    Text,
    Button
} from 'react-native';

const Home = (props) => {

    const { nombre } = props;
    return(
        <>
            <Text>{nombre}</Text>
        </>
    );
}

export default Home;