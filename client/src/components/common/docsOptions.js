import DocsGear from '../docsGear';

const contents = [
    {
        label:"Gears",
        id: 0,
        value: 0,
        routeLink:"/docs"
    },
    {
        label:"Shafts",
        id: 1,
        value: 1,
        routeLink:"/docs/Shafts"
    },
    {
        label:"GearBox",
        id: 2,
        value: 2,
        routeLink:"/docs/GearBox"
    },
        {
        label:"Materials",
        id: 3,
        value: 3,
        routeLink:"/docs/Materials"
    },
];

const contentsGearBox = [
    {
        label:"Single Reduction GearBox",
        id: 0,
        value: 0,
        routeLink:"/getStarted"
    },
    {
        label:"Double Reduction GearBox",
        id: 1,
        value: 1,
        routeLink:"/getStarted/drg"
    },
    {
        label:"Epicyclic GearBox",
        id: 2,
        value: 2,
        routeLink:"/getStarted/eg"
    },
    {
        label:"Compound Epicyclic GearBox",
        id: 3,
        value: 3,
        routeLink:"/getStarted/ceg"
    },
    {
        label:"Hybrid Epicyclic GearBox",
        id: 4,
        value: 4,
        routeLink:"/getStarted/heg"
    }
];

const navHeadingSolver = {
    label:"SOLVER",
    id:0
}
const involute = {
    label:"Draw you involute curve",
    id:0
}
const navLinks = [
    {
        label:"home",
        id:10,
        href:"/"
    },
    {
        label:"Get Started",
        id:11,
        href:"/getStarted"
    },
    {
        label:"Draw your involute",
        id:12,
        href:"/involute"
    }
];

const navLinksSolver = [
    {
        label:"home",
        id:10,
        href:"/"
    },
    {
        label:"documentation",
        id:11,
        href:"/docs"
    },
    {
        label:"Draw your involute",
        id:12,
        href:"/involute"
    }

];

const navLinksInvolute = [
    {
        label:"home",
        id:10,
        href:"/"
    },
    {
        label:"documentation",
        id:11,
        href:"/docs"
    },
    {
        label:"Get Started",
        id:12,
        href:"/getStarted"
    }

];
const navLinksContact = [
    {
        label:"home",
        id:10,
        href:"/"
    },
    {
        label:"documentation",
        id:10,
        href:"/docs"
    },
    {
        label:"Get Started",
        id:11,
        href:"/getStarted"
    },
    {
        label:"Draw your involute",
        id:12,
        href:"/involute"
    }
];

const Heading = {
        label:"documentation",
        id: 0
    }



const solverHeading = [
    {
        label:"Single Reduction Gearbox",
        id: 0
    },
    {
        label:"Double Reduction Gearbox",
        id: 1
    },
    {
        label:"Epicyclic Gearbox",
        id: 2
    },
    {
        label:"Compound Epicyclic Gearbox",
        id: 3
    },
    {
        label:"Hybrid Epicyclic Gearbox",
        id: 4
    }
];

export function getLinks() {
    return navLinks;
}

export function Gearbox() {
    return contentsGearBox;
}

export function docsheading() {
    return Heading;
}
export function solverHeadings() {
    return solverHeading;
}
export function getLinksSolver() {
    return navLinksSolver;
}

export function getLinksInvolute() {
    return navLinksInvolute;
}

export function getnavHeadingSOlver() {
    return navHeadingSolver;
}

export function getContents() {
    return contents;
}

export function getContent(id) {
    return contents.find(c => c.id === id);
}

export function getInvoluteHeading() {
    return involute;
}

export function getNavLinksContact(){
    return navLinksContact;
}