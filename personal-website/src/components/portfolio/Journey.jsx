import journey from "@data/journey";
import JourneyItem from "./JourneyItem";
import Title from "./Title";

function Journey() {
  return (
    <div>
      <div className='container flex flex-wrap items-center justify-center mx-auto mt-5 relative'>
        <div className='mt-8 py-1 absolute top-0 w-full'>
          <Title>My Technical Journey</Title>
        </div>
        <div className='flex flex-col md:flex-row justify-start my-20 mb-10 w-9/12 bg-stone-50 dark:bg-gray-800 border border-stone-100 dark:border-gray-900 rounded-md'>
          {/* original line*/}
          {/* <div className='flex flex-col md:flex-row justify-start my-20 mb-10 w-9/12 bg-stone-50 dark:bg-gray-800 border border-stone-100 dark:border-gray-900 rounded-md'> */}

          <div className='w-full'>
            {/* original line*/}
            {/* <div className='w-full md:w-7/12'> */}

            <ol className='flex flex-wrap'>
              {/* original line*/}
              {/* <ol className='flex flex-col md:flex-row'> */}

              {journey.map((item, index) => (
                <JourneyItem
                  title={item.title}
                  year={item.year}
                  type={item.type}
                  details={item.details}
                  techStack={item.techStack}
                  styling={item.styling}
                  index={index}
                  key={index}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
