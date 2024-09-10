'use client'
import React,{useState} from 'react'

const Form = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setMessage(data.message);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };
    

  return (
     <form onSubmit={handleSubmit} className='w-full'>
      <div className='flex items-center gap-3'>
      <input
      className='w-full md:h-[56px] h-11 text-gray-2 placeholder:text-gray-2 rounded-full border px-7 border-gray-3'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email'
        required
      />
      <button type="submit" className='bg-black-1 transition-all hover:bg-gray-1 text-white md:text-base text-sm px-6 md:py-4 py-3 whitespace-nowrap rounded-full'>Sign up</button>
      </div>
      <div className='pl-2 pt-1'>
      {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
      {message && <p style={{ color: 'green', fontSize: '12px' }}>{message}</p>}
      </div>
    
    </form>
  )
}

export default Form