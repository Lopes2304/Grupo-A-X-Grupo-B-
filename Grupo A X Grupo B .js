import { Alert, Button, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [pontosgrupoa, setpontosgrupoa] = useState(0);
  const [pontosgrupob, setpontosgrupob] = useState(0);

  const vitoria = 10;

  return (
    <View>
      <Text> Grupo A</Text>
      <Text>Pontos: {pontosgrupoa}</Text>

      <Button
        title="Adicionar ponto"
        onPress={() => {
          if (pontosgrupoa < vitoria) {
            setpontosgrupoa(pontosgrupoa + 1);

            if (pontosgrupoa + 1 === vitoria) {
              Alert.alert('Vitória!', ' Grupo A venceu!');
            }
          }
        }}
      />

      <Button
        title="Tirar ponto"
        onPress={() => {
          if (pontosgrupoa > 0) {
            setpontosgrupoa(pontosgrupoa - 1);
          }
        }}
      />

      <Text>--------------------</Text>

      <Text> Grupo B</Text>
      <Text>Pontos: {pontosgrupob}</Text>

      <Button
        title="Adicionar ponto"
        onPress={() => {
          if (pontosgrupob < vitoria) {
            setpontosgrupob(pontosgrupob + 1);

            if (pontosgrupob + 1 === vitoria) {
              Alert.alert('Vitória!', ' Grupo B venceu!');
            }
          }
        }}
      />

      <Button
        title="Tirar ponto"
        onPress={() => {
          if (pontosgrupob > 0) {
            setpontosgrupob(pontosgrupob - 1);
          }
        }}
      />

      <Text>--------------------</Text>
    </View>
  );
}
