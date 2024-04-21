interface SanityBody {
    _createdAt: string;
    _sd: string;
    _rev:string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset:{
        _ref:string;
        _tupr:"reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody{
    _id: Key | null | undefined;
    _type: "skill";
    image: Image;
    progress: number;
    title: string;

}

export interface Skill extends SanityBody{
    _id: Key | null | undefined;
    _type: "skill";
    image: Image;
    progress: number;
    title: string;

}
export interface Experience extends SanityBody{
    _id: Key | null | undefined;
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string [];
    technologies: Technology[];

    

}

export interface Project extends SanityBody{
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
    title:string;

}


export interface Social extends SanityBody{
    _id: Key | null | undefined;
    _type:"social";
    title: string;
    url: string;
}