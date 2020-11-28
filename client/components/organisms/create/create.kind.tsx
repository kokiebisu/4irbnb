import React from 'react';
import { KindCreateProps } from './props';

export const KindCreate: React.FC<KindCreateProps> = ()=> {
    return (
        <div>
            <div>
                <h3>What kind of place are you listing?</h3>
            </div>
            <div>
                <div><h3>First, let's narrow things down</h3></div>
                <div></div>
            </div>
            <div>
                <div><h3>Now choose a property type</h3></div>
                <div></div>
            </div>
        </div>
    )
}