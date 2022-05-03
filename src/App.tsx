import React from 'react';
import { isPropertySignature } from 'typescript';

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return <button className="bg-violet-500 p-2">{text ?? 'Default'}</button>
}

function App() {
  return (
    <div>
      <Button text="Enviar"/>
      <Button text="OK"/>
    </div>
  );
}

export default App;
