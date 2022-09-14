import { ImageBackground } from 'react-native'; //componente para podermos exibir a imagem

import { styles } from './styles';

import backgroundImage from '../../assets/background-galaxy.png'//importando a imagem

interface Props {
    children: React.ReactNode
}

export function Background({children}: Props) {
  return (
    <ImageBackground//componente image
        style={styles.container}
        source={backgroundImage}//Buscar imagem
        defaultSource={backgroundImage}//Pré carregar imagem
     >
        {children}
        
    </ImageBackground>
  );
}