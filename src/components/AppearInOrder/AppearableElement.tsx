import React from "react";

export interface IAppearableElement {
  children: React.ReactNode;
  priority?: number;
}

function AppearableElement({ children }: IAppearableElement) {
  return <>{children}</>;
}

export default AppearableElement;
