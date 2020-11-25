import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'

export default class CreateContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent />
                <h3>Create</h3>
            </Container>
        )
    }
}
