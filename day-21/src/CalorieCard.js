import React,{useState} from "react";
import './CalorieCard.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function CalorieCard({title,cal,index,items,setItems,EditCard}){
    const [edit,setEdit]=useState(false);
    return(
        <div className="calorie-card">
            {edit?
            (<div>
                <h2>
                    <TextField
                    id="outlined=basic"
                    label="ADD ITEM"
                    size="small"
                    variant="outlined"
                    onChange={(e)=>{
                        e.preventDefault();
                        EditCard(index,e.target.value,cal);
                    }}
                    value={title}
                    />
                </h2>
                <h3>
                    You have consumed <input style={{width:70}}
                    type="number"
                    value={cal}
                    onChange={(e)=>{
                        e.preventDefault();
                        EditCard(index,title,e.target.value);
                    }}/> Calories!
                </h3>
                <Button style={{marginTop:20}}
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={(e)=>{
                        setEdit(false);
                    }}>Done
                </Button>
                </div>):
                (
                    <div>
                        <h2>{title}</h2>
                        <div className="buttons">
                            <Button style={{margin:10}}
                            variant="contained"
                            color="primary"
                            onClick={()=>setEdit(true)}>
                                EDIT
                            </Button>
                            <Button style={{margin:10}}
                             variant="contained"
                             color="secondary"
                            onClick={()=>{
                                const newItems=items.filter((item,i)=>i!==index);
                                setItems(newItems);
                            }}>
                                DELETE
                            </Button>
                            <h3> You have consumed {cal} Calories!</h3>
                        </div>
                    </div>
                )   
            }
        </div>
    )
}

export default CalorieCard;