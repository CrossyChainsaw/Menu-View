import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom'

export default function Loader() {
    const { id } = useParams()
    const [redirctTo, setRedirctTo] = useState(false);

    useEffect(() => {
        if (id) {
            const expires = new Date(Date.now() + 3 * 864e5).toUTCString()
            // eslint-disable-next-line no-useless-concat
            document.cookie = 'tableID' + '=' + encodeURIComponent(id) + '; expires=' + expires + '; path=' + '/' + "; SameSite=None; Secure"
            setRedirctTo(true)
        }
    }, [id]);

    if (redirctTo) {
        return <Navigate to="/" />
    } else {
        return <h1> Hey </h1>
    }
}