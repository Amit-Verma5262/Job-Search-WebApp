import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    
    return (
        <div className='bg-[#F3F4F6] shadow-md'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-6'>
                <h1 className='text-2xl font-bold text-[#1E3A8A]'>Job<span className='text-[#F59E0B]'>Search</span></h1>
                
                <ul className='flex font-medium items-center gap-5 text-[#111827]'>
                    {user && user.role === 'recruiter' ? (
                        <>
                            <li><Link to="/admin/companies" className="hover:text-[#3B82F6]">Companies</Link></li>
                            <li><Link to="/admin/jobs" className="hover:text-[#3B82F6]">Jobs</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/" className="hover:text-[#3B82F6]">Home</Link></li>
                            <li><Link to="/jobs" className="hover:text-[#3B82F6]">Jobs</Link></li>
                            <li><Link to="/browse" className="hover:text-[#3B82F6]">Browse</Link></li>
                        </>
                    )}
                </ul>

                {!user ? (
                    <div className='flex items-center gap-2'>
                        <Link to="/login"><Button variant="outline" className="text-[#1E3A8A] border-[#1E3A8A] hover:bg-[#3B82F6] hover:text-white">Login</Button></Link>
                        <Link to="/signup"><Button className="bg-[#3B82F6] hover:bg-[#1E3A8A] text-white">Signup</Button></Link>
                    </div>
                ) : (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src={user?.profile?.profilePhoto} alt={user?.fullname} />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 bg-white text-gray-800">
                            <div className='p-4'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <Avatar>
                                        <AvatarImage src={user?.profile?.profilePhoto} alt={user?.fullname} />
                                    </Avatar>
                                    <div>
                                        <h4 className='font-medium'>{user?.fullname}</h4>
                                        <p className='text-sm text-gray-500'>{user?.profile?.bio}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col text-gray-700'>
                                    {user.role === 'student' && (
                                        <div className='flex items-center gap-2 mb-2 cursor-pointer hover:text-blue-600'>
                                            <User2 />
                                            <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                                        </div>
                                    )}
                                    <div className='flex items-center gap-2 cursor-pointer hover:text-red-600'>
                                        <LogOut />
                                        <Button onClick={logoutHandler} variant="link">Logout</Button>
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                )}
            </div>
        </div>
    )
}

export default Navbar
