export interface HeaderSlide{
    id:string;
    title:string;
    image:string;
    description:string;
    content:{
        title:string;
        image:string;
        body:string[]
    }[];
}

export interface waterArea{
    id:string;
    image:string;
    depth_range:string;
    temperature:string;
    light:string;
    pressure:string;
    marine_life:string;
}

export interface commonData{
    id:string;
    title:string;
    image:string;
    description:string;
    content:{
        title:string;
        body:string;
    }[]
}

export interface planetData{
    id:string;
    title:string;
    image:string;
    description:string;
    content:{
        title:string;
        body:string
    }[]
}