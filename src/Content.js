/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";


function Content() {
    const [avatar, setAvatar] = useState();

    const handleChangefile = (e) => {
        const imgObject = e.target.files[0];
        imgObject.imgUrl = URL.createObjectURL(imgObject);
        console.log(imgObject.imgUrl);
        setAvatar(imgObject);
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.imgUrl)
        }
    }, [avatar])

    return (
        <div style={{ margin: 30 }}>
            <input
                type="file"
                onChange={handleChangefile}
            />
            {avatar && (
                <img src={avatar.imgUrl} width="80%" />
            )}
        </div>
    )
}
export default Content;