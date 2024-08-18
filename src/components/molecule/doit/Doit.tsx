import { CheckBox } from '../..';

interface DoitProps {
  done: boolean;
  archived: boolean;
  title: string;
  description: string;
  time: string;
}

const Doit = ({ done, archived, title, description, time }: DoitProps) => {
  return (
    <div className="flex flex-col flex-nowrap gap-2 w-[12.5rem] min-w-60 max-w-[30rem] py-4 px-[1.25rem] rounded-xl bg-white dark:bg-lightblue shadow-shadow_01 dark:shadow-none">
      <div className="flex flex-row items-start self-stretch justify-between flex-nowrap">
        <article className="flex flex-col gap-2 pr-3 flex-nowrap">
          <span
            className="overflow-hidden text-blue text-[1.125rem] font-medium"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
            }}
          >
            {title}
          </span>
          <p
            className="overflow-hidden text-gray_400 text-xs leading-[1.125rem] self-stretch font-medium"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
            }}
          >
            {description}
          </p>
        </article>
        <CheckBox />
      </div>
      <div className="w-[12.5rem] h-[0.0625rem] bg-gray_200"></div>
      <div className="flex flex-row items-center self-stretch justify-between flex-nowrap">
        <span className="text-[0.6875rem] font-normal text-gray_400">
          <strong className="text-[0.6875rem] font-semibold">오늘</strong> {time}
        </span>
        <CheckBox type="archived" />
      </div>
    </div>
  );
};

export default Doit;
