import PropTypes from  'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Cart = ({ bookMarks, markAsRead }) => {
    return (
        <div>
            <div className="bg-[#6047EC1A] rounded-lg">
                <h2 className="text-center p-5 text-[#6047EC] text-lg font-bold">Spent time on read : {markAsRead} min</h2>
            </div>
            <div className="bg-[#1111110D] mt-4 rounded-lg p-5">
                <h3 className="text-xl mb-3 text-[#111111] font-bold">Bookmarked Blogs {bookMarks.length}: </h3>
                {
                    bookMarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
                
            </div>
        </div>
    );
};

Cart.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    markAsRead: PropTypes.number.isRequired
}
export default Cart;