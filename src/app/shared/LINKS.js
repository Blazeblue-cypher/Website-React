import all3D from '../assets/img/all3dlogo.png';
import cult3d from '../assets/img/cults3dlogo.png';
import thingiverse from '../assets/img/thingiverselogo.png';
import turbosquid  from '../assets/img/turbosquidlogo.png';

export const LINKS = [
    {
        id:0,
        name: 'All3DPrints',
        image: all3D,
        featured: true,
        description:'All3DP is the #1 magazine for the digital maker, with compelling content on 3Dprinting, 3D scanning, CAD, laser cutting/engraving, CNC, SBCs, and more.'
    },
    
    {
        id: 1,
        name: 'Cults3D',
        image: cult3d,
        featured: false,
        description:'Cults is a marketplace that connects designers and people who want to make some real objects with 3D printing, CNC machining and laser cutting technologies'   
    },

    {
        id: 2,
        name: 'Thingiverse',
        image:thingiverse,
        featured: false,
        description:"Thingiverse is a thriving design community for discovering, making, and sharing 3D printable things. The world'slargest 3D printing community, we believe that everyone should be encouraged to create and remix 3D things, no matter their technical expertise or previous experience. In the spirit of maintaining an open platform, all designs are encouraged to be licensed under a Creative Commons license, meaning that anyone can use or alter any design.'"
    },

    {
        id: 3,
        name: 'TurboSquid',
        image: turbosquid,
        featured: false,
        description:"Cults is a marketplace that connects designers and people who want to make some real objects with 3D printing, CNC machining and laser cutting technologies.Cults is dedicated to all owners of 3D printers, CNC machines and laser cutters who wish to make premium and original creations."
    }




];

export default LINKS;