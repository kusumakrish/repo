import NewStudents from "./NewStudent";
import Students from "./Student";
import StudentEdit from "./StudentEdit";

export const changeNum = (state=null, action) => {
    switch(action) {
        case 'AddStudent' : return <NewStudents/> ;
        case 'Edit' : return <StudentEdit/>;
        // default : return <Students/>;
    }
}

// export default changeNum;