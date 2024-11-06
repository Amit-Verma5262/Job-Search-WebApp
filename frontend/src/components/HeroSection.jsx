import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center bg-[#F3F4F6] text-[#111827] py-16 flex flex-col items-center'>
            <div className='flex flex-col gap-4'>
                <span className='mx-auto px-6 py-3 rounded-full bg-[#3B82F6] text-white font-semibold text-sm'>
                    Top Job Hunt Destination
                </span>
                <h1 className='text-5xl font-extrabold tracking-tight leading-tight'>
                    Discover & Secure Your <br /> 
                    <span className='text-[#F59E0B]'>Dream Job</span>
                </h1>
                <p className='text-lg max-w-lg mx-auto leading-relaxed'>
                    Explore the roles crafted for your skills and ambitions. Let's get you started!
                </p>
                <div className='flex w-full max-w-lg mx-auto shadow-lg border border-[#D1D5DB] focus-within:border-[#3B82F6] transition-colors bg-white rounded-full items-center gap-3 p-2'>
                    <input
                        type="text"
                        placeholder='Find your dream job...'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full px-4 py-2 rounded-l-full text-gray-700 text-sm'
                    />
                    <Button onClick={searchJobHandler} className="rounded-full bg-[#1E3A8A] text-white hover:bg-[#3B82F6] transition">
                        <Search className='h-6 w-6' />
                    </Button>
                </div>
            </div>
        </div>    
    )
}

export default HeroSection;
