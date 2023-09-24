const Banner = () => {
  return (
    <div>
      <div
        className='hero h-[65vh]'
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-xl'>
            <h1 className='mb-5 text-4xl font-bold'>
              I Grow By Helping People In Need
            </h1>
            <div>
              <input
                type='text'
                placeholder='Search here'
                className='input input-bordered rounded-e-none md:w-full md:max-w-sm'
              />
              <button className='bg-red-500 hover:bg-red-600 rounded-s-none text-white font-bold py-3 px-4 rounded-md'>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
