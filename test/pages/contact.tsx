import { useEffect, useState } from "react";
import Nav from "./api/nav";

const ContactPage = () => {
    const [title, setTitle] = useState<string>();
    const [url, setUrl] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [artist, setArtist] = useState<string>();

    useEffect(() => {
        const load = async () => {

            const res = await fetch("/api/hello");
            const data = await res.json();
            console.log(data);
        };

        load();
    }, []);


    const createImage = async () => {
        const res = await fetch("/api/hello", {
            method: "POST",
            body: JSON.stringify({ title, url: "url", description: "description", artist: "artist" }),
        });
        const data = await res.json();
        console.log(data);
    }

    return (
       <div>Contact</div>
    );
    };

    export default ContactPage;