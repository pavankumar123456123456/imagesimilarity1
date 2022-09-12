import React, { useState } from 'react';
import deepai from "deepai";
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SenchaApi = () => {
    const [image1, setImage1] = React.useState("");
    const [image2, setImage2] = React.useState("");
    const [simi, setSimi] = React.useState("");
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const handleClick = async () => {
        deepai.setApiKey("4a00219b-1867-4e2a-b3cf-a9d99a91ff1d");
        setLoader(true);
        try {
            var resp = await deepai.callStandardApi("image-similarity", {
                image1: image1,
                image2: image2,
            });
            setLoader(false);
            setSimi(resp.output.distance);
        } catch (error) {
            setLoader(false);
            setError(true);
            setErrorMessage(error.message);
            console.log(error);
        }

    };

    return (
        <div>
            <div style={{ textAlign: "center", fontSize: "20px", fontWeight: 600, marginBottom: "20px" }}>
                Sencha Api range is in between 0 to 100. <span style={{ color: "green" }}>0 means perfect match</span>  and <span style={{ color: "red" }} >100 means not matching</span>.
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
                            marginBottom: "15px"
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

export default SenchaApi