import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../../index';

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <form className="flex flex-col flex-nowrap justify-center items-center mt-[2.275rem]">
      <Input className="mb-5" type="text" label="아이디" id="id_input" />
      <Input className="mb-5" type="text" label="닉네임" id="nickname_input" />
      <Input className="mb-5" type="password" label="비밀번호" id="password_input" />
      <Input type="password" label="비밀번호 확인" id="password_check_input" />
      <div className="flex flex-row flex-nowrap gap-[0.625rem] mt-11">
        <a
          className="flex items-center justify-center w-[7.25rem] h-[3.4375rem] rounded-xl bg-lightblue text-blue font-bold"
          href="/login"
          role="button"
          onClick={(event) => {
            event?.preventDefault();
            navigate('/login');
          }}
        >
          뒤로가기
        </a>
        <Button type="submit" color="Primary" size="w-[7.25rem] h-[3.4375rem]" Label="회원가입" />
      </div>
    </form>
  );
};

export default RegisterForm;
