import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LuPanelTopOpen } from "react-icons/lu";
import { Playlist } from '../Data/PlayList';

function Music({ music }) {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    const maxPage = 10;
    const [page, setPage] = useState(maxPage);

    const handleLoadingMore = () => {
        setPage(page + maxPage);
    };

    return (
        <>
            <div className='border border-border p-1 hover:scale-95 transitions rounded relative overflow-hidden'>
                <Link to={``} className='w-full'>
                    <img src={`/images/img/${music?.poster}`} alt={music?.name} className='w-full h-60 object-cover' />
                </Link>
                <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-70 text-white px-4 py-2'>
                    <h3 className='font-semibold truncate text-sm'>{music?.name}</h3>
                    <button
                        className='h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white'
                        onClick={togglePopup}
                    >
                        <FaHeart />
                    </button>
                </div>
            </div>

            {isPopupOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20'>
                    <div className='bg-white p-4 rounded-md'>
                        <div><LuPanelTopOpen/></div>
                        <div className='border-b-1 flex flex-col gap-2'>
                            <p>Create New Playlist</p>
                            <input type='text' placeholder='name of playlist'/>
                            <button className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-2 rounded-lg w-full'>Add</button>
                        </div>
                        <div className='border-b-1 mt-4'>
                            <div className='overflow-y-scroll overflow-hidden hide-scrollbar h-48 w-96'>
                                {
                                    Playlist.map((playlist ,index) => (
                                        <div className='flex justify-between pl-2 py-1'>
                                            <p className='text-sm'>{playlist.name}</p>
                                            <input type='checkbox'/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <button className='transitions bg-subMain text-white py-2 px-6 rounded w-full sm:w-auto'>OK</button>
                            <button className='transitions bg-subMain text-white py-2 px-6 rounded w-full sm:w-auto'>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Music;
