
import { useLoaderData } from 'react-router-dom';
import Riview from './Riview';
import { Helmet } from 'react-helmet-async';
import Hooks from '../Hook/Hooks';
import UseAxiosSecure from '../Hook/UseAxiosSecure';
import toast from 'react-hot-toast';
import UseCart from '../Hook/UseCart';

const ProductDetails = () => {
    const{user} = Hooks()
    const axiosSecure = UseAxiosSecure()
    const [, refetch] = UseCart()
    const { _id, img_url, title, description, price, addToCart, buyNow } = useLoaderData();
     //    add to cart
     const handleAddToCart = (item) => {
        if (user && user?.email) {
            //TODO: send card item to the database
            const cartProduct = {
                productId: _id,
                email: user?.email,
                title: title,
                price: parseInt(price),
                photoUrl: img_url
            }
            axiosSecure.post('/carts', cartProduct)
                .then(res => {
                    const cartItem = res.data;
                    if (cartItem.insertedId) {
                        toast.success(`${title} added successfully`)
                    }
                    // refetch
                    refetch()
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Log in to add the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
      <div className='md:my-8'>
        <Helmet>
            <title>Product Details || orbitshiftbd</title>
            <meta name="description" content="This is your page description for SEO." />
        <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
        </Helmet>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
            <img src={img_url ? img_url : "https://www.dlinkmea.com/images/no-product.png"} alt={title} className='rounded'/>
            <div className='flex flex-col justify-between'>
                <div className='space-y-2'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p>{description}</p>
                    <h4>Price: {price}</h4>
                </div>

                <div className='flex gap-2'>
                    <button onClick={() => handleAddToCart(_id)} className="px-5 py-2 rounded relative group overflow-hidden font-medium bg-[#1a3c3d]  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2">{addToCart}</span>
                    </button>
                    <button className="px-5 py-2 rounded relative group overflow-hidden font-medium bg-[#1a3c3d]  text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2">Buy Now</span>
                    </button>
                </div>
            </div>
        </div>
        {/* Riview*/}
        <Riview title={title}></Riview>
      </div>
    );
};

export default ProductDetails;