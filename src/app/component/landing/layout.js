import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence, motion } from 'framer-motion';
export default function Layout({ children }) {
  return (
    <NextUIProvider>
      <AnimatePresence>

          <body>
        {children}
          </body>
      </AnimatePresence>
    </NextUIProvider>
    );
}
