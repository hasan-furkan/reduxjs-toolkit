import {useEffect} from "react";
import Masonry from "react-masonry-css";
import {useDispatch, useSelector} from "react-redux";
import {fetchCharacters} from "../redux/breakingbad/characterSlice";
import Loading from "./Loading";
import Error from "./Error";
import {Link} from "react-router-dom";

export default function Home() {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters.items)
    const status = useSelector(state => state.characters.status)
    const error = useSelector(state => state.characters.error)
    const nextPage = useSelector(state => state.characters.page)
    const hasNextPage = useSelector(state => state.characters.hasNextPage)

    useEffect(() => {
        if(status === "idle") {
            dispatch(fetchCharacters());
        }
    }, [dispatch, status])


    if(status === "failed") {
        return <Error message={error} />
    }

    return (
        <>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    characters.map((character) => {
                        return (
                            <div key={character.char_id}>
                               <Link to={`/char/${character.char_id}`}>
                                   <img src={character.img} alt="" className="character"/>
                                   <div>{character.name}</div>
                               </Link>
                            </div>
                        )
                    })
                }
            </Masonry>

            <div style={{padding: 15, textAlign: "center"}}>
                {status === "loading" && <Loading />}
                {hasNextPage
                    &&
                    status !== "loading"
                    &&
                    <button
                        onClick={() => dispatch(fetchCharacters(nextPage))}
                    >
                        Load More ({nextPage})
                    </button>
                }

            </div>

        </>
    )
}