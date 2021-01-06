import React, { useState } from 'react';
import './Home.css';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'

function Home() {

    const [totalTests, setTotalTests] = useState(104)
    const [tempTotal, setTempTotal] = useState(null)

    const [failedTests, setFailedTests] = useState(0)
    const [tempFailed, setTempFailed] = useState("")
    const tempFailedChangeHandler = e => {
        setTempFailed(e.target.value)
    }
    const addNewFailedTestDataHandler = () => {
        if(tempFailed !== "" || tempFailed === null) {
            let tempData = tempFailed.trim()
            setFailedTests(tempData)
        }
        setTempFailed("")
    }

    return (
        <div>
            <div className="mainDiv">
                <div>
                    <Typography variant="h6">
                        Total tests: <span>{totalTests}</span>
                    </Typography>
                    <Typography variant="h6">
                        <div className="red">
                            Failing tests: <span>{failedTests}</span>
                        </div>
                    </Typography>
                    <Typography variant="h6">
                        <div className="green">
                            Passing tests: <span>{totalTests-failedTests}</span>
                        </div>
                    </Typography>
                </div>
                <div className="addDataSection">
                    <FormControl className="formComtrol">
                        <InputLabel htmlFor="newFailed">Latest Failures</InputLabel>
                        <Input type="text" value={tempFailed} onChange={tempFailedChangeHandler} />
                    </FormControl>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={addNewFailedTestDataHandler}
                    >
                        UPDATE
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home;