import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const Sidebar = () => {
  const router = useRouter();
  const goToUsers = () => {
    console.log('hi')
    // Replace '/users' with the path you want to redirect to
    router.push('/users');
  };
  return (
    <div className='w-64 h-screen bg-cover bg-center relative'
    style={{ backgroundImage: `url('/bg.png')` }}>
        <h1 className='text-5xl text-white text-bold text-center p-4'>VALLET</h1>
        <div className='flex flex-col text-white p-6 mb-2'>
            <button className='p-2'>Home</button>
            <button className='p-2'>QR code</button>
            <button className='p-2' onClick={goToUsers} >Usuários</button>
        </div>
        <Image className='absolute bottom-0' src='/robot.png' width={500} height={500} />

    </div>
  )
}

export default Sidebar