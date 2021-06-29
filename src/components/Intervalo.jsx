import './Intervalo.css';
import React from 'react';

import Card from './Card';

export default ({ min, max, onMinChange, onMaxChange}) => {
    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} 
                        onChange={e => onMinChange(e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} 
                        onChange={e => onMaxChange(e.target.value)}
                    />
                </span>
            </div>
        </Card>
    )
}