function MailListItem({ adress, date, subject, text }) {
  return (
    <div
      className="py-2 pl-2 border-b border-neutral-200 dark:border-neutral-800 sm:px-0 sm:mx-2"
      key={adress}
    >
      <div className="flex items-end justify-between pr-6 sm:pr-0">
        <p className="pr-2 overflow-hidden text-base font-medium sm:font-bold text-ellipsis whitespace-nowrap text-neutral-800 dark:text-neutral-300">
          {adress}
        </p>
        <p className="mr-2 text-sm text-neutral-400 sm:m-0">{date}</p>
      </div>
      <div className="flex items-center pr-6 text-sm sm:pr-2 sm:font-bold ">
        <p className="flex items-center w-full text-neutral-800 dark:text-neutral-300">
          <span className="sm:hidden inline-flex items-center font-normal text-[10px]  border border-neutral-700  mr-1 rounded h-[14px] px-[2px]">
            TO
          </span>
          <span className="overflow-hidden font-normal text-ellipsis whitespace-nowrap">
            {subject}
          </span>
        </p>
      </div>
      <p className="pr-6 overflow-hidden text-sm leading-5 text-neutral-500 line-clamp-2 text-ellipsis sm:pr-0">
        {text}
      </p>
    </div>
  );
}

export { MailListItem };
