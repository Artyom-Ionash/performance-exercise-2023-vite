import React from "react";

import { General } from "./components/Main/General.tsx";
import { Scripts } from "./components/Main/Scripts.tsx";
import { Carousel } from "./components/Main/Carousel.tsx";

export const App: React.FC = () => {
  return (
    <main className="main">
      <General />

      <Scripts />

      <Carousel />
    </main>
  );
};
