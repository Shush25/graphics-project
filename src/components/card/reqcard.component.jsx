import React from 'react';

import { Icon } from '@iconify/react';
import coinsLine from '@iconify/icons-ri/coins-line';

import './reqcard.styles.css';

export const Cardr = props =>( 
    <div className = "card-container1">
        <div className="row1">
            <div className="name">
                <p><b> {props.member.name} </b></p>
            </div>
            <div className="column2" align="right">
                    <button value="Take Task" className="btn" onClick={() => window.open(props.member.URL,"_blank")}><b>Take Task</b></button>   
            </div>           
        </div>
        <div className="row2">
            <div className="author">
                <p> {props.member.author} </p>
            </div>
            <div className="deadline">
                <p><b>Deadline:</b> {props.member.deadline} </p>
            </div>
            <div className="coins">
                <p>
                    <b>Coins:</b> {props.member.coins}   <Icon icon={coinsLine} color="gold" width="30px" height="25px" />
                </p>
            </div>
            <div className="note">
                <p> {props.member.note} </p>  
            </div>     
        </div>

    </div>
)