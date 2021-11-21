import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';
export async function getStaticPaths() {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/blogs');
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { id: String(post.id) }
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + `/blogs/${params.id}`);
    const post = await res.json();

    return { props: { post } };
}

const Post = ({ post }) => {
    const { description, main_image, title, published_at } = post;
    return (
        <>
            <div className="h-96 relative">
                <Image
                    src={main_image.url || ''}
                    alt={main_image.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="container mx-auto py-6">
                <div className="flex justify-between">
                    <h3 className="font-black text-gray-800 md:text-3xl pb-4 text-xl">{title}</h3>
                    <p className="font-light text-gray-500">
                        {dayjs(published_at).format('DD, MMM YYYY')}
                    </p>
                </div>
                <ReactMarkdown className="md:text-lg text-gray-500 text-base">
                    {description}
                </ReactMarkdown>
            </div>
        </>
    );
};

export default Post;
