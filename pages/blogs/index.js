import ItemBlog from '@/components/Blogs/Item';

export async function getStaticProps() {
    const req = await fetch(process.env.NEXT_PUBLIC_URL + '/blogs');
    let res = await req.json();
    if (!res.length) res = [];
    return {
        props: { data: res }
    };
}
const Blogs = (props) => {
    const data = props.data || [];
    return (
        <>
            {data.map((item) => (
                <ItemBlog data={item} key={item.id} />
            ))}
        </>
    );
};

export default Blogs;
