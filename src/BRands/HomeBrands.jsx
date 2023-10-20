import { Link } from 'react-router-dom';
import brandsData from '../../public/Brands.json';

const HomeBrands = () => {
    const brands = brandsData.brands;

    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 flex gap-6 rounded-2xl shadow-2xl mt-10'>
            {brands.map((brand) => (
                <div className='p-4 border-2 rounded-2xl' key={brand.id}>
                    <img className='h-96 w-112 rounded-xl' src={brand.brand_image1} alt={brand.brand_name} />
                    <h2>{brand.brand_name}</h2>
                    <p>{brand.brand_description}</p>
                    <Link to={`/individualPages/${brand.brand_name}`}>
                        <div className='justify-center flex'>
                            <button className='btn btn-primary'>Show Products</button>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default HomeBrands;