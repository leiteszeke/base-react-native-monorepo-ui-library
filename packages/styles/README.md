# `@monorepo-ui/styles`

Styling tool using consistencss

## Installation

Open a Terminal in your project's folder and run,

```bash
yarn add @monorepo-ui/styles
```

## Usage

```typescriptreact
import { C, apply } from '@monorepo-ui/styles';

const App = () => {
  return (
    <View style={apply(C.flex, C.justifyCenter, C.itemsCenter)}>
      <Text style={apply(C.font8, C.weightBold)}>
        Hello world
      </Text>
    </View>
  );
}

export default App;
```
