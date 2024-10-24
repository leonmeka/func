# Func

Func is a set of opinionated React components used to to create functional animations and interactive visualizations using React.

![Thumbnai](./assets/thumbnail.png)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or pnpm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/leonmeka/func.git
   cd func
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Development

To start the development server with hot module replacement (HMR), run:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to open the application.

## Usage

To use the library in your React application, import the necessary components and hooks:

```typescript
import { Func } from "@func/components/func/func";
import { Function } from "@func/components/primitives/function";
import { useAnimation } from "@func/hooks/use-animation";
```

You can create a simple animated function like this:

```typescript
const App = () => {
  // Define a base function
  const f = (x: number) => x;

  // Define an animation function
  const g = (x: number) => Math.sin(x) + 0.5;

  const animation = useAnimation({
    y: g,
    duration: 5_000, // = 5s
    range: [-10, 10], // = [-10, 10] on the x-axis
  });

  return (
    <Func>
      <Canvas>
        <Grid />
        <Function y={g} />
      </Canvas>

      <Controls>
        <AnimationControls animation={animation} />
      </Controls>
    </Func>
  );
};
```

## Contributing

If you have suggestions for improvements or new features, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
