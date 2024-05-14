import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCpaturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, listenCpaturing);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCpaturing]
  );

  return ref;
}
