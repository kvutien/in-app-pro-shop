import styled from "styled-components";
import {Table} from "react-bootstrap";
import {Component} from "react";
import React from "react";


const StyledBootstrapTable = styled(Table)`

    &&& {
        color: ${props => props.theme.table.header}; 
        font-family: 'Raleway Semi-Bold', sans-serif;
    }

    &&& > tbody {
        font-family: 'Raleway', sans-serif;
        background-color: ${props => props.theme.table.row_bg}; 
    }
    
    &&& > thead {
        white-space: nowrap;
        background-color: ${props => props.theme.table.header_bg}; 
        .glyphicon {
            font-size: 14px;
        }
    }

`;

export class AppTable extends Component {
    render() {
        const {...props} = this.props;
        return <StyledBootstrapTable {...props}/>
    }
}