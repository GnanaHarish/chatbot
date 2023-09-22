import { useState, useEffect } from 'react';
import { useContextPage } from '../context/context';

const CountdownComponent = () => {
  const [countdown, setCountdown] = useState(5);
  const {setCurrentPage} = useContextPage();


  useEffect(() => {
    if (countdown > 1) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
        setCurrentPage("welcome")
    };
  }, [countdown, history]);

  return (
    <div className="flex flex-col items-center justify-center h-5 mt-10">
      <div className="text-2xl font-bold mb-1 text-gray-600">
        {countdown}
        <span className="text-2xl animate-ping">.</span>
        <span className="text-xl animate-ping">.</span>
        <span className="text-base animate-ping">.</span>
      </div>
      <p className='font-semibold text-gray-400'>Redirecting to Welcome Page</p>
    </div>
  );
};

export default CountdownComponent;
