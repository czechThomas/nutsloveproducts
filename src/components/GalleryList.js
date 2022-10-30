import React from 'react';
import Gallery from './Gallery';

const GalleryList = ({ pictures }) => {
    return(
        <React.StrictMode>
        <div className=''>
            {
                pictures.map((user, i) => {
                    return (
                        <Gallery 
                            key={i} 
                            id={pictures[i].id} 
                            location={pictures[i].location} 
                            name={pictures[i].name} 
                            description={pictures[i].description} 
                            price={pictures[i].price}
                        />
                    );
                })
            }
        </div>
        </React.StrictMode>
    );
}

export default GalleryList;
