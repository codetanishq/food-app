import React, { useEffect } from 'react';

const Counter = () => {
  useEffect(() => {
    const targets = [
      { element: document.getElementById('starsCount'), count: 10, suffix: '+ ' },
      { element: document.getElementById('downloadsCount'), count: 300000, suffix: '+' },
      { element: document.getElementById('sponsorsCount'), count: 350, suffix: '+' }
    ];

    const maxCount = Math.max(...targets.map(target => target.count));

    function animateCountUp(target, duration) {
      let currentCount = 0;
      const increment = Math.ceil(target.count / (duration / 10));

      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= target.count) {
          clearInterval(interval);
          currentCount = target.count;
          target.element.textContent = currentCount + target.suffix;
        } else {
          target.element.textContent = currentCount;
        }
      }, 10);
    }

    // Animate count-up for each target with adjusted duration
    targets.forEach(target => {
      animateCountUp(target, maxCount / 100); // Adjust duration based on max count
    });
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <div className="text-custom-text">
      <div className="pt-12 sm:pt-20">
        <div className="max-w-screen-xl md:px-4 mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="md:text-7xl  font-bold leading-9  text-4xl sm:leading-10">
              We are Serving
            </h2>
            
          </div>
        </div>
        <div className="pb-12 mt-10 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 "></div>
            <div className="relative max-w-screen-xl md:px-4 mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className=" rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div
                    className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6  " id="item-1">
                      Years for the customers 
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none "
                      aria-describedby="item-1" id="starsCount">
                      0
                    </dd>
                  </div>
                  <div
                    className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 ">
                      Product Sold
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none "
                      id="downloadsCount">
                      25000
                    </dd>
                  </div>
                  <div
                    className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 ">
                      Customers in Sikkim
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none "
                      id="sponsorsCount">
                      0
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
