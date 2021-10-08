import { useEffect, useState } from "react";
import Homes from "../Homes/Homes";
import './Home.css'

const Home = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('./fackdata.json')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div className='home '>

            {
                friends.map(friend => <Homes
                    key={friend.id}
                    friend={friend}></Homes>)
            }
        </div>
    );
};

export default Home;