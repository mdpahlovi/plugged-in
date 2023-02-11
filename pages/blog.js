import React from 'react';
import Main from '../components/Layout/Main';
import Section1 from '../components/Blog/section1';
import Section2 from '../components/Blog/section2';
import Section3 from '../components/Blog/section3';
import Section4 from '../components/Blog/section4';

const blog = () => {
    return (
        <Main title="Blog - PluggedIn">
            {/* Blog home page divided into 4 section except nav and footer */}
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
        </Main>
    );
};

export default blog;