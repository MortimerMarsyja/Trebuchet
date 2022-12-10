import { createRoot } from 'react-dom/client';
import Checkbox from '@components/Checkbox/CheckboxComponent';
import HomePage from '@pages/Home/HomePage';
import React from 'react';

interface Props {
    name: string
}

const App = ({ name }: Props): JSX.Element => {
    return (
        <>
            <h1>
                {name}
            </h1>
            <HomePage />
            <Checkbox label="Hello" checked={true} onChange={() => { }} />
        </>
    )
}

const container = document.getElementById('root')!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App name="trebuchet project launcher" />);