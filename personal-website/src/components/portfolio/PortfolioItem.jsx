function PortfolioItem({
  title,
  imgUrl,
  stack,
  techSkills,
  link,
  description,
  index,
}) {
  return (
    <div
      key={index}
      className='border-2 dark:bg-gray-800 border-gray-900 rounded-md overflow-hidden'
    >
      <img
        src={imgUrl}
        alt='Project Image'
        className='w-full h-36 md:h-48 object-cover cursor-pointer'
      />
      <div className='w-full p-4'>
        <h3 className='text-lg md:txt-xl mb-2 md:mb-3 font-semibold'>
          {title}
        </h3>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm mb-3'>
          {stack.map((item, index) => (
            <span
              key={index}
              className='inline-block px-2 py-1 font-semibold border-2 dark:border border-stone-900 dark:border-stone-100 rounded-md'
            >
              {item}
            </span>
          ))}
        </p>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm mb-3'>
          {techSkills.map((item, index) => (
            <span
              key={index}
              className='inline-block px-2 py-1 font-semibold border-2 dark:border border-stone-900 dark:border-stone-100 rounded-md'
            >
              {item}
            </span>
          ))}
        </p>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm mb-3 max-w-md'>
          {description}
        </p>
        <a
          href={link}
          target='_blank'
          className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600 font-semibold'
          rel='noreferrer noopener'
        >
          Check Out the Project
        </a>
      </div>
    </div>
  );
}

export default PortfolioItem;
