# `@monorepo-ui/button`

Just a Button component

## Installation

Open a Terminal in your project's folder and run,

```bash
yarn add @monorepo-ui/button
```

## Usage

```typescriptreact
import Button from '@monorepo-ui/button';

const App = () => {
  const handleSave = () => {}

  return (
    <Button
      text="Save"
      leftIcon="save"
      onPress={handleSave}
    />
  );
}

export default App;
```
