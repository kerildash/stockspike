import { useState, type FC } from 'react';
import { useNavigate } from 'react-router';
interface IStartLoginRegisterProps {}

export const StartLoginRegister: FC<IStartLoginRegisterProps> = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <input
        type='text'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder='Enter username'
        className='placeholder-gray-600 w-full h-13 px-4 pl-6 text-gray-900 bg-white border-1 border-gray-600 rounded-3xl transition-colors duration-200 focus:outline-none '
      />

      <div className='mt-10 flex items-center h-30 rounded-3xl'>
        <button
          className='flex-1 bg-gray-300 text-black rounded-l-3xl h-full border-1 border-gray-600 border-r-transparent transition-colors duration-200 hover:cursor-pointer hover:text-black hover:bg-gray-200'
          type='button'
          onClick={() => navigate('/login', { state: { username } })}
        >
          Log in
        </button>

        <button
          className='flex-1 h-full  text-gray-700 border-1 border-gray-600 rounded-r-3xl transition-colors duration-200 hover:cursor-pointer hover:bg-gray-100 hover:text-black'
          type='button'
          onClick={() => navigate('/signup', { state: { username } })}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
