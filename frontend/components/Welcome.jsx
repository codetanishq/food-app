import React from 'react'

const Welcome = () => {
  return (
    <>
    <div className="relative h-[400px] bg-custom-yellow text-custom-text">
    <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            McqMate
        </h1>
        <p className="">
            For Students, From Students
        </p>


        <div className="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
            <input type="text" className="rounded-md w-full p-3 " placeholder="Search MCQ | Topic | Course"/>


            <button type="submit" className="absolute right-6 top-6">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>

        </div>
    </div>

</div>
    </>
  
  )
}

export default Welcome