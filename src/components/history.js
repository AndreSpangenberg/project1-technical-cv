import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class History extends Component{
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={4}>
                    <h4 style={{marginTop: '0px'}}>{this.props.companyName}</h4>
                    <p>{this.props.companyDesricption}</p>
                </Cell>
            </Grid>
        )
    }
}
export default History;