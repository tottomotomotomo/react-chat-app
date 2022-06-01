import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
} from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

import "./App.css";
import TextField from "./components/TextField";
import Cell from "./components/Cell";

function App() {
    // 状態(useState)
    const [message, setMessage] = useState("");
    const [userName, setUserName] = useState("");
    const [chatList, setChatList] = useState([]);
    const [db, setDb] = useState(null);

    // 値監視 useEffect
    // useEffect(() => {}, inputText)
    // useEffect(() =>{
    //
    // }, []);
    useEffect(() => {
        (async () => {
            const app = initializeApp({
                apiKey: "AIzaSyBvwS3ujkHUxv814BwkMjTYeRgDf7_l5OE",
                authDomain: "react-chat-app-f6afe.firebaseapp.com",
                projectId: "react-chat-app-f6afe",
                storageBucket: "react-chat-app-f6afe.appspot.com",
                messagingSenderId: "489623700854",
                appId: "1:489623700854:web:703e3d84f5e368d9382657",
            });

            const auth = getAuth();
            signInAnonymously(auth)
                .then(() => {
                    // Signed in..
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ...
                });

            const db = getFirestore(app);
            setDb(db);
    //
    //         // try {
    //         //   const docRef = await addDoc(collection(db, "chat"), {
    //         //     text: "おはよう",
    //         //     name: "ebata",
    //         //     createdAt: new Date(),
    //         //   });
    //         //   console.log("Document written with ID: ", docRef.id);
    //         // } catch (e) {
    //         //   console.error("Error adding document: ", e);
    //         // }

            const unsubscribe = onSnapshot(
                query(collection(db, "chat"), orderBy("createdAt")),
                (querySnapshot) => {
                    const chat = [];
                    querySnapshot.forEach((doc) => {
                        chat.push(doc.data());
                    });
                    setChatList(chat);
                }
            );
        })();
    });

    return (
        <div className="h-screen p-4 App">
            <main className="flex flex-col h-full">
                <ul className="grow">
                    {chatList.map((item, index) => {
                        return (<Cell
                            key={index}
                            text={item.text}
                            name={item.name}
                            createdAt={item.createdAt.toDate()}
                        ></Cell>
                        );
                    })}
                </ul>
                <div className="grow-0">
                    <TextField
                        value={{ name: userName, message: message}}
                        onChange={(event) => {
                            if (event.target.name === "userName"){
                                setUserName(event.target.value);
                            } else {
                                setMessage(event.target.value);
                            }
                        }}
                        onButtonClick={async () => {
                            try {
                                const docRef = await addDoc(
                                    collection(db, "chat"),
                                    {
                                        text: message,
                                        name: userName,
                                        createdAt: new Date(),
                                    }
                                );
                                setUserName("");
                                setMessage("");
                                console.log(
                                    "Document written with ID: ",
                                    docRef.id
                                );
                            } catch (e) {
                                console.error("Error adding document: ", e);
                            }
                        }}
                    ></TextField>
                </div>
            </main>
        </div>
    );
}

export default App;
