import React, {useState, useEffect} from 'react';
import CustomAppBar from "../Components/CustomAppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function MainPage(){
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    // Fetching data when component did mount
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=1", {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {
            let result = data;
            let notificationtList = []
            for (let i = 0; i < result.length; i++) {
                const noteObject = {
                    title: result[i].title,
                    body: result[i].body,
                    id: result[i].id
                }
                notificationtList.push(noteObject)
            }
            setNotifications(notificationtList);
        })
        .catch(e => console.log(e))
        .finally(()=>setLoading(false));
      },[])
      
    return (
        <React.Fragment>
            {
                loading ?
                <Typography>
                    Carregando conteúdo...
                </Typography>
                :(
                    <>
                        <CustomAppBar notificationsProps={notifications}/>
                        <Toolbar />
                        <Typography>
                            Conteúdo qualquer para preencher.
                        </Typography>
                    </>
                )
            }
        </React.Fragment>
    );
}
export default MainPage;