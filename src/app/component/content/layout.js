import { NextUIProvider } from "@nextui-org/react";

export default function Layout({ children }) {
  return (
    <NextUIProvider>
          <body>
        {children}
          </body>
    </NextUIProvider>
    );
}
