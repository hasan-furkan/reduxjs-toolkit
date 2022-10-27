import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "./Loading";

export default function Detail() {

    const { char_id } = useParams();
    const [char, setChar] = useState(null)
    const [loading, setLoading] = useState(true)

   useEffect(() => {
       axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/characters/${char_id}`)
           .then((res) => res.data)
           .then((data) => setChar(data[0]))
           .finally(() => setLoading(false))
   }, [])
    return (
        <>
            {loading && <Loading />}
            {
                char && (
                    <div>
                        <h1>{char.name} </h1>
                        <img src={char.img} alt="" style={{ width: "50%"}}/>
                    </div>
                )
            }

        </>
    )
}