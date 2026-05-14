import { useEffect, useRef } from 'react';

export function usePolling(callback: () => void, interval: number, enabled: boolean = true) {
  const savedCallback = useRef(callback);
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
      return;
    }

    intervalId.current = setInterval(() => {
      savedCallback.current();
    }, interval);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [interval, enabled]);
}
