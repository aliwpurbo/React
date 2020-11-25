import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'

export default class EditContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent />
                <h3>Edit</h3>
            </Container>
        )
    }
}
