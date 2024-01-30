import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LuPanelTopOpen } from "react-icons/lu";
import { Playlist } from '../Data/PlayList';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

function Music({ music }) {
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
                    >
                        <HiOutlineDotsHorizontal/>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Music;
