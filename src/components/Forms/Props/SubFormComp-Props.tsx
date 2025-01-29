


/* 
    HERE IS THE CODE FOR ALL THE PROPS THAT WILL BE USED IN THE SUB-FORM-COMPONENTS
*/

interface eduProp {  //THESE ARE THE INDIVIDUAL PROPS FOR EDUCATION DETAILS
    institution: string;
    location: string;
    level: string;
    field: string;
    start_date: string;
    end_date: string;

    setInstitution: (institution: string) => void;
    setLocation: (location: string) => void;
    setLevel: (level: string) => void;
    setField: (field: string) => void;
    setStartDate: (start_date: string) => void;
    setEndDate: (end_date: string) => void;
}

export interface eduProps {  //THE INDIVIDUAL PROPS ARE GROUPED AND ACCESSED THROUGH THIS PROP
    props: eduProps[];
}