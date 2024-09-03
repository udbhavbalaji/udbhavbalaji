import intro from "@data/intro";

function Intro() {
  return (
    <div>
      <div className='container flex flex-wrap items-center justify-center mx-auto'>
        <div className='flex items-center justify-center flex-col text-center pt-40 pb-10'>
          <p className='text-base md:text-xl font-semibold mb-2 '>
            Hi there! I'm
          </p>
          <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-semibold'>
            {intro.name}
          </h1>
          <p className='text-base md:text-xl mb-3 font-medium'>{intro.roles}</p>
          <p className='text-sm max-w-xl mb-6 font-bold'>{intro.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
