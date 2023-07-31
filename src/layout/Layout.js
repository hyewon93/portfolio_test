import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import '../css/portfolio.css';

const Layout = ({layoutType}) => {

    const [typeClass, setTypeClass] = useState();

    useEffect(()=>{

        switch(layoutType) {
            case 'home':
                setTypeClass("layout_home");
                break;
            case 'profile':
                setTypeClass("layout_profile");
                break;
            case 'skills':
                setTypeClass("layout_skills");
                break;
            case 'career':
                setTypeClass("layout_career");
                break;
            default:
                break;
        }
    }, [layoutType]);

    return (
        <div className={'home_container ' + typeClass}>

        </div>
    )
}

export default Layout;