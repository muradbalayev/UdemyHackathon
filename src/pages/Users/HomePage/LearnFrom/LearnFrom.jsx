import './LearnFrom.scss';

function LearnFrom() {
  return (
    <div className='mt-20'>
      <h1 className="text-4xl font-bold text-center mb-8">Learn from Creative Experts</h1>
      <p className="flex justify-center text-center px-4">
        Skillshare classes are taught by industry leaders excited to share their tools, techniques, and professional journeys with you.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 relative mt-12 px-10">
        <div className="LearnFrom__img-box relative">
          <p className="LearnFrom__img-box-text text-3xl absolute bottom-4 left-4 text-white z-10">asdsadas</p>
          <img src="https://static.skillshare.com/assets/images/loh/marques_brownlee.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="LearnFrom__img-box relative">
          <p className="LearnFrom__img-box-text text-3xl absolute bottom-4 left-4 text-white z-10">asdsadas</p>
          <img src="https://static.skillshare.com/assets/images/loh/marques_brownlee.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="LearnFrom__img-box relative">
          <p className="LearnFrom__img-box-text text-3xl absolute bottom-4 left-4 text-white z-10">asdsadas</p>
          <img src="https://static.skillshare.com/assets/images/loh/marques_brownlee.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        <div className="LearnFrom__img-box relative">
          <p className="LearnFrom__img-box-text text-3xl absolute bottom-4 left-4 text-white z-10">asdsadas</p>
          <img src="https://static.skillshare.com/assets/images/loh/marques_brownlee.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1"></div>
    </div>
  )
}

export default LearnFrom