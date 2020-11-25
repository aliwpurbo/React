import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'

export default class DetailContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent />
                <h3>Detail</h3>
            </Container>
        )
    }
}
