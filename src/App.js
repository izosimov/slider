import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

function SayFullName(props) {
    return (
        <div>
            <h1>Моё имя {props.name}, фамилия - {props.surname}</h1>
            <a href={props.link}>Ссылка на мой профиль</a>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <SayFullName name="Ivan" surname="Ivanov" link="vk.com" />
                <SayFullName name="Varya" surname="Ivanova" link="ya.ru" />
            </div>
        );
    }
}

export default App;
