const processes = [
    {
        label:"Carburized and Hardened",
        id:0,
        value:0
    },
    {
        label:"Nitrided",
        id:1,
        value:1
    },
    {
        label:"Through Hardened",
        id:2,
        value:2
    },
    {
        label:"Nitrided Through Hardened",
        id:3,
        value:3
    },
    {
        label:"Flame or Induction Hardened",
        id:4,
        value:4
    }
       
];
const materials = [
    {
        label:"Steel",
        id:0,
        value:0
    },
    {
        label:"2.5% chrome (no aluminium)",
        id:1,
        value:1
    },
    {
        label:"Nitralloy 135M",
        id:2,
        value:2
    },
    {
        label:"Nitralloy N",
        id:3,
        value:3
    }
];

export function gearProcesses() {
    return processes;
}

export function gearMaterials() {
    return materials;
}