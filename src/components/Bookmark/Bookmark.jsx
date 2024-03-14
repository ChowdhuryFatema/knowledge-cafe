import PropTypes from  'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <p className="bg-white p-4 text-sm md:text-lg text-[#111111] rounded-lg mb-3">{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;