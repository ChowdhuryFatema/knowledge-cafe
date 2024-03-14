import { FaRegBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({blog, handleBookMark, handleMarkAsRead}) => {
    const {id, cover, author, author_img, posted_date, reading_time, title, hashtags} = blog;

    return (
        <div className='mb-10 pb-10 border-b border-[#1111111A] space-y-3'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between gap-5'>
                <div className='flex gap-1'>
                    <img className='size-12' src={author_img} alt="" />
                    <div>
                        <h3 className='text-lg font-bold'>{author}</h3>
                        <p className='text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3'>

                    <span className='text-sm md:text-lg'>{reading_time} min read</span>


                    <button onClick={() => handleBookMark(blog)} className='md:text-xl text-lg'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h4 className='text-2xl md:text-3xl lg:text-4xl font-bold w-full lg:w-11/12'>{title}</h4>
            <ul>
            {
                hashtags.map((tag, idx) => <li className='text-[#11111199] inline mr-3 text-lg' key={idx}>#{tag}</li> )
            }
            </ul>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-[#6047EC] underline text-lg font-semibold'>
                Mark as read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;