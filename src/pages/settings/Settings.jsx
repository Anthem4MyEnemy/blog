import React, { useContext, useState } from 'react';
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import profile from "../../components/assets/profile.jpg";
import { Context } from '../../context/Context';
import axios from 'axios';

const Settings = () => {
    const [file,setFile] = useState(null);
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [success,setSuccess] = useState(false);
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"

    console.log(user);
    const handleSubmit = async (e) =>{
        dispatch({type:"UPDATE_START"});
        e.preventDefault();
        const updatedUser ={
            userId:user._id,
            username:username,
            password:password
        };
        console.log(updatedUser);
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePicture = filename;

            try {
                await axios.post("http://localhost:5000/api/upload/",data)
            } catch (error) {
                
            }
        }
        try {
            const res = await axios.put("http://localhost:5000/api/users/"+user._id, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS",payload: res.data});
        } catch (error) {
            console.log("Update error",error);
            console.log("Update error",user._id);
            dispatch({type:"UPDATE_FAILURE"});

        }
    }

    return (
        <div className="settings">
            <div className="setting-wrapper">
                <div className="setting-title">
                    <span className="settings-update-title">Update your account</span>
                    <span className="settings-delete-title">Delete your account</span>
                </div>
                <form  className="settings-form" onSubmit={handleSubmit}>
                    <label >Profile picture</label>
                    <div className="settings-PP">
                        <img 
                        src={file ? URL.createObjectURL(file) : PF+user.profilePicture} 
                        alt="Profile picture" 
                        />
                        <label htmlFor="file-input">
                            <i className="settings-PP-icon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="file-input" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder={user.username}  onChange={e => setUsername(e.target.value)}/>

                    <label >Email</label>
                    <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)}/>

                    <label >Password</label>
                    <input type="password"  onChange={e => setPassword(e.target.value)}/>

                    <button className="settings-submit" type="submit">Update</button>
                    {success && <span style={{color:"grey",textAlign:"center",margin:"20px"}}>Profile has been updated</span>}
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings
