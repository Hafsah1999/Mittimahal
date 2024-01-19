import  { useEffect, useState } from 'react'



const Browse = () => {
  // const navigate = useNavigate();

  const [recipeList, setrecipeList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/product/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setrecipeList(data);
      setMasterList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

 
  const filterRecipe = (e) => {
    const value = e.target.value;
    setrecipeList(masterList.filter((recipe) => {
      return (recipe.pname.toLowerCase().includes(value.toLowerCase()))
    }))
    
  }




  const displayRecipeData = () => {
    if (recipeList.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return recipeList.map((recipe) => (
      <>
        <div className='col-md-3 mt-4 mb-4'>
          <div className="card bg-transparent shadow" style={{border:"none"}}>
            <img src={'http://localhost:5000/' + recipe.image} alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", height: 250 }} />

            <div className="card-footer" style={{border:"none",  height:"200px"}}>
              <h3 className=' fw-semibold mt-3 mb-3' style={{fontFamily:"serif"}}>{recipe.pname}</h3>
              <p className='text-secondary' style={{fontFamily:"cursive"}}>{recipe.pdetail}</p>
            </div>
          </div>
        </div>
      </>
    ))
  }

  return (
    <>

<form className="input-group mb-4 w-75 mx-auto">
            <input type="search" role="search" className="form-control" placeholder='Search' onChange={filterRecipe} />
            <button className="btn btn-dark">Search</button>
          </form>

          <div className="container-fluid bg-dark bg-opacity-25">
        <div className="container">
        <div className="row mt-5 mb-5">
          {displayRecipeData()}
        </div>
      </div>
      </div>
    


       

    </>
  )
}

export default Browse