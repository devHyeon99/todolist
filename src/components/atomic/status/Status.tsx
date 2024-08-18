interface StatusProps {
  type: 'All' | 'Doing' | 'Done' | 'Archived';
  count: number;
}

const Status = ({ type, count }: StatusProps) => {
  let status;

  switch (type) {
    case 'All':
      status = (
        <>
          <span className="text-sm font-semibold text-blue">모두</span>
          <span className="px-1 py-0.5 text-xs font-bold text-white dark:text-black rounded-[4px] bg-blue">
            {count}
          </span>
        </>
      );
      break;
    case 'Doing':
      status = (
        <>
          <span className="text-sm font-semibold text-gray_300">할일</span>
          <span className="px-1 py-0.5 text-xs font-bold text-white dark:text-black rounded-[4px] bg-gray_300">
            {count}
          </span>
        </>
      );
      break;
    case 'Done':
      status = (
        <>
          <span className="text-sm font-semibold text-gray_300">한일</span>
          <span className="px-1 py-0.5 text-xs font-bold text-white dark:text-black rounded-[4px] bg-gray_300">
            {count}
          </span>
        </>
      );
      break;
    case 'Archived':
      status = (
        <>
          <span className="text-sm font-semibold text-gray_300">보관</span>
          <span className="px-1 py-0.5 text-xs font-bold text-white dark:text-black rounded-[4px] bg-gray_300">
            {count}
          </span>
        </>
      );
      break;
    default:
      status = <div>Unknown Status</div>;
  }

  return (
    <button type="button" className="flex flex-row items-center justify-center gap-1 flex-nowrap">
      {status}
    </button>
  );
};

export default Status;
