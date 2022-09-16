import React, { useState } from 'react'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const RapidApi = () => {
    const [image1, setImage1] = React.useState("");
    const [image2, setImage2] = React.useState("");
    const [simi, setSimi] = React.useState("");
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const options = {
        method: 'POST',
        url: 'https://similarity2.p.rapidapi.com/similarity',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '86190c2d5dmshd0db5cfc18fdd9ap19864ejsnd26f88c828e3',
            'X-RapidAPI-Host': 'similarity2.p.rapidapi.com'
        },

        data: {
            image_a: {
                type: "url",
                content: image1,
            },
            image_b: {
                type: "url",
                content: image2,
            }
        }

    };
    const handleClick = async () => {
        setLoader(true);
        axios.request(options).then(function (response) {
            setLoader(false);
            setSimi(response.data.similarity);
        }).catch(function (error) {
            setLoader(false);
            setError(true);
            setErrorMessage(error.message);
        });
    }

    return (
        <div>
            <div style={{ textAlign: "center", fontSize: "20px", fontWeight: 600, marginBottom: "20px" }}>
                MODEL 1 ranges between 0 to 1.<span style={{ color: "red" }} > 0 means not matching </span> and
                <span style={{ color: "green" }} > 1 means perfect match</span>.
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <div
                        style={{
                            border: "2px solid black",
                            width: "300px",
                            height: "300px",
                            backgroundImage: `url(${image1})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            marginBottom: "15px",
                            backgroundPosition: "center"
                        }}
                    ></div>

                    <div style={{ display: "flex", justifyContent: "center" }} >
                        <TextField id="outlined-basic" label="Enter First Image URL" variant="outlined"
                            onChange={(e) => setImage1(e.target.value)} fullWidth />
                    </div>

                </div>
                <div>
                    <div
                        style={{
                            border: "2px solid black",
                            width: "300px",
                            height: "300px",
                            backgroundImage: `url(${image2})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            marginBottom: "15px"

                        }}
                    ></div>
                    <div style={{ display: "flex", justifyContent: "center" }} >
                        <TextField id="outlined-basic" label="Enter Second Image URL" variant="outlined"
                            onChange={(e) => setImage2(e.target.value)} fullWidth />
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }} >
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Check Similarity Score
                </Button>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <h1>Similarity Score: {loader ? (<CircularProgress />) : error ? (<div>{errorMessage}</div>) : simi}</h1>
            </div>

        </div>
    )
}

export default RapidApi