import { Input, Button } from '../../index';
import { useNavigate } from 'react-router-dom'; // react-router-dom을 사용하여 페이지 이동

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <form
      action="/"
      onSubmit={handleSubmit}
      className="flex flex-col flex-nowrap justify-center items-center mt-[3.625rem]"
    >
      <Input className="mb-5" type="text" label="아이디" id="id_input" />
      <Input type="password" label="비밀번호" id="password_input" />
      <div className="flex flex-row flex-nowrap gap-[0.625rem] mt-11">
        <a
          className="flex items-center justify-center w-[7.25rem] h-[3.4375rem] rounded-xl bg-lightblue text-blue font-bold"
          href="/register"
          role="button"
          onClick={(event) => {
            event?.preventDefault();
            navigate('/register');
          }}
        >
          회원가입
        </a>
        <Button type="submit" color="Primary" size="w-[7.25rem] h-[3.4375rem]" Label="로그인" />
      </div>
    </form>
  );
};

export default LoginForm;
