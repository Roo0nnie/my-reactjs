function StudentInfo({data, title="Student Title"}) {

    const {ron, lyn, kris, gela} = data;

    return (
        <>
        <div className="col-sm-3">
        <div className="card">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <div>
                        <label>Name: {ron}</label>
                    </div>
                    <div>
                        <label>Course: {lyn}</label>
                    </div>
                    <div>
                        <label>Id: {kris}</label>
                    </div>
                    <div>
                        <label>Age: {gela}</label>
                    </div>
                    <div>
                        <label>Birthday: </label>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default StudentInfo;