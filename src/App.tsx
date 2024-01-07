import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Box,
  Text,
  HStack,
  Heading,
  Button,
  Input,
  VStack,
} from "@kuma-ui/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Heading as="h3">Vite,React,kuma-ui</Heading>
      <HStack justify="center" alignItems="center" gap={10}>
        <Text p={8} fontSize="20px">
          Nyowari
        </Text>
        <Box p={10}>Box</Box>
      </HStack>

      <div className="card">
        <VStack>
          <Button borderRadius={7} color="red">
            hoge
          </Button>
          <Button
            borderRadius={18}
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <Input placeholder="Nyowa text" />
        </VStack>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
