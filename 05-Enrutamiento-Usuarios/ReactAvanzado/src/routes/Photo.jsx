import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { getImageData } from "../gallery";

const loader = async ({params}) => {
  const data= await getImageData(params.imageId);
  return data;
}

const Photo = () => {
  const navigation = useNavigation();
  const goingBack = navigation.state === "loading" && !navigation.location.pathname.includes(id);
 const { id,title, author, votes, url } = useLoaderData();
const showVotes = navigation.formData ? votes + 1 : votes;
    return (
        <figure className={goingBack ? "loading" : ""}>
        <figcaption>
          <p><em>{title}</em> por <strong>{author}</strong></p>
          <p className="pill"><span>Votos</span><span>{showVotes}</span></p>
        </figcaption>
  
        <img src={url} /> 
        <Outlet />
      </figure>
    );
}

export { loader };
export { Photo };
   
  