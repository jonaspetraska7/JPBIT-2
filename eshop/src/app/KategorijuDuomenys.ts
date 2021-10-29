export interface KategorijuModelis {
    id: number,
    id_parent: number,
    title: string;
    description: string;
}

export const kategorijos = [
    {
        id: 1,
        id_parent: 0,
        title: "Drabužiai",
        description: "Naujausi vyrų ir moterų drabužiai"
    },
    {
        id: 2,
        id_parent: 1,
        title: "Vyrams",
        description: "Naujausi drabužiai vyrams"
    },
    {
        id: 3,
        id_parent: 1,
        title: "Moterims",
        description: "Naujausi drabužiai moterims"
    },
    {
        id: 4,
        id_parent: 0,
        title: "Juvelyrika",
        description: "Aksesuarai norintiems gyventi gražiai"
    },
    {
        id: 5,
        id_parent: 4,
        title: "Žiedai",
        description: "žiedai kiekvienai progai"
    },
    {
        id: 6,
        id_parent: 4,
        title: "Apyrankės",
        description: "Apyrankės kiekvienam"
    },
    {
        id: 7,
        id_parent: 0,
        title: "Elektronika",
        description: "21 amžiaus elektronika"
    },
    {
        id: 8,
        id_parent: 1,
        title: "Aksesuarai",
        description: "Kiti aksesuarai"
    }
]