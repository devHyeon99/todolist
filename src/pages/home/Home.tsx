import { useState } from 'react';
import { Button, Doit, Header, Status, SlideUpModal, Input, TextArea } from '../../components';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full flex-nowrap mt-[5.63rem]">
      <Header showDate={true} />
      <Button
        type="button"
        color="Primary"
        Label="생각났어?"
        size="w-[8.25rem] min-h-[3.5rem]"
        isShowIcon={true}
        className="mt-[1.69rem]"
        onClick={() => setIsModalOpen(true)}
      />
      <ul className="flex flex-row items-center justify-center gap-4 mt-8 flex-nowrap">
        <Status type="All" count={3} />
        <div className="h-[14px] w-[1px] bg-gray_200"></div>
        <Status type="Doing" count={1} />
        <Status type="Done" count={2} />
        <Status type="Archived" count={1} />
      </ul>
      <div className="flex flex-col flex-nowrap gap-5 w-[16.25rem] h-[29.5rem] p-[0.625rem] mt-[1.37rem]">
        <Doit
          done={false}
          archived={false}
          title="동네 주민 모임"
          description="동네 주민 정기 모임일. 저녁식사 후, 모임 회의 가질 예정"
          time="오후 07:00 - 9:30"
        />
        <Doit
          done={false}
          archived={false}
          title="동네 주민 모임"
          description="동네 주민 정기 모임일. 저녁식사 후, 모임 회의 가질 예정"
          time="오후 07:00 - 9:30"
        />
      </div>
      <SlideUpModal isOpen={isModalOpen}>
        <div className="flex flex-col gap-6 flex-nowrap">
          <div className="flex flex-col gap-3 flex-nowrap">
            <span className="block text-blue text-[1.125rem] font-medium">오늘 뭐할래?</span>
            <Input type="text" label="오늘 할 일 제목" id="title_input" />
          </div>
          <div className="flex flex-col gap-3 flex-nowrap">
            <span className="block text-blue text-[1.125rem] font-medium">간단히 적어볼까?</span>
            <TextArea rows={2} label="오늘 할 일 내용" id="content_textarea" />
          </div>
          <div className="flex flex-col gap-1 flex-nowrap">
            <span className="block text-blue text-[1.125rem] font-medium">언제 할거야?</span>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 flex-nowrap">
            <Button size="w-[7.875rem] h-[3.4375rem]" Label="저장" />
            <Button
              color="Secondary"
              size="w-[7.875rem] h-[3.4375rem]"
              Label="취소"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </SlideUpModal>
    </div>
  );
};

export default Home;
