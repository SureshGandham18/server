import React, { useEffect } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from './firebase';

function App() {
    const { temp, humd, noise, room1, room2, book } = useParams();
    const dataId = doc(db, 'data', 'sensorData');

    useEffect(() => {
        console.log('URL Parameters:', temp, humd, noise, room1, room2, book);

        const uploadValues = async () => {
            try {
                await setDoc(dataId, {
                    temp: temp || 0,
                    humd: humd || 0,
                    noise: noise || 0,
                    room1: room1 || '',
                    room2: room2 || '',
                    book: book || '',
                });
                console.log("Values uploaded");
            } catch (error) {
                console.error(error);
            }
        };
        uploadValues();
    }, [temp, humd, noise, room1, room2, book]);

    return (
        <div className='hr__questions'>
            Values uploaded
        </div>
    );
}

export default App;
