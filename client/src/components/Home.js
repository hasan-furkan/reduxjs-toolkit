import {useEffect} from "react";
import Masonry from "react-masonry-css";
import {useDispatch, useSelector} from "react-redux";
import {fetchCharacters} from "../redux/breakingbad/characterSlice";
import Loading from "./Loading";
import Error from "./Error";

export default function Home() {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters.items)
    const isLoading = useSelector(state => state.characters.isLoading)
    const error = useSelector(state => state.characters.error)
    const nextPage = useSelector(state => state.characters.page)
    const hasNextPage = useSelector(state => state.characters.hasNextPage)

    useEffect(() => {
    dispatch(fetchCharacters());
    }, [dispatch])


    if(error) {
        return <Error message={error} />
    }

    return (
        <>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    characters.map((character) => {
                        return (
                            <div key={character.char_id}>
                                <img src={character.img} alt="" className="character"/>
                                <div>{character.name}</div>
                            </div>
                        )
                    })
                }
            </Masonry>

            {isLoading && <Loading />}
            <div style={{padding: 15, textAlign: "center"}}>
                {hasNextPage
                    &&
                    !isLoading
                    &&
                    <button
                        onClick={() => dispatch(fetchCharacters(nextPage))}
                    >
                        Load More ({nextPage})
                    </button>}

            </div>

        </>
    )
}