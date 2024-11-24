import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { getImageIds } from "../gallery";

const  loader = async() => {
    const images = await getImageIds();
    return images;
}


const Index = () => {
    const images = useLoaderData();
    const navigation = useNavigation();
    return (
        <>
            <p className="content">Haz click en la img</p>
        <div id="gallery" className={navigation.state === "loading" ? "loading" : ""}>
           
                {images.map((id) => (
                   
                        <Link key={id} to={`/photos/${id}`}> 
                        <img src={`/images/${id}.jpg`} alt="yoyo" />
                        </Link>
                    
                ))}
           
        </div>
    </>
    );
}


export { loader };
export { Index };