import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";

export default function Alert({ variant = "default" }) {
  return (
    <AlertContainer variant={variant}>
      <p>random gibberish</p>
      <button></button>
    </AlertContainer>
  );
}

function AlertContainer({ children, variant }) {
  const [isShowing, setIsShowing] = useState(true);

  const handleClose = () => setIsShowing(false);

  const color =
    variant == "danger"
      ? "red"
      : variant == "success"
      ? "green"
      : variant == "info"
      ? "amber"
      : variant == "default"
      ? "blue"
      : "grey";

  console.log(color);

  const styles = {
    container: `
    w-full h-12 p-4 flex items-center bg-${color}-100 text-${color}-500 border-2 rounded border-${color}-300`,
    close: `ml-auto rounded p-1 hover:bg-${color}-200 text-gray-500`,
  };

  return (
    <Transition
      show={isShowing}
      enter="transition duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={styles.container}>
        {children}
        <button onClick={handleClose} className={styles.close}>
          <HiX />
        </button>
      </div>
    </Transition>
  );
}
