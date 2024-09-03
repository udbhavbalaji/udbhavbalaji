function JourneyItem({
  index,
  title,
  year,
  type,
  details,
  techStack,
  styling,
}) {
  return (
    <li key={index} className='w-full mb-6 ml-2 mt-6'>
      <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
        {/* <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'> */}
        <span className='inline-block px-2 py-1 font-semibold rounded-md'>
          {type}
        </span>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <div className='my-1 text-sm font-normal leading-none'>{year}</div>
      </div>
      <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
        {techStack.map((item, index) => (
          <span
            key={index}
            className='inline-block px-2 py-1 font-semibold border-2 dark:border border-stone-900 dark:border-stone-100 rounded-md my-3'
          >
            {item}
          </span>
        ))}
      </p>
      <p className='my-2 text-base font-normal'>{details}</p>
      {/* </p> */}
    </li>
  );
}

export default JourneyItem;
