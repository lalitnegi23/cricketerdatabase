import { useState } from "react"
import axios from 'axios';
import Modal from 'react-modal';
import { Card, Typography } from "@material-ui/core";
import styles from './ListItem.module.css';
Modal.setAppElement('#root');
const ListItem=(props)=>{

    const [playerData, setPlayerData]=useState({});
    const [modalIsOpen,setIsOpen] = useState(false);

    function closeModal(){
        setIsOpen(false);
      }
    async function searchPlayerByID(){
        try {
            const response = await axios.get(`https://cricapi.com/api/playerStats?apikey=vv3PJNB3QmhB0VuU1En7mBXo0183&pid=${props.item.pid}`);
            setPlayerData(response.data);
            setIsOpen(true);
        } catch (error) {
            console.log(`no such player exists`)
        }
    }
    return(<div>
        <Card onClick={searchPlayerByID} className={styles.card}>
            <Typography variant="h6">{props.item.fullName}</Typography>
        </Card> 
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Player Data"
        >
            <h2>{playerData?.fullName}</h2>
            <img src={playerData.imageURL}/>
            <div className={styles.batbowl}>
            <h3>Batting</h3>
            <h3>Bowling</h3>
            </div>
            <div className={styles.outerContainer}>
            <div className={styles.container}>
            <div>
            <h2>ODIs</h2>
            <h3>Matches - {playerData?.data?.batting?.ODIs?.Mat}</h3>
            <h3>Innings - {playerData?.data?.batting?.ODIs?.Inns}</h3>
            <h3>Runs - {playerData?.data?.batting?.ODIs?.Runs}</h3>
            </div>
            <div>
            <h2>T20Is</h2>
            <h3>Matches - {playerData?.data?.batting?.T20Is?.Mat}</h3>
            <h3>Innings - {playerData?.data?.batting?.T20Is?.Inns}</h3>
            <h3>Runs - {playerData?.data?.batting?.T20Is?.Runs}</h3>
            </div>
            <div>
            <h2>Tests</h2>
            <h3>Matches - {playerData?.data?.batting?.tests?.Mat}</h3>
            <h3>Innings - {playerData?.data?.batting?.tests?.Inns}</h3>
            <h3>Runs - {playerData?.data?.batting?.tests?.Runs}</h3>
            </div>
            </div>
            <div className={styles.container2}>
            <div>
            <h2>ODIs</h2>
            <h3>Matches - {playerData?.data?.bowling?.ODIs?.Mat}</h3>
            <h3>Innings - {playerData?.data?.bowling?.ODIs?.Inns}</h3>
            <h3>Wickets - {playerData?.data?.bowling?.ODIs?.Wkts}</h3>
            </div>
            <div>
            <h2>T20Is</h2>
            <h3>Matches - {playerData?.data?.bowling?.T20Is?.Mat}</h3>
            <h3>Innings - {playerData?.data?.bowling?.T20Is?.Inns}</h3>
            <h3>Wickets - {playerData?.data?.bowling?.T20Is?.Wkts}</h3>
            </div>
            <div>
            <h2>Tests</h2>
            <h3>Matches - {playerData?.data?.bowling?.tests?.Mat}</h3>
            <h3>Innings - {playerData?.data?.bowling?.tests?.Inns}</h3>
            <h3>Wickets - {playerData?.data?.bowling?.tests?.Wkts}</h3>
            </div>
            </div>
            </div>
        </Modal>
        </div>
    )
}

export default ListItem