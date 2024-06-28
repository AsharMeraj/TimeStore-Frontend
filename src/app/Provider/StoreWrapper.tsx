'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { Provider } from 'react-redux';
import store from '../Store/store';
import LoadingBar from 'react-top-loading-bar';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';



const StoreWrapper = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
  const router = useRouter()
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState<number>(0)
  useEffect(() => {
    setProgress(30);
    const timer = setTimeout(() => {
      setProgress(100);  // Finish loading after a delay
    }, 200); // Adjust the delay as needed

    return () => {
      clearTimeout(timer);  // Clear timeout on cleanup
    };
  }, [pathname, searchParams]);

  return (
    <Provider store={store}>
        <LoadingBar
          color='rgb(0, 105, 255)'
          progress={progress}
          waitingTime={200}
          height={3}
        />
        {children}
    </Provider>
  )
}

export default StoreWrapper


