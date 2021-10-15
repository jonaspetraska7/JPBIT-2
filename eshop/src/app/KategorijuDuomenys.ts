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
        title: "Clothes",
        description: "Newest clothes collection for men and women"
    },
    {
        id: 2,
        id_parent: 1,
        title: "For men",
        description: "Newest clothes collection for men"
    },
    {
        id: 3,
        id_parent: 1,
        title: "For women",
        description: "Newest clothes collection for women"
    },
    {
        id: 4,
        id_parent: 0,
        title: "Jewelry",
        description: "Feel beautiful with these accessories"
    },
    {
        id: 5,
        id_parent: 4,
        title: "Rings",
        description: ""
    },
    {
        id: 6,
        id_parent: 4,
        title: "Bracelets",
        description: ""
    },
    {
        id: 7,
        id_parent: 0,
        title: "Electronics",
        description: "21th century stuff for computer science"
    },
    {
        id: 8,
        id_parent: 1,
        title: "Accessories",
        description: ""
    },
]