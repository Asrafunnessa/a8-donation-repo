const Banner = () => {
    return (
        <div className="hero h-[70vh] bg-gray-200">
        <img src="banner.png" alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-red-400">I Grow By Helping People In Need</h1>
      <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full h-12 max-w-xs rounded ml-2" />
       <button className="btn btn-error mr-2 ">Search</button>
    </div>
  </div>
</div>
    );
};

export default Banner;