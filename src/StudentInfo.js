function StudentInfo({data, title="Student Details", onEditHandler}) {

    const {id,firstName,lastName,code,age,gender,course,birthdate} = data;
   
    const onClickEditHandler = () => {
        onEditHandler(data);
    }

    return (
        <>
        <div className="col-sm-3">
            <div className="card">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        <div>
                            <h4>{firstName + " " + lastName}</h4>
                        </div>
                        <div>
                            <label>Course: {course}</label>
                        </div>
                        <div>
                            <label>Id: {id}</label>
                        </div>
                        <div>
                            <label>Age: {age}</label>
                        </div>
                        <div>
                            <label>Birthday: {birthdate}</label>
                        </div>
                        <div>
                            <label>Gender: {gender}</label>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myPopupWin" onClick={onClickEditHandler}>Edit</button>
                    </div>
            </div>
        </div>
            
        </>
    )
}

export default StudentInfo;