import profile from '../../../public/images/profile.png';

const Header = () => {
    return (
        <div className='container mx-auto max-w-[1180px] px-5'>
            <div className='flex justify-between gap-5 py-5 border-b border-[#11111126]'>
                <h2 className='text-3xl font-bold'>Knowledge Cafe</h2>
                <img className='size-12' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;