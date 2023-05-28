
const Info = ({img,title,subTitle}) => {
    return (
        <>
            <div className="mb-60">
               <img src={img} alt="chef img" className='absolute max-w-screen-xl' />
               <div className='bg-white text-center px-20  py-16 mx-28 relative my-16  top-20 bottom-0 left-0 right-0'>
                <h1 className='text-4xl font-bold mb-8'>{title}</h1>
                <p className='text-base '>{subTitle}</p>

               </div>
            </div>
        </>
    );
};

export default Info;