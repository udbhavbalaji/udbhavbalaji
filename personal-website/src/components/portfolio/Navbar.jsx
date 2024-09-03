import navbar from "@data/navbar";

function Navbar({ themeSwitcher, sun, moon, theme }) {
  return (
    <div className='pt-8 z-20 top-0 left-0 bg-inherit'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <div className='flex items-center h-6 sm:h-9 mr-3 self-center text-2xl font-semibold'>
          <a href=''>UB</a>.
        </div>
        <div>
          <ul className='inline-flex text-md font-medium'>
            {navbar.map((option, index) => (
              <li key={index} className='mx-4 my-2'>
                <a href={option.link}>{option.display}</a>
              </li>
            ))}
            <li>
              <button
                type='button'
                onClick={themeSwitcher}
                className='mx-4 my-2 bg-transparent hover:bg-stone-300 dark:hover:bg-gray-600 text-xl rounded-md text-stone-900 hover:text-stone-900 dark:text-white dark:hover:text-white'
              >
                {theme === "dark" ? sun : moon}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
