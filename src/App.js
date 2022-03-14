import {useEffect, useState} from "react";
import {Button} from "antd";

function App() {

    const [theme] = useState('PURPLE');

    useEffect(() => {
        if (theme === "DEFAULT") {
            require('./theme/default/defaultTheme.less')
        } else {
            require('./theme/purple/purpleTheme.less')
        }
    }, [theme]);

    return (
        <>
            <Button type="primary">Primary Button</Button>
        </>
    );
}

export default App;
