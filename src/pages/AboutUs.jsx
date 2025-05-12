import React from 'react';
import { lazyLoadings } from "@richaadgigi/stylexui";
import { Link } from 'react-router-dom';
import '@richaadgigi/stylexui/css/xui.min.css';

import Philosophy from '../components/Philosophy';
import Secure from '../components/Secure';
import Securitymeetsstyle from '../components/Securitymeetsstyle';

const AboutUs = () => {
  return ( <> <Philosophy />
  <Secure/>
  
<Securitymeetsstyle/>
    </>
    
  );
};

export default AboutUs;
