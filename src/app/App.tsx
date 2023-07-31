import { type FC } from 'react';
import { Button } from '../shared/ui/button';
import './styles/index.scss';

const App: FC = () => {
    return (
        <div className="app">
            <h1>Hello, world 1</h1>
            <Button> АБВГД </Button>
        </div>
    );
};

export default App;
