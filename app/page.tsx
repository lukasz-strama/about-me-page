"use client"; 

import { FaGithub, FaRegCopy } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const text = "Hello 👋, I am a computer science student. I have a strong passion for programming, and I thoroughly enjoy the process of creating."
    let i = -1

    const interval = setInterval(() => {
      i++;
      if (i < text.length) {
        setMessage((prevMessage) => prevMessage + text.charAt(i))
      } else {
        clearInterval(interval)
      }
    }, 35);

    return () => {
      clearInterval(interval)
    };
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="text-4xl font-bold font-github mb-8">✨About Me✨</header>
      
      <img src="cat.png" alt="a cute cat" className="mb-4 w-1/4" />

      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono" style={{ height: '125px', width: '400px' }}>
        <div style={{ position: 'relative' }}>
          <button className="absolute top-0 right-0 m-0.1 p-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800">
            <FaRegCopy />
          </button>
        </div>  
        {message}
      </div>

      <br />

      <div className="text-center" style={{ overflow: 'hidden' }}>
        You can explore more about my work on my  <a href="https://github.com/lukasz-strama" className="underline hover:text-gray-400">
            <FaGithub className="inline-block align-text-bottom"/>GitHub
        </a> profile.
      </div>
    </main>
  )
}
