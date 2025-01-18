import React, { useEffect } from 'react'
import { setUpIntersectionObserver } from '../hook/useScrollAnimation';
import useIsLgScreen from '../hook/useIsLg';

const FeatureLine = () => {
   const isLg = useIsLgScreen();
  useEffect(()=> {
    const line4 = document.getElementById('line4');
    setUpIntersectionObserver(line4, true, 0.8, isLg)
  }, [])
  return (
    <div className='container'>
        <div className="border rounded-lg overflow-hidden flex justify-center p-4">
            <div id="line4" className='flex gap-8 p-6'>
                <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Download Analytics</h3>
                <span>•</span>
                <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Global Hotkeys</h3>
                <span>•</span>
                <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Custom Menus</h3>
                <span>•</span>
                <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Multi-window support</h3>
                <span>•</span>
                <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Trays</h3>
                <span>•</span>
                <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Offline Support</h3>
                <span>•</span>
                <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Deep Linking</h3>
                <span>•</span>
                <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Launch at Startup</h3>
                <span>•</span>
                <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Code Signing</h3>
                <span>•</span>
                <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Screen Recording</h3>
                <span>•</span>
            </div>
        </div>
    </div>
  )
}

export default FeatureLine