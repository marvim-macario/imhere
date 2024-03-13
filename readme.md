# IMHERE

## Visão Geral

Este é um aplicativo React Native para gerenciar a presença de participantes em um evento. 

## Componentes

### Main Component

O componente principal retorna um fragmento que contém todos os outros componentes. Ele mantém o estado dos participantes e o nome do participante que está sendo adicionado.

#### State

- `participants`: Um array que armazena os nomes dos participantes.
- `participantName`: Uma string que armazena o nome do participante que está sendo adicionado.

#### Functions

- `handleParticipantAdd`: Adiciona o nome do participante ao array `participants`.
- `handleParticipantRemove`: Remove o nome do participante do array `participants`.

### TextInput

Um campo de entrada de texto que permite ao usuário inserir o nome do participante. Ele atualiza o estado `participantName` à medida que o usuário digita.

### TouchableOpacity

Um botão que, quando pressionado, aciona a função `handleParticipantAdd` para adicionar o nome do participante ao array `participants`.

### FlatList

Um componente que renderiza uma lista de participantes. Ele usa o array `participants` como sua fonte de dados. Cada item na lista é um componente `Participant`.

#### Participant

Um componente que exibe o nome de um participante e um botão para remover o participante. Quando o botão é pressionado, ele aciona a função `handleParticipantRemove` para remover o participante da lista.

### ListEmptyComponent

Um componente que é renderizado quando a lista de participantes está vazia. Ele exibe uma mensagem solicitando ao usuário que adicione participantes à lista de presença.