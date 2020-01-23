import React, {Component} from 'react';
import Carousel from '../Carousel/Carousel';

class Body extends Component {
    render() {
        return (
            <div className={'container'}>
                <div className="row">
                    <div className="col-12">
                        <h1>Soy un BODY!</h1>
                        <hr/>
                        <p>Esto es solo una muestra de que soy un body, contenido, lo que sea, es solo de muestra para el meet up de docker</p>
                        <Carousel/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;