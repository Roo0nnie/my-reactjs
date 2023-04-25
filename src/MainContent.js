const ListName = [
    'Ronnie Estillero',
    'Roselyn Lionag',
    'Kristoffer ofalsa',
    'Angela Escober'
  ];
  
  const DisplayName = ListName.map((item) => <li>{item}</li>);

  const MainContent = () => {
    return (
        <>
            <div className="main-content">
                <h1>List of Name</h1>
                <ul>{DisplayName}</ul>
            </div>
        </>
    )
  }

  export default MainContent;