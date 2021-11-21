import Image from 'next/image';
import Link from 'next/link';

const ItemBlog = ({ data }) => {
    const { title, description, main_image, id } = data;
    console.log(data);
    return (
        <Link href={'/blogs/' + id} passHref>
            <div className="flex flex-col justify-center py-6">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                    <div className="w-full md:w-1/3 bg-white grid place-items-center">
                        <Image
                            src={main_image?.formats?.thumbnail?.url || ''}
                            alt="tailwind logo"
                            className="rounded-xl"
                            width="400"
                            height="400"
                        />
                    </div>
                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                        <div className="flex justify-between item-center">
                            <p className="text-gray-500 font-medium hidden md:block">Vacations</p>
                        </div>
                        <h3 className="font-black text-gray-800 md:text-3xl text-xl">{title}</h3>
                        <p className="md:text-lg text-gray-500 text-base line-clamp-3">
                            {description}
                        </p>
                        <p className="text-xl font-black text-gray-800">
                            $110
                            <span className="font-normal text-gray-600 text-base">/night</span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ItemBlog;
