import { useRef } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { sendVote } from "../gallery";

async function action({ params }) {
 await sendVote(params.imageId);
 return redirect(`/photos/${params.imageId}/voted`);
}


const Vote = () => {
  const boton = useRef();
  const navigation = useNavigation();
  // routes/vote.jsx

  return (
    <div className="cta">
      <p>Votar:</p>
      <Form
        method="post"
        onSubmit={() => (boton.current.disabled = "disabled")}
      >
        <button
          ref={boton}
          type="submit"
          className={navigation.state !== "idle" ? "sending" : ""}
        >
          Votar
        </button>
      </Form>
    </div>
  );
};
export { action };
export { Vote };
